import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FileUploader from 'react-firebase-file-uploader';
import DbConfig from "../config/database";


class App extends Component {

    constructor(props, fdb) {
        super(props);
        this.state = { value: '', status: '', title: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);

    }
    componentDidMount() {

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    sendCallback(e, r) {
        console.log(r);
        console.log(e);
        this.setState({
            title: "",
            value: "",
            status: ": SEND"
        })
    }

    handleSubmitFirebase(event) {
        //alert('A push was submitted: ' + this.state.value);
        alert(JSON.parse(event));
        var docInfo = {
            title: this.docnm.value,
            path: this.docfile.value,
            date: this.docdt.value,
            unm: this.unm.value,
            D_id: DbConfig.database()
                .ref("documents")
                .push(docInfo).key
        }; //documents info

        DbConfig.database()
            .ref("documents")
            .push(docInfo);
        this.docnm.value = ""; // <- clear the input
        alert("Successfully Added");


    }

    handlePdfUploadStart() { this.setState({ isUploading: true, progress: 0 }); }
    handlePdfProgress(progress) { this.setState({ progress }); }
    handlePdfUploadError(error) {
        this.setState({ isUploading: false });
        console.error(error);
    }
    handlePdfUploadSuccess(filename) {
        alert(filename);
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        DbConfig.storage().ref('upload/').child(filename).getDownloadURL().then(url => this.setState({ avatarURL: url }));
    }

    render() {
        return (
            <div className="content">
                <NavBar></NavBar>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header card-header-icon" data-background-color="rose">
                                <i className="material-icons">account_balance</i>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Add Document</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Document Name</label>
                                        <input type="text" className="form-control" ref={el => (this.docnm = el)} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">User Name</label>
                                        <input type="text" className="form-control" ref={el => (this.unm = el)} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Date</label>
                                        <input type="date" className="form-control" ref={el => (this.docdt = el)} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group  label-floating is-empty">
                                        <label className="control-label">Document</label>
                                        <FileUploader
                                            accept="pdf,doc/*"
                                            name="avatar"
                                            ref={el => (this.docfile = el)}
                                            filename={file => alert(this.docfile.value + file.name.split('.')[1])}
                                            storageRef={DbConfig.storage().ref('upload/')}
                                            onUploadStart={this.handlePdfUploadStart}
                                            onUploadError={this.handlePdfUploadError}
                                            onUploadSuccess={this.handlePdfUploadSuccess}
                                            onProgress={this.handlePdfProgress}
                                        />
                                        <span className="material-input"></span></div>

                                    <button type="submit" className="btn btn-fill btn-rose submit_btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default App;

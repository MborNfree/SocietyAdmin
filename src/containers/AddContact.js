import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Config from '../config/app';
import DbConfig from '../config/database';
var request = require('superagent');
import NavBar from '../components/NavBar';



class AddContact extends Component {

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
        event.preventDefault();
        var contactInfo = {
            E_type: this.contact_nm.value,
            E_number: this.contact_no.value,
            E_web: this.contact_web.value,
            E_mail: this.contact_eml.value,
            E_id: DbConfig.database().ref('emerg_contact').push(contactInfo).key,

        }; //user info
        DbConfig.database().ref('emerg_contact').push(contactInfo);
        this.contact_nm.value = ''; // <- clear the input
        this.contact_no.value = ''; // <- clear the input
        this.contact_web.value = ''; // <- clear the input
        this.contact_eml.value = ''; // <- clear the input

    }


    render() {
        return (
            <div className="content">
                <NavBar></NavBar>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header card-header-icon" data-background-color="rose">
                                <i className="material-icons">contact_phone</i>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Save Emergency data </h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Contact Name</label>
                                        <input type="text" className="form-control" ref={el => this.contact_nm = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Contact Number</label>
                                        <input type="number" className="form-control" ref={el => this.contact_no = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Contact Email</label>
                                        <input type="email" className="form-control" ref={el => this.contact_eml = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Contact Website</label>
                                        <input type="url" className="form-control" ref={el => this.contact_web = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>

                                    <button type="submit" className="btn btn-fill btn-rose">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default AddContact;

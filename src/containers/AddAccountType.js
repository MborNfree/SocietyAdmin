import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Config from '../config/app';
import DbConfig from "../config/database";
var request = require('superagent');
import NavBar from '../components/NavBar';


class AddAccountType extends Component {

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
        var accountTypeInfo = {
            account_type: this.Ac_type.value,
            accountType_id: DbConfig.database()
                .ref("accounttype_master")
                .push(accountTypeInfo).key
        }; //user info
        DbConfig.database()
            .ref("accounttype_master")
            .push(accountTypeInfo);
        this.Ac_type.value = ""; // <- clear the input
        alert("Successfully Added");

    }

    render() {
        return (
            <div className="content">
                <NavBar></NavBar>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header card-header-icon" data-background-color="rose">
                                <i className="material-icons">account_balance_wallet</i>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Save Account Type</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Account Type Name</label>
                                        <input type="text" className="form-control" ref={el => (this.Ac_type = el)} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Account Type Code</label>
                                        <input type="text" className="form-control" ref={el => (this.Ac_code = el)} onChange={this.handleChange} />
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
export default AddAccountType;

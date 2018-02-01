import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Config from '../config/app';
var request = require('superagent');
import NavBar from '../components/NavBar';
import DbConfig from '../config/database';


class AddService extends Component {

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
        var serviceInfo = {
            Service_name: this.service_nm.value,
            Service_type: this.service_type.value,
            Description: this.service_desc.value,
            Contact_no: this.service_cnt.value,
            S_ID: DbConfig.database().ref('services').push(serviceInfo).key,

        }; //user info
        DbConfig.database().ref('services').push(serviceInfo);
        this.service_nm.value = ''; // <- clear the input
        this.service_type.value = '';
        this.service_desc.value = '';
        this.service_cnt.value = '';
    }

    render() {
        return (
            <div className="content">
                <NavBar></NavBar>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header card-header-icon" data-background-color="rose">
                                <i className="material-icons">receipt</i>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Save data {this.state.status}</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Serivce Name</label>
                                        <input type="text" className="form-control" ref={el => this.service_nm = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Serivce Type</label>
                                        <input type="text" className="form-control" ref={el => this.service_type = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Serivce Description</label>
                                        <input type="text" className="form-control" ref={el => this.service_desc = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Serivce Contact number</label>
                                        <input type="text" className="form-control" ref={el => this.service_cnt = el} onChange={this.handleChange} />
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
export default AddService;

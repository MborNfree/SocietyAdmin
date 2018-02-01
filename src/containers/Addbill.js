import React, { Component } from 'react';
//import {Link} from 'react-router';
//import Config from   '../config/app';
import DbConfig from '../config/database';
//var request = require('superagent');
import NavBar from '../components/NavBar';

class AddBill extends Component {

    constructor(props, fdb) {
        super(props);

        this.state = {
            bill_nm: '',
            bill_eml: '',
            bill_total: '',
            bill_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);

        this.usernm = [];

        DbConfig.database().ref('users').once('value', function (snapshot) {
            var childData;

            snapshot.forEach(function (childSnapshot) {
                childData = childSnapshot.val();
                var eml = childData.email;
                var fnm = childData.first_name + " " + childData.last_name;
                var selectFnm = document.getElementById('ufnm');

                selectFnm.appendChild('<option value="' + eml + '">' + fnm + '</option>');
                //selectFnm.html('<option value={email}>{fnm}</option>');
            });

            //displayChatMessage(message.name, message.text, message.category, message.enabled, message.approved);
        });

    }
    componentDidMount() {
        const rootRef = DbConfig.database().ref();
        const post = rootRef.child('billing').orderByKey();


        post.once('value', snap => {
            snap.forEach(child => {
                this.setState({
                    bill_id: child.key,
                    bill_nm: child.val().bill_name,
                    bill_eml: child.val().bill_eml,
                    bill_total: child.val().total
                });
            });
        });

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
        });
    }

    handleSubmitFirebase(event) {
        //alert('A push was submitted: ' + this.state.value);
        event.preventDefault();
        var billInfo = {
            bill_name: this.pnm.value,
            bill_flatno: this.flatno.value,
            bill_due_date: this.billdue.value,
            bill_eml: this.billeml.value,
            bill_period: this.billrange.value,
            total: this.billtotal.value,
            bill_id: DbConfig.database().ref('billing').push(billInfo).key
        }; //user info
        DbConfig.database().ref('billing').push(billInfo);
        this.pnm.value = ''; // <- clear the input
        this.flatno.value = '';
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

                                <div className="post">
                                    <h3>{this.state.bill_nm}</h3>
                                    <h2>{this.state.bill_eml}</h2>
                                    <p>{this.state.bill_total}</p>
                                </div>
                                <h4 className="card-title">Add Bill</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Person Name</label>
                                        <select id="ufnm">
                                            <option value={this.email}>{this.fnm}</option>
                                        </select>
                                        <input type="text" className="form-control" ref={el => this.pnm = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Flat no</label>
                                        <input type="text" className="form-control" ref={el => this.flatno = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Bill Due Date</label>
                                        <input type="date" className="form-control" ref={el => this.billdue = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Email</label>
                                        <input type="email" className="form-control" ref={el => this.billeml = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Pan No</label>
                                        <input type="text" className="form-control" ref={el => this.billpan = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">status</label>
                                        <select>
                                            <option value="Unpaid">Unpaid</option>
                                            <option value="Paid">Paid</option>
                                        </select>
                                        <input type="text" className="form-control" ref={el => this.billstatus = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">total</label>
                                        <input type="text" className="form-control" ref={el => this.billtotal = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Bill period</label>
                                        <input type="date" className="form-control" ref={el => this.billrange = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
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
export default AddBill;

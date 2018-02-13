import React, { Component } from 'react';
import DbConfig from '../config/database';
import NavBar from '../components/NavBar';

class AddBill extends Component {

    constructor(props, fdb) {
        super(props);

        this.state = {
            bill_nm: '',
            bill_eml: '',
            bill_total: '',
            bill_id: '',
            chargeInputs: [],
            chargeTotal: [],
            userInput: [],
            total: '',
            status: '',
            selected: []
        };
        this.userState = {
            user_id: '',
            email: '',
            first_name: '',
            last_name: ''
        };
        this.chargeState = {
            charge_id: '',
            charge_title: '',
            charge_type: '',
            charge_amt: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.appendBillInput = this.appendBillInput.bind(this);
        this.appendUserInput = this.appendUserInput.bind(this);
    }

    _onSelect(option) {
        console.log('You selected ', option.label);
        this.setState({ selected: option });
    }

    appendUserInput() {
        //e.preventDefault();

        DbConfig.database().ref().child('users').orderByKey().once('value', snap => {
            snap.forEach(child => {
                this.userState = {
                    user_id: child.key,
                    email: child.val().email,
                    first_name: child.val().first_name,
                    last_name: child.val().last_name
                };
                // console.log('userState');
                // console.log(this.userState); //perfectly working 
                this.setState({ userInput: this.state.userInput.concat(this.userState) });
            });
        });

    }
    appendBillInput() {
        // e.preventDefault();
        DbConfig.database().ref().child('billing_charges').orderByKey().once('value', snap => {
            snap.forEach(child => {
                this.chargeState = {
                    cid: child.key,
                    charge_id: child.charge_id,
                    charge_title: child.val().charge_title,
                    charge_type: child.val().charge_type,
                    charge_amt: child.val().charge_amt
                };
               
                //console.log(this.chargeState); //perfectly working 
                this.setState({ chargeInputs: this.state.chargeInputs.concat(this.chargeState) });
            });
        });
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    renderUserInput() {
        return this.state.userInput.map((user) => {
            return (<option id={user.user_id} ref={el => this.bill_nm = el} value={user.email} onChange={this.handleChange}>{user.first_name}</option>);
        });
    }

    renderChargeInput() {
        return this.state.chargeInputs.map((charge) => {
            return (
                <div>
                    <label>{charge.charge_title}</label>
                    <input type="text" className="form-control" ref={el => this.total = el} value={charge.charge_amt} onChange={this.handleChange} />
                </div>
            )
        });
    }
    handleSubmitFirebase(event) {
        //alert('A push was submitted: ' + this.state.value);
        event.preventDefault();
       alert('submit form');
        this.billrange = this.billto.value + "-" + this.billfrom.value;
        //this.total = this.total  + this.total;
        var billInfo = {
            bill_eml: this.bill_nm.value,
            bill_due_date: this.billdue.value,
            bill_period: this.billrange,
            status: this.status.value,
            bill_id: DbConfig.database().ref('billing').push(billInfo).key
        }; //user info

        alert('submit'+billInfo);
        DbConfig.database().ref('billing').push(billInfo);
        this.bill_nm.value = ''; // <- clear the input
        this.billdue.value = '';
        this.status.value = '';
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
                                <h4 className="card-title">Add Bill</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <a href="javascript:void(0)" onClick={this.appendUserInput}><i className="fa fa-plus-circle"></i>Load Users</a>
                                        <div className="room-main">
                                            <div className="online-est">
                                                <select className="room-form">
                                                    {this.renderUserInput()}
                                                </select>
                                            </div>
                                        </div>
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <a href="javascript:void(0)" onClick={this.appendBillInput}><i className="fa fa-plus-circle"></i>Load Charges</a>
                                        <div className="room-main">
                                            <div className="online-est">
                                                {this.renderChargeInput()}
                                            </div>
                                        </div>
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">status</label>
                                        <select classNam="online-est" ref={el => this.status = el}>
                                            <option value="Unpaid">Unpaid</option>
                                            <option value="Paid">Paid</option>
                                        </select>
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Bill due date</label>
                                        <input type="date" className="form-control" ref={el => this.billdue = el} onChange={this.handleChange} />

                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Bill period</label>
                                        <input type="date" className="form-control" ref={el => this.billto = el} onChange={this.handleChange} />
                                        <input type="date" className="form-control" ref={el => this.billfrom = el} onChange={this.handleChange} />
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

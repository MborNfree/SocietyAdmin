import React, { Component } from 'react';
import DbConfig from '../config/database';
import NavBar from '../components/NavBar';
import { createEventHandlerWithConfig } from 'recompose';

class AddBill extends Component {

    constructor(props, fdb) {
        super(props);

        this.state = {
            bill_nm: '',
            bill_eml: '',
            bill_id: '',
            chargeInputs: [],
            chargeTotal: 0,
            userInput: [],
            Total: 0,
            status: '',
            selected: [],
            charges_amt:[]
            
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
        this.countTotal = this.countTotal.bind(this);
        this.renderUserInput = this.renderUserInput.bind(this);
        this.renderChargeInput = this.renderChargeInput.bind(this);
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
    countTotal(){
        var chargeTotal = 0;
        this.state.chargeInputs.forEach(charge => {

            chargeTotal +=  parseInt(charge.charge_amt);
            //console.log('total', parseInt(chargeTotal)); 

        })
        this.setState({ Total: chargeTotal});
       
    }
    renderChargeInput() {
        return this.state.chargeInputs.map((charge) => {
            return (
                <div>
                    <label>{charge.charge_title}</label>
                    <input type="text" className="form-control" ref={el => this.charges_amt= el} id="amt" name="charge_amt[]" value={charge.charge_amt} onChange={this.handleChange} />
                </div>
            )
        });
    }
    handleSubmitFirebase(event) {
      
        event.preventDefault();
        this.billrange = this.billto.value + "-" + this.billfrom.value;
        var counter = 0;
        this.state.userInput.forEach(user => {
            //console.log('total'+JSON.stringify(user)); 
            counter++;
            console.log(counter);
            var billInfo = {
                bill_eml: user.email,
                bill_name:user.first_name,
                bill_due_date: this.billdue.value,
                bill_period: this.billrange,
                status: this.status.value,
                total:this.state.Total,
                bill_id: DbConfig.database().ref('billing').push(billInfo).key
            }; //user info

            console.log('billInfo'+JSON.stringify(billInfo)); 
            DbConfig.database().ref('billing/feb').push(billInfo) ;
        })
    
       //alert('submit'+JSON.stringify(billInfo));
     // DbConfig.database().ref('billing').push(billInfo) ;
       alert('Bill Generates Successfully') ;
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
                                        <select className="status-drop" ref={el => this.status = el}>
                                            <option value="Unpaid">Unpaid</option>
                                            <option value="Paid">Paid</option>
                                        </select>
                                        <span className="material-input"></span></div>
                                        <div className="form-group label-floating is-empty">
                                            <label className="control-label">Total</label>
                                            <input type="text" className="form-control"  value={this.state.Total} onClick={this.countTotal} onChange={this.handleChange} />
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

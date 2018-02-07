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
            bill_id: '',
            inputs:[],
        };
        this.userState = {
            user_id:'',
            email:'',
            first_name:'',
            last_name:''
        };
        this.chargeState ={
            charge_id:'',
            charge_title:'',
            charge_type:'',
            charge_amt:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);
        this.appendInput = this.appendInput.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
      
        this.usercharge = [];
    }
    componentDidMount() {

        const rootRef = DbConfig.database().ref();
        const post = rootRef.child('billing').orderByKey();
        const users = rootRef.child('users').orderByKey();
        const bill_charges = rootRef.child('billing_charges').orderByKey();

        users.once('value', snap => {
            snap.forEach(child => {
                this.userState = {
                    user_id: child.key,
                    email: child.val().email,
                    first_name: child.val().first_name,
                    last_name: child.val().last_name
                };
                //this.usernm = this.setState();
                //console.log( this.userState);
            });
        });
        bill_charges.once('value', snap => {
            snap.forEach(child => {
                this.chargeState = {
                    chrage_key:child.key,
                    charge_id: child.charge_id,
                    charge_title: child.val().charge_title,
                    charge_type: child.val().charge_type,
                    charge_amt: child.val().charge_amt
                };
                this.usercharge = this.chargeState;
               //console.log( this.usercharge);
            });
        });

        console.log('user charges'+this.usercharge);
        for (var i = 0; i < this.usercharge.length; i++) {
            //this.usernm.push(<span  key={i}></span>);
            console.log(this.usercharge.length);
         }

         this.usercharge.forEach(child => {
        
            console.log(this.usercharge.length);
        });
       
    }
 
    getInitialState() {
        return {inputs:[]};
    }
   
    appendInput(e) {
        e.preventDefault();
        var newInput = this.state.inputs.length;
            console.log(newInput);
        this.setState({ inputs: this.state.inputs.concat(newInput)},function(){
            return;
        });

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
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
                                <h4 className="card-title">Add Bill</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Person Name</label>
                                        <div className="dropdown-container">
                                            <div className="dropdown-display">
                                                <span>{this.state.first_name}</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                        </div>
                                        <span className="material-input"></span></div>

                                        <div className="room-main">
                                        <div className="online-est">
                                            <h2 className="room-head">Bill charges
                                                <a href="javascript:void(0);" onClick={this.appendInput} className="rednew-btn"><i className="fa fa-plus-circle"></i> Add charge</a>
                                            </h2>
                    
                                           {this.state.inputs.map(function(item){
                                                return (
                                                        <div className="room-form" key={item} id={item}>
                                                            {item}
                                                            <a href="" className="remove"><i className="fa fa-remove"></i></a>
                                                            <ul>
                                                                <li>
                                                                    <label>Name <span className="red">*</span></label>
                                                                    <input type="text" ref={'name'+item} defaultValue={item} />
                                                                </li>
                    
                                                            </ul>
                                                        </div>
                                                )
                    
                                           })}
                                        </div>
                                    </div>
                                    <div className="form-group label-floating is-empty">
                                            <label className="control-label">status</label>
                                            <select>
                                                <option value="Unpaid">Unpaid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                            <label className="control-label">total</label>
                                            <input type="text" className="form-control" ref={el => this.billtotal = el} onChange={this.handleChange} />
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

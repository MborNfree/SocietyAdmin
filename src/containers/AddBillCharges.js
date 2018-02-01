import React, { Component } from 'react';
//import {Link} from 'react-router';
//import Config from   '../config/app';
import DbConfig from '../config/database';
//var request = require('superagent');
import NavBar from '../components/NavBar';
//var firebase = require('firebase');



class AddBillCharges extends Component {

    constructor(props, fdb) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

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
        // var chargeInfo = {
        //     charge_title : this.chrg_nm.value,
        //     charge_amt : this.chrg_amt.value,
        //     charge_type : this.chrg_type.value,
        //     charge_id :  DbConfig.database().ref('billing_charges').push(chargeInfo).key
        //   }; //user info
        // DbConfig.database().ref('billing_charges').push(chargeInfo);

        // var key = DbConfig.database().ref('billing_charges').push().key;
        // console.log(key);

        var counter;
        this.setState({
            counter: this.state.counter + 1
        });
        console.log('num' + this.counter);
        var key = parseInt(counter);
        console.log(key);
        // var  mGroupId = DbConfig.database().ref('billing_charges').push().getKey();
        // console.log(mGroupId);
        var newData = {
            charge_id: key,
            charge_title: this.chrg_nm.value,
            charge_amt: this.chrg_amt.value,
            charge_type: this.chrg_type.value,
        };

        // myRef.push(newData);
        DbConfig.database().ref('billing_charges').child(key).set(newData);
        //DbConfig.database().ref('billing_charges').child('8').set(newData);
        this.chrg_nm.value = ''; // <- clear the input
        this.chrg_amt.value = '';

    }

    getInitialState() {
        return {
            counter: 0
        };
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
                                <h4 className="card-title">Add Charge</h4>
                                <form onSubmit={this.handleSubmitFirebase}>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Charge Name</label>
                                        <input type="text" className="form-control" ref={el => this.chrg_nm = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">
                                        <label className="control-label">Charge Amount</label>
                                        <input type="text" className="form-control" ref={el => this.chrg_amt = el} onChange={this.handleChange} />
                                        <span className="material-input"></span></div>
                                    <div className="form-group label-floating is-empty">

                                        <select name="" className="form-control" ref={el => this.chrg_type = el} onChange={this.handleChange}>
                                            <option value="Fixed">Fixed</option>
                                            <option value="Percent">Percentage</option>
                                        </select>
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
export default AddBillCharges;

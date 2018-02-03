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
        this.state = {
            listVisible: false
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);
        this.renderListItems = this.renderListItems.bind(this);
        this.select = this.select.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.usernm = [];
        var colours = [{
            name: "Red",
            hex: "#F21B1B"
          }, {
            name: "Blue",
            hex: "#1B66F2"
          }, {
            name: "Green",
            hex: "#07BA16"
          }];

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
                //this.usernm = this.setState();
                console.log( this.state);
            });
        });

    }
      
      select(item) {
        this.props.selected = item;
      }
            
      show() {
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
      }
            
      hide() {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
      }
      
      renderListItems() {
        var items = [];
        for (var i = 0; i < this.state.length; i++) {
          var item = this.state[i];
          console.log(this.item);
          items.push(<div onClick={this.select.bind(null, item)}>
            <span>{item.name}</span>
          </div>);
        }
        return items;
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
                                        <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
                                        <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                                          <span>{this.state.bill_nm}</span>
                                          <i className="fa fa-angle-down"></i>
                                        </div>
                                        <div className="dropdown-list">
                                          <div>
                                            {this.renderListItems()}
                                          </div>
                                        </div>
                                      </div>
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

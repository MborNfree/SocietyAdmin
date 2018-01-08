import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import Config from   '../config/app';
import DbConfig from "../config/database";
var request = require('superagent');
import NavBar from '../components/NavBar';
var firebase = require('firebase');


class App extends Component {

	constructor(props,fdb) {
	    super(props);
	    this.state = {value: '',status:'',title:''};

	    this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
	    this.handleSubmitFirebase = this.handleSubmitFirebase.bind(this);
        this.sendCallback = this.sendCallback.bind(this);
 
	 }
     componentDidMount() {
       
      }
	handleChange(event) {
		this.setState({value: event.target.value});
	}

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

	sendCallback(e,r){
		console.log(r);
    	console.log(e);
		this.setState({
            title:"",
			value:"",
			status:": SEND"
		})
	}

	handleSubmitFirebase(event) {
        //alert('A push was submitted: ' + this.state.value);
        event.preventDefault();
        var eventInfo = {
            event_name : this.event_nm.value,
            event_date : this.event_date.value,
            event_desc : this.event_desc.value,
            event_type : this.event_type.value,
            ID :  DbConfig.database().ref('events').push(eventInfo).key
          }; //user info
        DbConfig.database().ref('events').push(eventInfo);
        this.event_nm.value = ''; // <- clear the input
        this.event_date.value = ''; 
        this.event_desc.value = '';
        this.event_type.value = '';
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
                            <label className="control-label">Event Name</label>
                            <input type="text" className="form-control" ref={ el => this.event_nm = el }  onChange={this.handleChange} />
                        <span className="material-input"></span></div>
                        <div className="form-group label-floating is-empty">
                            <label className="control-label">Event Description</label>
                            <input type="text" className="form-control" ref={ el => this.event_desc = el } onChange={this.handleChange} />
                        <span className="material-input"></span></div>
                        <div className="form-group label-floating is-empty">
                        <label className="control-label">Event Date</label>
                        <input type="date" className="form-control" ref={ el => this.event_date = el } onChange={this.handleChange} />
                    <span className="material-input"></span></div>
                    <div className="form-group label-floating is-empty">
                    <label className="control-label">Event Type</label>
                    <input type="text" className="form-control" ref={ el => this.event_type = el }  onChange={this.handleChange} />
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
export default App;

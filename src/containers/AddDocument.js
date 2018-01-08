import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import Config from   '../config/app';
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
        alert(this.state.value);
        alert(JSON.stringify(event));
        //event.preventDefault();
   //console.log(Fireadmin.elements);

     }
     
 
    handleAdd(text){
       this.firebaseRef = new firebase('https://society-182906.firebaseio.com/docuemts/');
        this.rootRef.once("value", function(snapshot){
                var todos =[];
                snapshot.forEach(function(data){
                     console.log(data.val());
                    var  todo= {
                            id : data.val().id,
                            text : data.val().text
                     }
                     todos.push(todo);
                     this.setState({todos:todo})
                });
        })
        var NewTodo ={
            id : this.state.todos.length+1,
            text : text
        }
        this.rootRef.push(NewTodo);
    }
   
  render() {
    return (
			<div className="content">
			<NavBar></NavBar>
      <div className="row">
      	<div className="col-md-10">
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="rose">
                <i class="material-icons">account_balance</i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">Save data {this.state.status}</h4>
                    <form onSubmit={this.handleSubmitFirebase}>
                        <div className="form-group label-floating is-empty">
                            <label className="control-label">Document Name</label>
                            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                        <span className="material-input"></span></div>
                        <div className="form-group label-floating is-empty">
                            <label className="control-label">Document</label>
                            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
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
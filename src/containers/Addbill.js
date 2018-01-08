import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import Config from "../config/app";
import DbConfig from "../config/database";
var request = require("superagent");
import NavBar from "../components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.sendCallback = this.sendCallback.bind(this);
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    var userInfo = {
      billing_name: this.pnm.value,
      billing_flat: this.fno.value,
      bill_id :  DbConfig.database().ref('billing').push(userInfo).key
    }; //user info
    DbConfig.database()
      .ref("billing")
      .push(userInfo);
    this.pnm.value = ""; // <- clear the input
    this.fno.value = "";
    alert("Successfully Added");
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



  render() {
    return (
      <div className="content">
        <NavBar />
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div
                className="card-header card-header-icon"
                data-background-color="rose"
              >
                <i class="material-icons">receipt</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Save data {this.state.status}</h4>
                <form onSubmit={this.addMessage.bind(this)}>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Person Name</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.pnm = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Flat number</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.fno = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Charge1</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.chrg1 = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Charge2</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.chrg2 = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Charge3</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.chrg3 = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Total</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={el => (this.total = el)}
                      onChange={this.handleChange}
                    />
                    <span className="material-input" />
                  </div>
                  <button type="submit" className="btn btn-fill btn-rose">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

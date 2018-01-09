import React, { Component } from 'react';
import { render } from 'react-dom'

import Master from './containers/Master'
import App from './containers/App'
import Fireadmin from './containers/Fireadmin'
import Firestoreadmin from './containers/Firestoreadmin'
import Push from './containers/Push'
import AddBill from './containers/Addbill'
import Profile from './containers/Profile'
import AddEvent from './containers/AddEvent';
import AddService from './containers/AddService';
import AddContact from './containers/AddContact';
import AddServiceCat from './containers/AddServiceCat';
import AddAccount from './containers/AddAccount';
import AddAccountType from './containers/AddAccountType';
import AddSubAccount from './containers/AddSubAccount';
import AddBillCharges from './containers/AddBillCharges';
import AddDocument from './containers/AddDocument';
import Config from   './config/app';

import { Router, Route,hashHistory,IndexRoute } from 'react-router'

class Admin extends Component {

  //Prints the dynamic routes that we need for menu of type fireadmin
  getFireAdminRoutes(item){
    if(item.link=="fireadmin"){
      return (<Route path={"/fireadmin/"+item.path} component={Fireadmin}/>)
    }else{

    }
  }

  //Prints the dynamic routes that we need for menu of type fireadmin
  getFireAdminSubRoutes(item){
    if(item.link=="fireadmin"){
      return (<Route path={"/fireadmin/"+item.path+"/:sub"} component={Fireadmin}/>)
    }else{

    }
  }

  //Prints the Routes
  /*
  {Config.adminConfig.menu.map(this.getFireAdminRoutes)}
  {Config.adminConfig.menu.map(this.getFireAdminSubRoutes)}
  */
  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={Master}>
            {/* make them children of `Master` */}
            <IndexRoute component={App}></IndexRoute>
            <Route path="/app" component={App}/>
            <Route path="/push" component={Push}/>
            <Route path="/addbill" component={AddBill}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/addevent" component={AddEvent}/>
            <Route path="/addservice" component={AddService}/>
            <Route path="/addservicecat" component={AddServiceCat}/>
            <Route path="/addaccount" component={AddAccount}/>
            <Route path="/addsubaccount" component={AddSubAccount}/>
            <Route path="/addaccounttype" component={AddAccountType}/>
            <Route path="/addcontact" component={AddContact}/>
            <Route path="/addbillcharges" component={AddBillCharges}/>
            <Route path="/adddocument" component={AddDocument}/>
            <Route path="/fireadmin" component={Fireadmin}/>
            <Route path="/fireadmin/:sub" component={Fireadmin}/>
            <Route path="/firestoreadmin" component={Firestoreadmin}/>
            <Route path="/firestoreadmin/:sub" component={Firestoreadmin}/>
          </Route>
        </Router>
    );
  }

}

export default Admin;

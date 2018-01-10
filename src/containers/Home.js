import React,{Component} from 'react';
// import FCM from "react-native-fcm";

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fcm_token: ""
    };
  }
  componentDidMount () {
    // FCM.requestPermissions();
    // FCM.getFCMToken().then(token => {
    //   this.setState({fcm_token:token});
    //   //update your fcm token on server.
    // });
  }
  render() {
    return (
     <div>
        <p>FCM Setup</p>
      </div>
    );
  }
}
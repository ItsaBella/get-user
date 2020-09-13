import React from 'react';
import './App.css';
import Postform from "./components/services/Postform"
import Posts from './components/services/Posts'
import { Provider} from 'react-redux';
import store from './store';
// import { gapi } from 'gapi-script';

import GoogleLogin from 'react-google-login';
import axios from 'axios'

class App extends React.Component {
  responseGoogle = (response) => {
      axios({
        method: "POST",
        url: "http://localhost:8080/createUser",
        data: {tokenId: response.tokenId}
      }).then(response => {
        console.log(response.payload);
      })
    }

    constructor(props) {
      super(props)
      this.state = {
          isSignedIn: false,
      }
  }

  render() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <div id="loginButton">Sign in with Google</div>
          <GoogleLogin
          clientId="34578869425-rvu9f0qrbp5urjghv9nv7aispbm6ejjs.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
      </header> */}
      <Postform/>
      <GoogleLogin/>
      <Posts/>
    </div>
    </Provider>
    );
  }

  // onSuccess() {
  //   this.setState({
  //     isSignedIn: true
  //   })
  // }
  

  // componentDidMount() {
  //   window.gapi.load('auth2', () => {
  //     window.gapi.auth2.init({
  //       client_id: '34578869425-rvu9f0qrbp5urjghv9nv7aispbm6ejjs.apps.googleusercontent.com'
  //     })
  
  //     window.gapi.load('signin2', () => {
  //       const params = {
  //         onsuccess: () => {
  //           console.log('user has finished signing in!')
  //         }
          
  //       }
  //       window.gapi.signin2.render('loginButton', params)
  //     })
  //   })
  // }
}



export default App;

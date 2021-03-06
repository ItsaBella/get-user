import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';


class Welcome extends Component {
constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
};
this.signup = this.signup.bind(this);
}

signup(res, type) {
     let postData;
     if (type === 'facebook' && res.email) {
     postData = {
          name: res.name,
          provider: type,
          email: res.email,
          provider_id: res.id,
          token: res.accessToken,
          provider_pic: res.picture.data.url
     };
    }

    if (type === 'google' && res.w3.U3) {
    postData = {
      name: res.w3.ig,
      provider: type,
      email: res.w3.U3,
      provider_id: res.El,
      token: res.Zi.access_token,
      provider_pic: res.w3.Paa
    };
}

if (postData) {
PostData('signup', postData).then((result) => {
   let responseJson = result;
   sessionStorage.setItem("userData", JSON.stringify(responseJson));
   this.setState({redirect: true});
});
} else {}
}

render() {

if (this.state.redirect || sessionStorage.getItem('userData')) {
    return (<Redirect to={'/home'}/>)
}

const responseFacebook = (response) => {
    console.log("facebook console");
    console.log(response);
    this.signup(response, 'facebook');
}

const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    this.signup(response, 'google');
}

return (

<div className="row body">
<div className="medium-12 columns">
<div className="medium-12 columns">
<h2 id="welcomeText"></h2>

<FacebookLogin
appId="1727953874036385"
autoLoad={false}
fields="name,email,picture"
callback={responseFacebook}/>
<br/><br/>

<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="Login with Google"
onSuccess={responseGoogle}
onFailure={responseGoogle}/>

</div>
</div>
</div>
);
}
}
export default Welcome;
import React from 'react';
import GoogleLogin from 'react-google-login';
const Google = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }
  
  return(
    <div className="loginButton">
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    </div>
  )
}

export default Google;
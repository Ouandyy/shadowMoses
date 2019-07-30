import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
const Facebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div className="loginButton">
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={false}
      callback={responseFacebook}
      render={renderProps => (
        <button onClick={renderProps.onClick}>Login With Facebook</button>
      )}
    />
    </div>
  )
}

export default Facebook;
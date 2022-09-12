import React, { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";

const Login = (props) => {

  const clientId = "330445538784-ifust3ec1ig5ibhfp69537p8igvmvmeb.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({clientId:clientId})
    })
  }, []);
  
  const responseGoogle = (response) => {
    console.log(response);
    props.response(response);
  }

  return (
    <div>
      <div className="text-center display-1 mt-5 lead">
        DUST
      </div>
      <hr className="m-5" />
      <div className="d-flex justify-content-center mt-5 align-items-center flex-column">
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              type="button"
              className="btn btn-outline-dark ms-5"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className='fa fa-sign-in me-1'></i> LOGIN
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
}

export default Login;
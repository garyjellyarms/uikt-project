import { React, useRef} from 'react';
import PropTypes from 'prop-types';
import './login-site.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const LoginSite = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const login = () => {
    var user = {
      email : emailInputRef.current.value,
      password : passwordInputRef.current.value
    }
    alert("LOGIN for " + user['email'] + ", "+ user['password']);
    // ROUTE to application form
  }

  return (
    <div className="login-site">
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Portal DPOP - prijava</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                <MDBInput ref={emailInputRef} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput ref={passwordInputRef} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
                <MDBBtn size='lg' onClick={login}>
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
};

LoginSite.propTypes = {};

LoginSite.defaultProps = {};

export default LoginSite;

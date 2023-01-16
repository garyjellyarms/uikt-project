import { React, useRef} from 'react';
import './application-form.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';





const UserSiteApplicationForm = () => {
  const izdelekRef = useRef(null);
  const opisRef = useRef(null);
  const tehnicneSpecRef = useRef(null);
  const certRef = useRef(null);
  const klasifRef = useRef(null);
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('loginData'))
  useEffect(() => {
    (() => {
      let loginData = JSON.parse(localStorage.getItem('loginData')) ? JSON.parse(localStorage.getItem('loginData')) : {email : '', password : ''}
      if (!((loginData.email === 'user' && loginData.password === 'user') || (loginData.email === 'tempuser' && loginData.password === 'tempuser'))) {
        navigate('../')
      }
    })();
  });
  
  const submit = (event) => {
    var arr = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : []
    if(izdelekRef.current.value === ''
      || opisRef.current.value === ''
      || tehnicneSpecRef.current.value === ''
      || certRef.current.value === ''
      || klasifRef.current.value === '')
    {
      alert('izpolnite vse vnosna polja')
      return
    }
    var formData = {
      id : arr.length+1,
      izdelek : izdelekRef.current.value,
      user : user.email,
      opis : opisRef.current.value,
      tehnicneSpec : tehnicneSpecRef.current.value,
      cert : certRef.current.value,
      klasif : klasifRef.current.value,
      statusText : "Na čakanju",
      status : false 
    }
    arr.push(formData)
    
    localStorage.setItem('data', JSON.stringify(arr))
    navigate('../usersiteapproval')
  }

  return (
    <div className="application-form">
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <h2 className="fw-bold mb-2 text-center">Obrazec</h2>
                  <br></br>
                  <p>Za podje tje : FDD d.o.o.</p>  
                  <MDBInput ref={izdelekRef} wrapperClass='mb-4' id='1' label='Izdelek' />
                  <MDBInput ref={opisRef} wrapperClass='mb-4' id='form6Example2' label='Opis izdelka' />
                  <MDBInput ref={tehnicneSpecRef} wrapperClass='mb-4' id='form6Example3' label='Tehnične specifikacije' />
                  <MDBInput ref={certRef} wrapperClass='mb-4' id='form6Example4' label='Certifikati' />
                  <MDBInput ref={klasifRef} wrapperClass='mb-4' id='form6Example5' label='Klasifikacija' />
                  <MDBBtn onClick={submit} className='mb-4' block>
                    Potrdi
                  </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
};


UserSiteApplicationForm.propTypes = {};

UserSiteApplicationForm.defaultProps = {};

export default UserSiteApplicationForm;

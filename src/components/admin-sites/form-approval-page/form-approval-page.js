import React from 'react';
import PropTypes from 'prop-types';
import './form-approval-page.css';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBListGroup, 
  MDBListGroupItem,
  MDBBadge
} from 'mdb-react-ui-kit';
import { json, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const FormApprovalPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  let data = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : []
  const index = data.indexOf(x => x.id == id);
  const currentData = data[index];
  let loginData = JSON.parse(localStorage.getItem('loginData')) ? JSON.parse(localStorage.getItem('loginData')) : []

  function potrdi(){
    currentData.status = true;
    currentData.statusText = "Odobreno";
    navigate('/approval-pending')
  }
  
  return (
    <div className="form-approval-page">
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Seznam vlog</h2>
                <br/>
                <div class="info-text-list">
                  <p class="info-text-label">Vloga za podjetje</p>
                  <p>{loginData.email}</p>
                </div>
                <hr/>
                <div class="info-text-list">
                  <p class="info-text-label">Izdelek</p>
                  <p>{currentData.izdelek}</p>
                </div>
                <hr/>
                <div class="info-text-list">
                  <p class="info-text-label">Opis izdelka</p>
                  <p>
                  {currentData.opis}
                  </p>
                </div>
                <hr/>
                <div class="info-text-list">
                  <p class="info-text-label">Tehnične specifikacije</p>
                  <p>{currentData.tehnicneSpec}</p>
                </div>
                <hr/>
                <div class="info-text-list">
                  <p class="info-text-label">Certifikati</p>
                  <p>{currentData.cert}</p>
                </div>
                <hr/>
                <div class="info-text-list">
                  <p class="info-text-label">Klasifikacija</p>
                  <p>{currentData.klasif}</p>
                </div>
                <br/>
                <MDBBtn className='mb-4' type='submit' block onClick={potrdi}>
                  Potrdi
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}




FormApprovalPage.propTypes = {};

FormApprovalPage.defaultProps = {};

export default FormApprovalPage;

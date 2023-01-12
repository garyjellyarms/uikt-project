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
  // const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get("id");

  let data = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : []
  const id = JSON.parse(localStorage.getItem('id_vloge'))
  const currentData = data.find(findObject) // data[index];
  let index = data.indexOf(currentData)
  let loginData = localStorage.getItem('loginData') !== null ? JSON.parse(localStorage.getItem('loginData')) : []

  function potrdi(){
    data[index].status = true;
    data[index].statusText = "Odobreno";
    localStorage.setItem('data', JSON.stringify(data))
    navigate('../pendingApproval')
  }

  function zavrni(){
    data[index].status = false
    data[index].statusText = "Zavrnjeno"
    localStorage.setItem('data', JSON.stringify(data))
    navigate('../pendingApproval')
  }
  
  function findObject(application){
    return application.id === id
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
                <div className="info-text-list">
                  <p className="info-text-label">Vloga za podjetje</p>
                  <p>{loginData.email}</p>
                </div>
                <hr/>
                <div className="info-text-list">
                  <p className="info-text-label">Izdelek</p>
                  <p>{currentData.izdelek}</p>
                </div>
                <hr/>
                <div className="info-text-list">
                  <p className="info-text-label">Opis izdelka</p>
                  <p>
                  {currentData.opis}
                  </p>
                </div>
                <hr/>
                <div className="info-text-list">
                  <p className="info-text-label">Tehnične specifikacije</p>
                  <p>{currentData.tehnicneSpec}</p>
                </div>
                <hr/>
                <div className="info-text-list">
                  <p className="info-text-label">Certifikati</p>
                  <p>{currentData.cert}</p>
                </div>
                <hr/>
                <div className="info-text-list">
                  <p className="info-text-label">Klasifikacija</p>
                  <p>{currentData.klasif}</p>
                </div>
                <br/>
                <MDBBtn className='mb-4' type='submit' block onClick={potrdi}>
                  Potrdi
                </MDBBtn>
                <MDBBtn className='mb-4' type='submit' block onClick={zavrni}>
                  Zavrni
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

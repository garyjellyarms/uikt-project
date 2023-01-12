import React from 'react';
import PropTypes from 'prop-types';
import './approval-page.css';
import { json, useNavigate, useState } from "react-router-dom";
import { useEffect } from 'react';
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




const UserSiteApprovalPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    (() => {
      if (!localStorage.getItem('loginData')) {
        navigate('../')
      }
    })();
  });


  const formFill = () => {
    let str = '../userform'
    navigate(str)
  }
  let data = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : []

  return (
  <div className="approval-page">
    
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Oddani obrazci</h2>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
                {data !== null ? data.map((d) => {     
                  return (
                    <MDBListGroupItem key={d.id} className='d-flex justify-content-between align-items-center'>
                    <div>
                      <div className='fw-bold'>{d.izdelek}</div>
                      <div className='text-muted'>{d.statusText}</div>
                    </div>
                    <MDBBadge pill light color='success'>
                      {d.statusText}
                    </MDBBadge>
                  </MDBListGroupItem>
                  ) 
                }) : null}
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBBtn onClick={formFill}>Oddaj vlogo</MDBBtn>
    </MDBContainer>
  </div>
)};

UserSiteApprovalPage.propTypes = {};

UserSiteApprovalPage.defaultProps = {};

export default UserSiteApprovalPage;

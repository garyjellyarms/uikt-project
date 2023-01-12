import React from 'react';
import PropTypes from 'prop-types';
import './approval-pending.css';
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

const ApprovalPending = () => {
  const navigate = useNavigate()
  let data = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
  let loginData = JSON.parse(localStorage.getItem('loginData')) ? JSON.parse(localStorage.getItem('loginData')) : []

  function ogledVloge(singleData){
    const id = singleData.id
    navigate('/formapprovalpage/?id='+id)
  }

  return (
    <div className="approval-pending">
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Seznam vlog</h2>
                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  {data.map((d) => {     
                      return (
                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                          <div>
                            {d.id} - {d.izdelek}, {loginData.email}
                          </div>
                          <MDBBtn outline onClick={() => ogledVloge(d)}>Ogled</MDBBtn>
                        </MDBListGroupItem>
                      ) 
                    })}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

ApprovalPending.propTypes = {};

ApprovalPending.defaultProps = {};

export default ApprovalPending;

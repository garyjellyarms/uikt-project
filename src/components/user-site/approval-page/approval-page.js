import React from 'react';
import PropTypes from 'prop-types';
import './approval-page.css';
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

const UserSiteApprovalPage = () => (
  <div className="approval-page">
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Oddani obrazci</h2>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                  <div>
                    <div className='fw-bold'>AK-47</div>
                    <div className='text-muted'>1234</div>
                  </div>
                  <MDBBadge pill light color='success'>
                    Odobreno
                  </MDBBadge>
                </MDBListGroupItem>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                  <div>
                    <div className='fw-bold'>Berreta</div>
                    <div className='text-muted'>52532</div>
                  </div>
                  <MDBBadge pill light color='warning'>
                    Na čakanju
                  </MDBBadge>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);

UserSiteApprovalPage.propTypes = {};

UserSiteApprovalPage.defaultProps = {};

export default UserSiteApprovalPage;

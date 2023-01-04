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

const FormApprovalPage = () => (
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
                <p>FDD d.o.o.</p>
              </div>
              <hr/>
              <div class="info-text-list">
                <p class="info-text-label">Izdelek</p>
                <p>AK-47</p>
              </div>
              <hr/>
              <div class="info-text-list">
                <p class="info-text-label">Opis izdelka</p>
                <p>
                The AK-47 is a gas-operated, 7.62mm assault rifle that was first developed in the Soviet Union by Mikhail Kalashnikov. It is known for its ruggedness, simplicity, and ability to function under harsh conditions. The AK-47 is one of the most widely used and recognized firearms in the world, and it has been manufactured in many countries. It is used by both military and law enforcement organizations, as well as by civilians for self-defense and hunting.
                </p>
              </div>
              <hr/>
              <div class="info-text-list">
                <p class="info-text-label">Tehnične specifikacije</p>
                <p>H:15, W:14, CDfsa</p>
              </div>
              <hr/>
              <div class="info-text-list">
                <p class="info-text-label">Certifikati</p>
                <p>EXS, SCSI</p>
              </div>
              <hr/>
              <div class="info-text-list">
                <p class="info-text-label">Klasifikacija</p>
                <p>Avtomatska</p>
              </div>
              <br/>
              <MDBBtn className='mb-4' type='submit' block>
                  Potrdi
                </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);

FormApprovalPage.propTypes = {};

FormApprovalPage.defaultProps = {};

export default FormApprovalPage;

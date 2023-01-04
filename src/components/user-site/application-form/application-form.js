import React from 'react';
import PropTypes from 'prop-types';
import './application-form.css';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

const UserSiteApplicationForm = () => (
  <div className="application-form">
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <form>
                <h2 className="fw-bold mb-2 text-center">Obrazec</h2>
                <br></br>
                <p>Za podjetje : FDD d.o.o.</p>

                <MDBInput wrapperClass='mb-4' id='1' label='Izdelek' />
                <MDBInput wrapperClass='mb-4' textarea id='form6Example2' label='Opis izdelka' />
                <MDBInput wrapperClass='mb-4' id='form6Example3' label='Tehnične specifikacije' />
                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Certifikati' />
                <MDBInput wrapperClass='mb-4' id='form6Example5' label='Klasifikacija' />
                <MDBBtn className='mb-4' type='submit' block>
                  Potrdi
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);

UserSiteApplicationForm.propTypes = {};

UserSiteApplicationForm.defaultProps = {};

export default UserSiteApplicationForm;

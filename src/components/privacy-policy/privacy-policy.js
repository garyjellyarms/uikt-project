import React from 'react';
import PropTypes from 'prop-types';
import './privacy-policy.css';
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

const PrivacyPolicy = () => (
  <div className="privacy-policy">
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Izjava o zasebnosti</h2><br/>
              <div class="privacy-policy-text">
                <p>
                Zasebnost je za nas ključnega pomena in zato se trudimo zagotoviti, da vaša osebni in podatki o podjetju ostajajo varni in zaščiteni. Obdelujemo jih v skladu z Evropsko splošno uredbo o varstvu podatkov (GDPR) in drugimi veljavnimi zakoni o varstvu osebnih podatkov. Naša spletna stran zbira omejeno količino osebnih podatkov, ki so nujni za zagotavljanje storitev, ki jih ponujamo. 
                <br/><br/>Zbiramo podatke o podjetju kot so naziv, naslov, matično št. in davčno. Shranjujemo tudi podatke o izdanih vlogah, kot so ime izdelka, opis izdelka, tehnične specifikacije, certifikati in klasifikacijo. 
                <br/><br/>Te podatke hranimo le toliko časa, kot je potrebno za dosego namenov, za katere so bili zbrani, in jih ne posredujemo tretjim osebam brez vaše izrecne privolitve.
                <br/><br/>Zavedamo se, da vam je zasebnost na spletu pomembna, zato smo se zavezali k transparentnosti in odgovornemu ravnanju z vašimi osebnimi podatki. Če imate kakršnakoli vprašanja glede načina, na katerega obdelujemo vaše osebne podatke, vas vljudno prosimo, da nas kontaktirate. Z veseljem vam bomo pomagali in odgovorili na vsa vaša vprašanja.
                <br/><br/>
                Kontakt: mors@gov.si
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);

PrivacyPolicy.propTypes = {};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;

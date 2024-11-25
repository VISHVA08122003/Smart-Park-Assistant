import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          </section>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    About This Site
                  </h6>
                  <p>
                  The system is designed to monitor and signalize the availability of each parking space in real-time using an IoT module. It also provides a mobile application that allows users to check the availability of parking spaces and book a parking slot accordingly
                  </p>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Firebase
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      LabView
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      ThinkSpeak
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                        SKCET
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                        skcet@ac.in
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> 
                    +91 9677368566
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> 
                    +91 9363669372
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Copyright:
            <a className='text-reset fw-bold' href='https://r.search.yahoo.com/_ylt=Awrx_niParJlT4QTu227HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1706220303/RO=10/RU=https%3a%2f%2fskcet.ac.in%2f/RK=2/RS=qKwp8UGCEIsmK.HMYMBnz37p3bg-'>
              SKCET.com
            </a>
          </div>
        </MDBFooter>
      );
}
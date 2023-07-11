import React from 'react';
import './regis.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Reg() {
  return (
    <div>
    <MDBContainer fluid>

      <MDBCard className='text-blackm-5' style={{borderRadius: '105px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h3 className="text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4">Enter Your Stock World</h3>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <MDBInput label='Your Phone Number' id='form4' type='long'/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms and policies' />
              </div>

              <MDBBtn className='mb-4' id="btn" size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='/images/stock.jpg' position="right" fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer> 
    </div>
  );
}

export default Reg;
import React from 'react';
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

      <MDBCard className='text-blackm-5' style={{borderRadius: '105px',backgroundImage: "url(/images/stock.jpg)" ,minHeight:"150vh", width:"100%", backgroundRepeat:"none", backgroundSize:"cover",position: "absolute"}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='20' lg='15' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h3 className="text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4" style={{color: "white"}}>!!Enter Your Stock World!!</h3>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' style={{color: "white"}} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' style={{color: "white"}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' style={{color: "white"}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <MDBInput label='Your Phone Number' id='form4' type='long' style={{color: "white"}}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms and policies' style={{color: "white"}} />
              </div>

              <MDBBtn className='mb-4' id="btn" size='lg'>Register</MDBBtn>

            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer> 
    </div>
  );
}

export default Reg;
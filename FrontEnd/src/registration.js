import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Reg() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const[user,setUser]=useState({
    name: "",
    email:"",
    phoneno:""
  })

  const {name,email,phoneno}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }
    if (phoneno.trim() === '') {
      alert('Please enter your phone number.');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the terms and policies.');
      return;
    }
    e.preventDefault();
    await axios.post("http://localhost:2320/adduser",user)
    navigate("/");
    
  };

  return (
    <div style={{ marginRight: 1280, marginTop: -330 }}>
      <MDBContainer fluid>
        <MDBCard className='text-blackm-5' style={{ borderRadius: '105px', backgroundImage: "url(/images/stock.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "absolute" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='20' lg='15' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <h3 className="text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4" style={{ color: "white" }}>!!Enter Your Stock World!!</h3>
                <form onSubmit={handleSubmit} >
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput label='Your Name' id='form1' type='text' style={{ color: "white" }} className='w-100' name="name" value={name} onChange={onInputChange} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput label='Your Email' id='form2' type='email' style={{ color: "white" }} name="email" value={email} onChange={onInputChange} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Password' id='form3' type='password' style={{ color: "white" }} value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-3">
                    <MDBIcon fas icon="phone me-3" size='lg' />
                    <MDBInput label='Your Phone Number' id='form4' type='long' style={{ color: "white" }} name="phoneno" value={phoneno} onChange={onInputChange} />
                  </div>
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the terms and policies' style={{ color: "white" }} checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
                  </div>
                  <MDBBtn className='mb-4' id="btn" size='lg' type='submit' onClick={handleSubmit}>Register</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  ); 
}

export default Reg;

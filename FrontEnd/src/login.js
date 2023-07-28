import React, { useState } from 'react';
import {FaInstagram ,FaGithub,FaLinkedinIn} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from './actions';
import {addUser} from './masterslice';
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

function Log(props) {
  const [email,setEmail]=useState(' ')
  const [password,setPassword]=useState(' ')
  const navigate=useNavigate();
  const [errors,setErrors] = useState([])
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const validerrors = validate(); 
    setErrors(validerrors);
    if(Object.keys(validerrors).length === 0){
      dispatch(addUser(email));
      alert("Redirected to Home Page!");
      navigate("/home");
    } 
  }
  const validate = () =>{
    const validerrors = {};
    if(!email){
      validerrors.email = "Enter your email";
    }
    else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        validerrors.email = "Incorrect Email";    
    }

    if(!password){
      validerrors.password = "Enter your Passowrd";
    }
    else if(password.length < 8){
        validerrors.password = " Wrong Password";
    }
    return validerrors;
  }

  const handleUsernameChange = (event) => {
    dispatch({type: "SET_USERNAME", payload:event.target.value});
  };
  return (
    <div style={{marginRight: 1300,marginTop: -330}}>
    <MDBContainer fluid style={{backgroundImage: "url(/images/bg3.jpg)" ,minHeight:"150vh", width:"100%", backgroundRepeat:"none", backgroundSize:"cover",position:"absolute"}}>
      {/* <MDBCard OnSubmit={handleSubmit}> */}
      <MDBCard className='text-black m-5' style={{borderRadius: '10S5px', backgroundImage:"url('/images/bg1.jpg')",position: "sticky"}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color: "black"}}>Login Investor!!!</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' value={username} onChange={handleUsernameChange} type='text' style={{color: "white"}} className='w-100'/>
              </div>
               <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' style={{color: "white"}} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
                {errors.email && <span className='error' style={{color: "red"}}>{errors.email}</span> }
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' style={{color: "white"}} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
                {errors.password && <div className='error' style={{color: "red"}}>{errors.password}
                </div> }
              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me!' />
              </div>
              <MDBBtn className='mb-4' size='lg' type="submit" color='black' onClick={handleSubmit}>Login</MDBBtn>
              <p>New User ?</p>
              <MDBBtn className='mb-4' size='lg' type="submit" color='black' onClick={()=> navigate("/reg")}>Register</MDBBtn>
              <div style={{display: "flex"}}>
              <div style={{marginLeft: 10}}>
              <FaInstagram/>
              </div>
              <div style={{marginLeft: 10}}>
              <FaGithub/>
              </div>
              <div style={{marginLeft: 10}}>
              <FaLinkedinIn/>
              </div>
              </div>
            </MDBCol>


            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='/images/CRYPTIC.gif'fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default Log;
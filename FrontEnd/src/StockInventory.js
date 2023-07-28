import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {useEffect} from 'react';
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

function Invent() {
  const navigate = useNavigate();

  const{id}=useParams();

  const[user,setUser]=useState({
    stockName: "",
    price:"",
    tsm:""
  })

  const {stockName,price,tsm}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
  
  useEffect(()=>{
        loadUser();
  },[])
 
  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:2320/update/${id}`,user);
    navigate("/acc");
  }

  const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:2320/show/${id}`)
    setUser(result.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (stockName.trim() === '') {
      alert('Please enter your name!.');
      return;
    }
    if (price.trim() === '') {
      alert('Provide the price!.');
      return;
    }
    if (tsm.trim() === '') {
      alert('Provide the position of stock.');
      return;
    }
    e.preventDefault();
    await axios.post("http://localhost:2320/add",user)
    navigate("/acc");
    
  };

  return (
    <div>
    <div style={{ marginRight: 1280, marginTop: -330 }}>
      <MDBContainer fluid>
        <MDBCard className='text-blackm-5' style={{ borderRadius: '105px', backgroundImage: "url(/images/bg4.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "absolute" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='20' lg='15' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <h3 className="text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4" style={{ color: "black" }}>!!Invest on your Own Stock!!</h3>
                <form onSubmit={handleSubmit} >
                  <div className="d-flex flex-row align-items-center mb-4 " style={{display: "flex",gap: 20}}>
                    <div>
                    <MDBIcon fas icon="fas fa-building" size='2x' />
                    </div>
                    <div>
                    <MDBInput label='Stock Name' id='form1' type='text' style={{ color: "black" }} className='w-100' name="stockName" value={stockName} onChange={onInputChange} />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4" style={{display: "flex",gap: 20}}>
                    <div>
                    <MDBIcon fas icon="fas fa-bitcoin-sign" size='2x' />
                    </div>
                    <div>
                    <MDBInput label='Stock Price' id='form2' type='int' style={{ color: "black" }} name="price" value={price} onChange={onInputChange} />
                    </div>
                   </div>
                  <div className="d-flex flex-row align-items-center mb-3" style={{display: "flex",gap: 20}}>
                    <div>
                    <MDBIcon fas icon="fas fa-chart-line" size='2x' />
                    </div>
                    <div>
                    <MDBInput label='Stock Position' id='form4' type='text' style={{ color: "black" }} name="tsm" value={tsm} onChange={onInputChange} />
                    </div>
                  </div>
                  <MDBBtn className='mb-4' id="btn" size='lg' type='submit' onClick={handleSubmit}>Add Stock</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          <br></br>
          <br></br>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='20' lg='15' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <h3 className="text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4" style={{ color: "black" }}>!!Update your Stock!!</h3>
              <form onSubmit={handleSubmit} >
                <div className="d-flex flex-row align-items-center mb-4 " style={{display: "flex",gap: 20}}>
                  <div>
                  <MDBIcon fas icon="fas fa-building" size='2x' />
                  </div>
                  <div>
                  <MDBInput label='Stock Name' id='form1' type='text' style={{ color: "black" }} className='w-100' name="stockName" value={stockName} onChange={onInputChange} />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4" style={{display: "flex",gap: 20}}>
                  <div>
                  <MDBIcon fas icon="fas fa-bitcoin-sign" size='2x' />
                  </div>
                  <div>
                  <MDBInput label='Stock Price' id='form2' type='int' style={{ color: "black" }} name="price" value={price} onChange={onInputChange} />
                  </div>
                 </div>
                <div className="d-flex flex-row align-items-center mb-3" style={{display: "flex",gap: 20}}>
                  <div>
                  <MDBIcon fas icon="fas fa-chart-line" size='2x' />
                  </div>
                  <div>
                  <MDBInput label='Stock Position' id='form4' type='text' style={{ color: "black" }} name="tsm" value={tsm} onChange={onInputChange} />
                  </div>
                </div>
                <MDBBtn className='mb-4' id="btn" size='lg' type='submit' onClick={onSubmit}>Edit Stock</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  </div>
  ); 
}

export default Invent;

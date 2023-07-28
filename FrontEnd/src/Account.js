import React, {Component} from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import { red } from '@mui/material/colors';
import './word.css';
import './word1.css';
import './pro.css';
import DateTime from './dateTime';
import Dashboard from './navbar';
import Footer from './footer';
import {useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Acc=()=>{
    const[users,setUsers]=useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const navigate=useNavigate();

    const{id}=useParams();

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(()=>{
      loadUsers();
    },[]);

    const loadUsers = async() => {
      const result=await axios.get("http://localhost:2320/show");
      setUsers(result.data);
    }

    const deleteUsers= async(id)=>{
      await axios.delete(`http://localhost:2320/delete/${id}`)
      loadUsers()
    }

    return(
      <div class="bgcolo">
            <div>
               <Dashboard /> 
               <h2 style={{marginLeft: 100,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>My Account...</h2>
               <br></br>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginLeft: 50}}>
            <div style={{marginLeft: 100, marginBottom: 40}}>
                <img src    ="/images/pro.png"></img><br></br><br></br>
                <img src="/images/india.jpg"></img>
                <span style={{marginLeft: 20,color: "black"}}>Chennai,India; #StocksForLife</span>
            </div>
            <div style={{marginRight: 210,marginTop: 60}}>
                <h3 style={{color: "black"}}>Account Holder: Investor</h3>
                <br></br>
                <ul>
                    <li style={{color: "black"}}>Account id: 10531</li>
                    <li style={{color: "black"}}>Account Type: Full Service Trading Account</li>
                </ul>
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginTop: 5}}>
            <div style={{marginLeft: 180}}>
                <br></br><br></br>
                <div style={{display: "flex"}}>
                  <div>
                <h5>Balance:</h5>
                 <ul>
                  <li style={{color: "black"}}>Balance No: 14092</li>
                  <li style={{color: "black"}}>Balance ID: A31Investor</li>
                  <li style={{color: "black"}}>Balance: 85500000 INR</li>
                 </ul>
                 </div>
                 </div>
                <br></br>
            </div>
            </div>
            <div>
                <h5 style={{marginLeft: 80,marginTop: 100,justifyContent: "center",fontSize: 30,color: "black"}}>To check all Stock, Go to Stock Investory:</h5>
                <br></br><br></br>
           </div>
           <div style={{marginLeft: 80}}>
                    <Button variant="contained" style={{backgroundColor: "purple"}} onClick={()=> navigate("/inv")}>Go To the Stock Inventory!</Button>
            </div>
            <br></br><br></br>
            <div>
            <h5 style={{marginLeft: 80,marginTop: 100,justifyContent: "center",fontSize: 30,color: "black"}}>Stock Analyisis:</h5>
            <div style={{marginLeft: 330,marginTop: 2,color: "black",fontWeight: "bold",fontSize: 25}}>
            <DateTime/>
            </div>
            </div>
            <div style={{marginLeft: 280}}>
               <table style={{color: "black",margin: 30}}>
                <thead>
                  <tr>
                    <th>Order Id:</th>
                    <th>Stock Name:</th>
                    <th>Price:</th>
                    <th>Track Stock Movement:</th>
                    <th>Change Stock Details</th>
                    <th>Delete Wasted Stocks</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user,index)=>(
                      <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.stockName}</td>
                        <td>{user.price}</td>
                        <td>{user.tsm}</td>
                        <td><Button variant="contained" style={{backgroundColor: "orange"}} onClick={()=>navigate("/inv")}>Edit</Button></td>
                        <td><Button variant="contained" style={{backgroundColor: "red"}} onClick={()=>deleteUsers(user.id)}>Delete</Button></td>
                      </tr>
                    )) 
                  }
                </tbody>
               </table>
            </div>
            <br></br><br></br><br></br>
            <div>
              <Footer/>
            </div>
        </div>
    );
}


export default Acc;




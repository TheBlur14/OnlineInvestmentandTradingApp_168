import * as React from 'react';
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
//import { red } from '@mui/material/colors';
import './word.css';
import './word1.css';
import './pro.css';
import Dashboard from './navbar';
import Footer from './footer';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

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


const Prof=()=>{
    const [expanded, setExpanded] = React.useState(false);
    const[users,setUsers]=useState([]);
    const navigate=useNavigate();

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(()=>{
      loadUsers();
    },[]);

    const loadUsers = async() => {
      const result=await axios.get("http://localhost:2320/showuser");
      setUsers(result.data);
    }

    return(
      <div class="clo">
            <div>
               <Dashboard /> 
               <h2 style={{marginLeft: 100,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>About our Investor!!</h2>
               <br></br>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginLeft: 50}}>
            <div style={{marginLeft: 100, marginBottom: 40}}>
                <img src="/images/pro.png"></img><br></br><br></br>
                <img src="/images/india.jpg"></img>
                <span style={{marginLeft: 20,color: "black"}}>Chennai,India; #StocksForLife</span>
            </div>
            <div style={{marginRight: 210,marginTop: 60}}>
                <h3 style={{color: "black"}}>Hi! My name is Investor.</h3>
                <br></br>
                <ul>
                    <li style={{color: "black"}}>Firstly, my key role here is to expand my funds and buisness</li>
                    <li style={{color: "black"}}>Secondly, investing in stocks is my hobby, and</li>
                    <li style={{color: "black"}}>Finally,you got to know, I love my Money!!</li>
                </ul>
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginTop: 5}}>
            <div style={{marginLeft: 180}}>
                <br></br><br></br>
                <div style={{display: "flex"}}>
                  <div>
                <h5>Interests:</h5>
                 <ol>
                  <li style={{color: "black"}}>Charting on graphs</li>
                  <li style={{color: "black"}}>Reading books on Trading</li>
                  <li style={{color: "black"}}>Play chess</li>
                  <li style={{color: "black"}}>Socialise with traders</li>
                  <li style={{color: "black"}}>Playing poker</li>
                  <li style={{color: "black"}}>Puzzles</li>
                 </ol>
                 </div>
                 <div style={{marginLeft: 250}}>
                 <h5>Skills:</h5>
                  <ul style={{display: "flex",justifyContent: "space-evenly"}}>
                    <li style={{color: "black"}}>Financial Literacy</li>
                    <li style={{color: "black"}}>Analytical Skills</li>
                    <li style={{color: "black"}}>Data Based Forecasting</li>
                    <li style={{color: "black"}}>Risk Quantification</li>
                    <li style={{color: "black"}}>Knowledge of Derivaitves</li>
                  </ul>
                  </div>
                 </div>
                 <div style={{marginLeft: 500,marginTop: 2,display: "flex",justifyContent: "space-evenly"}}>
                  <div style={{display: "block"}}>
                  <img src="/images/ether.jpg"></img><br></br><br></br>
                  <p>A great investor in <br></br>Ethereum and has <br></br>made great profit <br></br>nationally in this crypto.</p>
                  </div>
                  <div style={{display: "block"}}>
                  <img src="/images/tether.jpg"></img><br></br><br></br>
                  <p>Loves Tether and it has helped <br></br>in high stock yields <br></br>and provided more <br></br>or less equal profit to the above</p>
                  </div>
                 </div>
                <br></br>
            </div>
            </div>
            <div>
            <h2 style={{marginLeft: 80,marginTop: 100,justifyContent: "center",fontSize: 30,color: "black",fontWeight: "bolder"}}>Investors' ready to trade!!</h2>
            </div>
            <div style={{marginLeft: 280}}>
               <table style={{color: "black",margin: 30}}>
                <thead>
                  <tr>
                    <th>Id:</th>
                    <th>Name:</th>
                    <th>Email:</th>
                    <th>Phone Number:</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user,index)=>(
                      <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneno}</td>
                      </tr>
                    )) 
                  }
                </tbody>
               </table>
            </div>
            <div>
                <h2 style={{marginLeft: 80,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>Purchased Stocks...</h2>
                <br></br><br></br>
                <div class="menu__container bd-grid" style={{marginRight: 80}}>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/tata_tech.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Tata Tech</h3>
                        <span class="menu__detail">Closes on 24 Jul, 4:50 pm (gmt+5:30)</span>
                        <span class="menu__preci">₹ 705</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/logos-167.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Tamilnad Mercentile Bank</h3>
                        <span class="menu__detail">Closes 11 Jul'23</span>
                        <span class="menu__preci">₹ 1080</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/logos-131.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Boat</h3>
                        <span class="menu__detail">No bidding dates yet</span>
                        <span class="menu__preci">-</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                  </div>
                <br></br><br></br><br></br>
                  <div style={{marginLeft: 30}}>
                    <Button variant="contained" style={{backgroundColor: "red"}} onClick={()=> navigate("/home")}>Back To Home!</Button>
                  </div>
                <br></br><br></br><br></br>
           </div>
            <div>
              <Footer/>
            </div>
        </div>
    );
}


export default Prof;




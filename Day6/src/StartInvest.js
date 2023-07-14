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
import Dashboard from './navbar';
import Footer from './footer';

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


const SI=()=>{
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
      <div>
            <div>
               <Dashboard /> 
               <h2 style={{marginLeft: 280,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>Ways to grow your wealth</h2>
               <br></br>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginTop: 40,marginLeft: 50}}>
            <div style={{marginLeft: 300}}>
                <img src="/images/growstock.png"></img>
            </div>
            <div style={{marginRight: 150,marginTop: 80}}>
                <h3>Stocks</h3>
                <br></br>
                <ul>
                    <li>Discover stocks with smart lists and smart filters</li>
                    <li>Access key company information</li>
                    <li>Buy and sell stocks in a single click</li>
                </ul>
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",marginTop: 120}}>
            <div style={{marginLeft: 180}}>
                <h3>IPO's</h3>
                <br></br>
                <ul>
                    <li>24/7 IPO applications</li>
                    <li>Apply and pre-apply via WhatsApp</li>
                    <li>Zero commission investing</li>
                </ul>
            </div>
            <div style={{marginRight: 500}}>
                <img src="/images/growipo.png"/>
            </div>
            </div>
            <div>
                <h2 style={{marginLeft: 280,marginTop: 100,justifyContent: "center",fontSize: 40,color: "black",fontWeight: "bolder"}}>We Simplify Investing For you!</h2>
                <br></br><br></br>
                <div style={{justifyContent: "space-evenly",display: "flex",}}>
                  <div style={{display: "block"}}>
                     <img src="/images/gtt.png"></img><br></br>
                     <Typography paragraph style={{color: "black"}}>
                        Discover new investment opportunities using smart lists & smart filters. Find the latest IPOs and Mutual Fund offerings and invest in them with a click.
                      </Typography>
                  </div>
                  <div style={{display: "block"}}>
                     <img src="/images/gtt1.png"></img>
                     <Typography paragraph style={{color: "black"}}>
                     Access key information such as company profiles, trading history, technical data and more for stock analysis and making informed investment decisions.
                      </Typography>
                    </div>
                    <div style={{display: "block"}}>
                     <img src="/images/gtt2.png"></img>
                     <Typography paragraph style={{color: "black" }}>
                     Get daily stock market updates and all the latest news at your fingertips. From corporate actions, price movements to major announcements
                      </Typography>
                    </div>
                </div>
                <br></br><br></br><br></br>
                  <div style={{marginLeft: 600}}>
                    <Button variant="contained" style={{backgroundColor: "purple"}}>Invest Now</Button>
                  </div>
                <br></br><br></br><br></br>
           </div>
            <div>
              <Footer/>
            </div>
        </div>
    );
}


export default SI;




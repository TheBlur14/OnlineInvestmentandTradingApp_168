import React from 'react';
// import { BiUserCircle } from "react-icons/bi";
// import { AiOutlineStock } from "react-icons/ai";
// import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import './orders.css'; 
import Dashboard from './navbar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from './footer';
import './word1.css';
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

const Orders = (props) => {  
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    return (
        <div class="col">
            <Dashboard/>
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">Stocks</span>
                        <h2 class="section-title about__initial" style={{fontSize: 20,color: "black"}}>Diverse Range of Stocks</h2>
                        <p class="about__description">Are you ready to take your financial future into your own hands? 
                        Look no further than our cutting-edge online trading and investment platform. 
                        We understand that the stock market can be complex and intimidating, but we're here to simplify the process and empower you to make informed investment decisions. With our platform, you'll gain access to a world of opportunities and unlock the potential for significant returns. 
                        Here's why our stocks page is the ultimate resource for traders and investors</p>

                    </div>
                    <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksHeader.1a6bc56a.svg" alt="" class="about__img"/>
                </div>
            </section>
        
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Stocks</span>
                <h2 class="section-title" style={{fontSize: 18,color: "black",marginLeft: 150}}>Explore from a variety of stocks</h2>
                <div class="menu__container bd-grid">
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
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/HMA.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">HMA Agro Industries</h3>
                        <span class="menu__detail">Closes on 4 Jul, 5:50 pm (gmt+5:30)</span>
                        <span class="menu__preci">₹ 585</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/IKIO.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">IKIO</h3>
                        <span class="menu__detail">Closes on 16 Jun, 6:30 pm (gmt+6:30)</span>
                        <span class="menu__preci">₹285</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/logos-341.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">INOX Energies</h3>
                        <span class="menu__detail">Closes soon</span>
                        <span class="menu__preci">₹1,065</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/essen.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Essen Speciality Films</h3>
                        <span class="menu__detail">Closes 6 Jul'23</span>
                        <span class="menu__preci">₹ 107-247</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/C.5d1616a0.svg" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Cell Point SME</h3>
                        <span class="menu__detail">Closes 28 Jul'23</span>
                        <span class="menu__preci">₹ 100</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <br/>
                        <img src="https://assets-netstorage.groww.in/stocks-ipo/logos/Remus.png" alt="" class="menu__img"/>
                        <br/>
                        <h3 class="menu__name">Remus SME</h3>
                        <span class="menu__detail">Closes 29 Jul'23</span>
                        <span class="menu__preci">₹ 1259-2229</span>
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
            </section>
            <section class="app section bd-container">  
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial" style={{marginLeft: 90}}>Guide</span>
                        <h2 class="section-title app__initial" style={{fontSize:20,color: "black",marginLeft: 130}}>Invest 101</h2>
                    </div>
                        <br></br><br></br>
                        <div style={{display: "flex",justifyContent: "space-evenly",marginLeft: 120}}>
                        <div>
                            <Card sx={{ maxWidth: 345}}>
                            <CardHeader 
                              title="Watch"
                            />
                            <CardMedia
                              component="img"
                              height="194"
                              image="images/cash.jpg"
                              alt="Cash"
                            />
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                <ul>
                                 <li style={{color: "black"}}>How To Add Funds?</li>
                                 <li style={{color: "black"}}>How To Create A WatchList?</li>
                                 <li style={{color: "black"}}>How To Invest In IPO's?</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            </Card>
                        </div>
                        <div style={{marginLeft: 200}}>
                        <Card sx={{ maxWidth: 345}}>
                            <CardHeader 
                              title="Learn"
                            />
                            <CardMedia
                              component="img"
                              height="194"
                              image="images/cash.jpg"
                              alt="Cash"
                            />
                            <CardContent>
                              <Typography variant="body2" color="black">
                                A series to understand the basics of Investments
                              </Typography>
                            </CardContent>
                            </Card>
                        </div>
                        </div>
                </div>
            </section>
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Brand Investor's</span>
                        <h2 class="section-title contact__initial" style={{color: "black"}}>Backed up The Best</h2>
                        <div style={{display:"flex",justifyContent: "space-evenly"}}>
                            <img src="https://upstox.com/app/uploads/2022/03/ratan-tata-1.png"></img>
                            <img src="https://upstox.com/app/uploads/2022/03/tiger_global_home-1.png"></img>
                        </div>
                        <p class="contact__description">Cryptic is backed by marquee investors like Mr. Ratan Tata & Tiger Global Management
                        
                        </p>
                    </div>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
            </div>
    );
};
export default Orders;
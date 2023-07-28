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
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from 'react-redux';
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


const HP=()=>{
    const [expanded, setExpanded] = React.useState(false);

    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();

    const {user}=useSelector((state)=>state.master);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const handleUsernameChange = (event) => {
      dispatch({type: "SET_USERNAME", payload:event.target.value});
    };
 
    return(
      <div style={{backgroundImage: "url(/images/bg2.jpg)", minHeight:"150vh", width:"100%", backgroundRepeat: "none", backgroundSize:"cover",position: "sticky"}}>
            <div>
               <Dashboard /> 
               <h1 onChange={handleUsernameChange}>Welcome {user}!!</h1>
               <h1 style={{marginLeft: 10,marginTop: 100}}>Hello investor! Welcome To The World Of Trading</h1>
               <br></br>
               <h2 style={{marginLeft: 80, color: "yellow",fontWeight:"bolder",fontSize: "auto"}}>We Accept All Your Offerings!!</h2>
            </div>
            <div id="cards" style={{marginLeft: 750,marginTop: 130}}>
               <Card sx={{ maxWidth: 345,marginRight: 30}}>
                <CardHeader 
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Cash/UPI"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="images/cash.jpg"
                  alt="Cash"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
                </Card>
                </div>
                <div style={{marginLeft: 180,marginTop: 130}}>
                <Card sx={{ maxWidth: 345}}>
                <CardHeader 
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="CryptoCurrencies"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="images/bitcoin.jpg"
                  alt="Cash"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
                </Card>
                </div>
                <div style={{marginLeft: 780,marginTop: 130}}>
                <Card sx={{ maxWidth: 345}}>
                <CardHeader 
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="International Money"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="images/inter.jpg"
                  alt="Cash"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
                </Card>
                </div>
                <br></br><br></br>
                <h1 id="about"style={{marginRight: 30}}>About US</h1>
                <div style={{justifyContent: "space-evenly",display: "flex",}}>
                  <div style={{display: "block"}}>
                     <img src="/images/stocks.jpg"></img><br></br>
                     <Typography paragraph style={{color: "white"}}>
                      <br></br>We see to that every customers stock is<br></br> maintained 
                      and participates<br></br> in the stock competition and see to that 
                      they<br></br> get good stock results.
                      </Typography>
                  </div>
                  <div style={{display: "block"}}>
                     <img src="/images/stockbroker.jpg"></img>
                     <Typography paragraph style={{color: "white"}}>
                      <br></br>Our Customer Support has been <br></br>rendered and reviewed <br></br>by our
                      customers and <br></br> all the huge companies<br></br> that have bought <br></br>our product
                      to invest<br></br> their stocks.<br></br> Most of the companies <br></br>gave good reviews and <br></br>
                      recommended us to large <br></br>MNC's.
                      </Typography>
                    </div>
                    <div style={{display: "block"}}>
                     <img src="/images/bitcoins.jpg"></img>
                     <Typography paragraph style={{color: "white" }}>
                      <br></br>We support <br></br>customers by <br></br>allowing them <br></br>to use their mode <br></br>of trading on<br></br> their own.
                      They can <br></br>choose their own <br></br>mode of investment<br></br> money like Crypto, <br></br>Bitcoin,or other <br></br>International
                      money<br></br> too.
                      </Typography>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div>
                  <Footer/>
                </div>
        </div>
    );
}


export default HP;
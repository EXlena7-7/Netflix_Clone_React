import { Button, Typography, makeStyles } from '@material-ui/core';
import ProBanner from "../images/large.jpg"

function Banner() {
  const classes = useStyles();

  const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...`: string

  return (
    <div className={classes.root}>
    <div className={classes.content}>
      <Typography variant="h2" component="h1">
      Movie Title
      </Typography>
      <div className={classes.buttons}>
      <Button>Play</Button>
      <Button>My List</Button>
      </div>
      <Typography style={{ wordWrap:"break-word"}} variant="h6" className={classes.description}>
     {
      truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 60)
     }
      </Typography>
      <div className={classes.fadeBottom}></div>
    </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    root:{
      backgroundImage: `url(${ProBanner})`,
      position:"relative",
      height:"440px",
      objectFit:"contain",
      backgroundSize:"cover",
      backgroundPosition:"center",
      color:"#fff"
    },
    buttons:{
      "& button": {
        cursor:"pointer",
        color:"#fff",
        fontWeight: 700,
        borderRadius:"5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight:"1rem",
        backgroundColor: "rgba(51, 51, 51,0.5)",
      },
      "& button:hover":{
        color:"#000",
        backgroundColor:"#e6e6e6"
      },
    
    },
    fadeBottom:{
      position:"absolute",
      top:"30vh",
      bottom:0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",

    }
  }));
  

export default Banner
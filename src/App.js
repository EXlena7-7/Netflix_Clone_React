import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import Login  from './pages/Login';
import  Home  from './pages/Home';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';


function App() {
  const user = null;
  const classes = useStyles()
  return (
    
    <div className={classes.root}>
     <Router>
    {
      !user ? (<Login/>) :(
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/checkout'>
            <Paypal />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      )
    }
     </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  root:{
    backgroundColor:"#111",
    minHeight:"100vh"
  },
}));

export default App;

import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase';
import  Home  from './pages/Home';
import Login  from './pages/Login';
import { login, logout, selectUser } from './features/UserSlice';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  },[dispatch])

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

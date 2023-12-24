import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from "../components/Row";
import requests from '../Requests';

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <Banner/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      </div>
  )
}

const useStyles = makeStyles((theme) =>({
  root:{

  },
}));
export default Home
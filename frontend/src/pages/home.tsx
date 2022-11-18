import React from 'react';
import Header from '../components/home/headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/home/hero';
import Body from '../components/home/body';
import Answers from '../components/home/answers';

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Body/>
      <Answers/>
    </div>
  );
}

export default Home;
import React from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <div className="home">
      <h3>Welcome to the fitness app</h3>
      <p>Please fill out this survey so we can recommend the best programs for you. </p>
      <Button 
        variant='contained' 
        color='primary' 
        size='large'
        href="/survey"
      >
        Continue
      </Button>
    </div>
  )
}

export default Home

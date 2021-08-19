import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const SignUpForm = () => {

  const history = useHistory();
  const handleSubmit = () => {
    history.push('/results');
  }
  return (
    <div className="sign-up-form">
      <h3>Sign up and see your results</h3>
      <TextField 
        required 
        id="standard-required" 
        label="Name"
        
      />
      <TextField 
        required 
        id="standard-required" 
        label="Email"
        
      />
      <Button 
        variant='contained' 
        color='primary' 
        size='large'
        onClick={handleSubmit}>
          See My Results
      </Button>
    </div>
  )
}

export default SignUpForm

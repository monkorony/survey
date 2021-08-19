import React from 'react';
import { useState } from 'react';
import SurveyData from '../SurveyData/SurveyData';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router';

const Question = ({
  surveyQuestion, 
  surveyOptions, 
  currentQuestion, 
  setCurrentQuestion,
  results,
  setResults
}) => {

  const history = useHistory();
  const qLength = SurveyData.length - 1;
  const [value, setValue] = useState([]);
  const [answer, setAnswer] = useState();

  const handleChange = (evt) => {
    let qName = evt.target.name.split(" ").join("_").toLowerCase();
    if (evt.target.checked) {
      setValue([...value, qName]);
    } 
  }
  const handleNext = () => {
    if (currentQuestion < qLength) {
      setCurrentQuestion(currentQuestion + 1);
      setResults({...results, [currentQuestion] : value});
      setValue([]);      
    } else if (currentQuestion === qLength) {
      history.push('/sign-up');
    }
    localStorage.setItem("userInput", JSON.stringify(value));
  }

  return (
    <div>
      <h4>{surveyQuestion}</h4>
      <div className="options">
        {surveyOptions.map(opt => (
          <div key={opt}>
            <FormControlLabel
              control={<Checkbox name={opt} onChange={handleChange} value={opt}/>}
              label={opt}
            />
            
          </div>
        ))}
      </div>
      <Button 
        variant='contained' 
        color='primary' 
        size='large'
        onClick={handleNext}
        >
          Next
      </Button>
    </div>
  )
}

export default Question

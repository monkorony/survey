import React from 'react';
import Question from './Question';
import { useState } from 'react';

const Survey = ({
  surveyData, 
  results, 
  setResults
}) => {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="survey-container">
      {
        <Question 
          surveyQuestion={surveyData[currentQuestion].question}
          surveyOptions={surveyData[currentQuestion].options}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          results={results}
          setResults={setResults}
        />
      }
    </div>
  )
}

export default Survey

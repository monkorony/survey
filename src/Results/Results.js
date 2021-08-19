import React from 'react'

const Results = ({
  results, 
  setResults, 
  name, 
  setName,
  surveyData
}) => {

  let fakeResult = [
    { 0: ["your_fitness_goal_relieve_stress", "your_fitness_goal_prep_for_an_event"] },
    { 1: ["every_day", "5-6x_per_week"] },
  ]
  const keys = Object.keys(fakeResult);
  let surveyAnswersArr = JSON.parse(localStorage.getItem("userInput"));
  console.log(keys, 'keys');
  console.log(fakeResult)
  return (
    <div className="results">
      {keys.map(key => (
        <div key={key}>{surveyData[key].question}</div>
      ))}
      
    </div>
  )
}

export default Results

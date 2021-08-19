import React from 'react'

const Results = ({
  results, 
  setResults, 
  name, 
  setName,
  surveyData
}) => {

  return (
    <div className="results">
      <div>Based on your responses, we recommend the these programs:</div>
      <ul>
        <li>Strength Training</li>
      </ul>
    </div>
  )
}

export default Results

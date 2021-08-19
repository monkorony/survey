import './App.css';
import SurveyData from './SurveyData/SurveyData';
import Header from './Header/Header';
import SignUpForm from './SignUpForm/SignUpForm';
import Home from './Home/Home';
import Results from './Results/Results';
import Survey from './Survey/Survey';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [results, setResults] = useState();

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="survey-body">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-up" exact>
            <SignUpForm 
              name={name}
              setName={setName}
            />
          </Route>
          <Route path="/survey" exact>
            <Survey 
              surveyData={SurveyData}
              results={results}
              setResults={setResults}
            />
          </Route>
          <Route path="/results" exact>
            <Results 
              results={results}
              setResults={setResults}
              name={name}
              setName={setName}
              surveyData={SurveyData}
            />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

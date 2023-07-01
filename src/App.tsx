import React from 'react';
import './App.css';
import {Quiz} from "./quiz/Quiz";
import {EXAMPLE_QUIZ} from "./quiz/data";

function App() {
  return (
    <Quiz questionSet={EXAMPLE_QUIZ}/>
  );
}

export default App;

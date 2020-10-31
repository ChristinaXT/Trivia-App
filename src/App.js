import React, { useState, useEffect } from 'react';

import { Trivia } from './components';


const url = 'http://localhost:3001/quiz-info';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       setQuestions(data);
      });
  }, []);


  const baseAnswer = (answer) => {
    if(!showAnswers) {
      // prevent multiples
    if(answer === questions[currentIndex].correct) {
      setScore(score + 1);
  }
}
  setShowAnswers(true);

};

const handleNextQuestion = () => {
  setShowAnswers(false);

  setCurrentIndex(currentIndex + 1);
};

   if(!questions.length) {
     return null;
   }

    return (

            questions.length > 0 ? (
          <div className='container'>
            currentIndex >=questions.length ? (
            <h1 className="text-3xl text-white-800 font-bold">
            You are a Genius!! Your Score is {score}!
            </h1>

          ) : (
            <Trivia
            data={questions[currentIndex]}
            showAnswers={showAnswers}
            handleNextQuestion={handleNextQuestion}
            baseAnswer={baseAnswer}
            />
           )}
        </div>
       ) : (
          <h2 className='text-2xl text-green font-bold'>..The Spiders are Dancing!</h2>

    ))
  }


export default App;

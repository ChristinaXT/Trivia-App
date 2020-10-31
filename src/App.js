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
       const questions = data.map((question) =>
       ({
         ...question,
         answers: [
           question.correct,
           ...question.incorrect,
         ].sort(() => Math.random() - 0.5),
       }));

        setQuestions(questions.sort(() => Math.random()).slice(0, 10));
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

const handleNewQuestion = () => {
  setShowAnswers(false);

  setCurrentIndex(currentIndex + 1);
};

   if(!questions.length) {
     return null;
   }

    return (
        <div>
          {
            questions.length > 0
            ?
            (
            <div className='container'>
              {
                currentIndex >= questions.length
              ?
              (
              <h1 className="text-3xl text-white-800 font-bold">
              Your Score: You got {score} out of 10 questions.
              </h1>

              ) : (
                  <Trivia
                  data={questions[currentIndex]}
                  showAnswers={showAnswers}
                  handleNewQuestion={handleNewQuestion}
                  baseAnswer={baseAnswer}
                  />
                 )
               }
              </div>
             ) : (
                <h2 className='text-2xl text-green font-bold'>..The Spiders are Dancing!</h2>

            )
          }
        </div>
    )
  }


export default App;

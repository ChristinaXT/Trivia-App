import React, { useState, useEffect } from 'react';

import { Trivia } from './components';


const url = 'http://localhost:3001/quiz-info';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnds, setGameEnds] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       setQuestions(data);
      });
  }, []);

  const baseAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1);

    if(answer === questions[currentIndex].
    correct) {
      setScore(score + 1);
      }
    }



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
            <Trivia data={questions[currentIndex]} baseAnswer={baseAnswer} />
         </div>
       )
       :
       (
          <h2 className='text-2xl text-green'>..The Spiders are Dancing!</h2>
        )
      }
      </div>
    )
  }


export default App;

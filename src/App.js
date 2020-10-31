import React, { useState, useEffect } from 'react';

import { Trivia } from './components';


const url = 'http://localhost:3001/quiz-info';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       setQuestions(data);
      });
  }, []);

  const baseAnswer = (answer) => {
     //check for the Answer
     // show another // QUESTION:
     // change score if correct

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

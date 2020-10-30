import React, { useState, useEffect } from 'react';

import { Trivia } from './components';


const url = 'http://localhost:3001/quiz-info';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       setQuestions(data);
       // console.log(data);
       // console.log(data[1].question);
      });
  }, []);

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
            <Trivia data={questions[0]}/>
         </div>
       )
       :
       (
          <h2 className='text-2xl text-green'>..Spiders..Dancing!</h2>
        )

      }
      </div>
    )

  }


export default App;

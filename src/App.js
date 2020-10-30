import React, { useState, useEffect } from 'react';



const url = 'http://localhost:3001/quiz-info';

function App() {
  const [questions, setQuestions] = useState([]);

useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((facts) => {
     setQuestions(facts.results);
    });
}, []);

    return (
      <div className='container'>
         {questions.length > 0 && (
        <div className='bg-black text-purple-500 p-10 rounded-lg shadow-mg'>
          <h2 className='text-3xl'>
            {questions[0].question}
          </h2>
           </div>

       <div className='mt-5'>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-mg mb-4'>{questions[0].correct_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-mg mb-4'>{questions[0].incorrect_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-mg mb-4'>{questions[0].incorrect_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-mg mb-4'>{questions[0].incorrect_answer}
        </button>
       </div>
     ) : (
        <h1>....Loading!</h1>
         )}
      </div>
    );
  }


export default App;

import React, { useState, useEffect } from 'react';


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
            <div className='bg-black text-purple-500 p-10
            rounded-lg shadow-md'>
              <h2 className='text-3xl'>
                {questions[0].question}
              </h2>
            </div>

           <div className='mt-5'>
            <button className='bg-yellow-500 hover:bg-purple-500 w-1/2 p-4
            text-black-800 font-bold py-2 px-4 border border-black
            rounded-lg shadow-md mb-4'>{questions[0].correct}
            </button>
            <button className='bg-yellow-500 hover:bg-purple-500 w-1/2 p-4
            text-black-800 font-bold py-2 px-4 border border-black
            rounded-lg shadow-md mb-4'>{questions[0].incorrect[0]}
            </button>
            <button className='bg-yellow-500 hover:bg-purple-500 w-1/2 p-4
            text-black-800 font-bold py-2 px-4 border border-black
            rounded-lg shadow-md mb-4'>{questions[0].incorrect[1]}
            </button>
            <button className='bg-yellow-500 hover:bg-purple-500 w-1/2 p-4
            text-black-800 font-bold py-2 px-4 border border-black
            rounded-lg shadow-md mb-4'>{questions[0].incorrect[2]}
            </button>
           </div>
         </div>
       )
       :
       (
          <h2 className='text-2xl text-green'>....Loading!</h2>
        )

      }
      </div>
    )


    {/* return questions.length > 0 ? (
      <div className='container'>
        <div className='bg-black text-purple-500 p-10
        rounded-lg shadow-md'>
          <h2 className='text-3xl'
            {questions[0].question}
          />
        </div>

       <div className='mt-5'>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-md mb-4'>{questions[0].correct_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-md mb-4'>{questions[0].incorrect_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-md mb-4'>{questions[0].incorrect_answer}
        </button>
        <button className='bg-green-500 hover:bg-purple-500 w-1/2 p-4
        text-black-800 font-bold py-2 px-4 border border-black
        rounded-lg shadow-md mb-4'>{questions[0].incorrect_answer}
        </button>
       </div>
     </div>
   ) : (
        <h1>....Loading!</h1>
      ) */}

  }


export default App;

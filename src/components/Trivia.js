import React from 'react';

const Trivia = (question) => (
  <div>
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

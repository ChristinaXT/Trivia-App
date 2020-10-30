import React from 'react';

const Button = ({ answer }) => (
  <button className='bg-yellow-500 hover:bg-purple-500 p-4
  text-black-800 font-bold border border-black
  rounded-lg shadow-md'>
      {answer}
  </button>
);

const Trivia = ({ data: { question, correct, incorrect } }) => (
  <div>
    <div className='bg-black text-purple-500 p-10
      rounded-lg shadow-md'>
       <h2 className='text-3xl'>
        {question}
       </h2>
    </div>

   <div className='grid grid-cols-2 gap-6 mt-6'>
     <Button answer={correct} />
     <Button answer={incorrect[0]} />
     <Button answer={incorrect[1]} />
     <Button answer={incorrect[2]} />
   </div>
 </div>
)

export default Trivia;

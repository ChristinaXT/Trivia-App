import React from 'react';

const Button = ({ answer }) => (
  <button className='bg-yellow-500 hover:bg-purple-500 w-1/2 p-4
  text-black-800 font-bold py-2 px-4 border border-black
  rounded-lg shadow-md mb-4'>
   {answer}
  </button>
);

const Trivia = ({ data: {question, correct, incorrect} }) => (
  <div>
  <div className='bg-black text-purple-500 p-10
  rounded-lg shadow-md'>
    <h2 className='text-3xl'>
      {question}
    </h2>
  </div>

   <div className='grid grid-cols-2 gap-6 mt-6'>
   <button answer={correct} />
   <button answer={incorrect[0]} />
   <button answer={incorrect[1]} />
   <button answer={incorrect[2]} />
   </div>
 </div>
)

export default Trivia;

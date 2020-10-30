import React from 'react';

const Button = ({ answer }) => (
  <button className='bg-yellow-500 hover:bg-purple-500 p-4
  text-black-800 font-bold border border-black
  rounded-lg shadow-md'>
      {answer}
  </button>
);

const Trivia = ({ baseAnswer, data: { question, correct, incorrect } }) => {
    const mixedAnswer = [correct, ...incorrect];
  return (
  <div>
    <div className='bg-black text-purple-500 p-10
      rounded-lg shadow-md'>
       <h2 className='text-3xl'>
        {question}
       </h2>
    </div>

   <div className='grid grid-cols-2 gap-6 mt-6'>
     <Button onClick={() => baseAnswer(mixedAnswer[0])}answer={mixedAnswer[0]} />
     <Button onClick={() => baseAnswer(mixedAnswer[1])}answer={mixedAnswer[1]} />
     <Button onClick={() => baseAnswer(mixedAnswer[2])}answer={mixedAnswer[2]} />
     <Button onClick={() => baseAnswer(mixedAnswer[3])}answer={mixedAnswer[3]} />
   </div>
 </div>
)};

export default Trivia;

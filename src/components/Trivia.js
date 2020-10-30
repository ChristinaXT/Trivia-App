import React from 'react';

const Button = ({ answer }) => (
  <button className='bg-yellow-500 hover:bg-purple-500 p-4
  text-black-800 font-bold border border-black
  rounded-lg shadow-md'>
      {answer}
  </button>
);

const Trivia = ({ handleAnswer, data: { question, correct, incorrect } }) => {
    const shuffledAnswer = [correct, ...incorrect];
  return (
  <div>
    <div className='bg-black text-purple-500 p-10
      rounded-lg shadow-md'>
       <h2 className='text-3xl'>
        {question}
       </h2>
    </div>

   <div className='grid grid-cols-2 gap-6 mt-6'>
     <Button onClick={() => handleAnswer(shuffledAnswer[0])}answer={shuffledAnswer[0]} />
     <Button onClick={() => handleAnswer(shuffledAnswer[1])}answer={shuffledAnswer[1]} />
     <Button onClick={() => handleAnswer(shuffledAnswer[2])}answer={shuffledAnswer[2]} />
     <Button onClick={() => handleAnswer(shuffledAnswer[3])}answer={shuffledAnswer[3]} />
   </div>
 </div>
)};

export default Trivia;

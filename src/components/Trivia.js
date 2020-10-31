import React from 'react';


const Trivia = ({ baseAnswer, data: { question, correct, incorrect } }) => {
    const mixedAnswer = [correct, ...incorrect].sort(() => Math.random() - 0.5);
  return (
  <div>
    <div className='bg-black text-purple-500 p-10
      rounded-lg shadow-md'>
       <h2 className='text-3xl'>
        {question}
       </h2>
    </div>

   <div className='grid grid-cols-2 gap-6 mt-6'>

      {mixedAnswer.map(answer => (
          <button
              className={`${correct===answer
                ? 'bg-yellow-500' :
                'bg-yellow-500'
               } p-4
                text-black-800
                font-bold
                border border-black
                rounded-lg shadow-md`}
                onClick={() => baseAnswer
              (answer)}>
              {answer}
            </button>
        ))}

      </div>

   </div>
   );
};





export default Trivia;

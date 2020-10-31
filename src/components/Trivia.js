import React from 'react';


const Trivia = ({
    showAnswers,
    baseAnswer,
    data: { question, correct,
      incorrect
    } }) => {
    const mixedAnswers = [correct, ...
      incorrect].sort(
        () => Math.random() - 0.5
      );

  return (
     <div>
        <div className='bg-black text-purple-500
        p-10 rounded-lg shadow-md'>
         <h2
           className='text-3xl'>
            {question}
         </h2>
    </div>

      <div className='grid grid-cols-2 gap-6 mt-6'>

       {mixedAnswers.map((answer) => {
          const textColor = showAnswers ?
          answer === correct
          ? 'text-green-500'
          : 'text-red-800'
          : 'text-black-800';
          // const textColor = showAnswers ?
          // 'text-white' : 'text-black-800';
          return (
             <button
                className={`bg-yellow ${textColor}
                p-4
                font-bold
                border border-black
                rounded shadow`}
                onClick={() => baseAnswer
                (answer)}>
                {answer}
          </button>
         );
        })}

      </div>

   </div>
   );
};





export default Trivia;

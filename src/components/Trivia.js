import React from 'react';


const Trivia = ({
    showAnswers,
    baseAnswer,
    handleNewQuestion,
    data: { question, correct,
      incorrect
    } }) => {
    const mixedAnswers = [correct, ...
      incorrect].sort(
        () => Math.random() - 0.5
      );

  return (
     <div className='flex flex-col'>
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
          ? 'text-green-800'
          : 'text-red-800'
          : 'text-black-800';
          return (
             <button
                className={`bg-yellow-500 ${textColor}
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
      {showAnswers && (
        <button
        onClick={handleNewQuestion}
        className={`ml-auto bg-black text-red-800
        p-4 font-bold rounded shadow mt-6`}>
        New Question
       </button>

      )}
   </div>
   );
};





export default Trivia;

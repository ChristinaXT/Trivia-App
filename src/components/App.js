import React, { useState, useEffect } from 'react';

import Trivia from './Trivia';


const url = 'http://localhost:3001/quiz-info';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       const questions = data.map((question) =>
       ({
         ...question,
         answers: [
           question.correct,
           ...question.incorrect,
         ].sort(() => Math.random() - 0.5),
       }));

        setQuestions(questions.sort(() => Math.random()).slice(0, 10));
      });
  }, []);


  const baseAnswer = (answer) => {
    if(!showAnswers) {
      // prevent multiples
    if(answer === questions[currentIndex].correct) {
      setScore(score + 1);
  }
}
  setShowAnswers(true);

};

const handleNewQuestion = () => {
  setShowAnswers(false);

  setCurrentIndex(currentIndex + 1);
};

const reloadPage = () => {
  window.location.reload(false);
}

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
              {
                currentIndex >= questions.length
              ?
              (

              <div class="max-w-screen-lg bg-orange-500 shadow-2xl rounded-lg mx-auto text-center p-12 mt-4">
              {
                score > 7
                ?
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
                    Your Score: You got {score} out of 10 questions. Pretty Clever!
                </h2>
                :
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
                    Your Score: You got {score} out of 10 questions. You Suck!
                </h2>
              }
                  <div class="mt-8 flex justify-center">
                      <div className="inline-flex rounded-md bg-white shadow">
                          <button onClick={reloadPage} className={`bg-black hover:bg-purple-700 hover:text-yellow-300
                            text-red-800 font-bold py-2 px-6 border border-white hover:border-white rounded shadow`}>
                          TRY AGAIN?
                          </button>
                      </div>
                  </div>
              </div>

              ) : (
                  <Trivia
                  data={questions[currentIndex]}
                  showAnswers={showAnswers}
                  handleNewQuestion={handleNewQuestion}
                  baseAnswer={baseAnswer}
                  />
                 )
               }
              </div>
             ) : (
                <h2 className='text-2xl text-green font-bold'>..The Spiders are Dancing!</h2>

            )
          }
        </div>
    )
  }


export default App;

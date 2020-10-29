import React from 'react';
import axios from 'axios';
import App.css from 'app.css';



class App extends React.Component {
  state = {
    facts: []
  }

  componentDidMount() {
    const url = 'http://localhost:3001/quiz-info';

    axios.get(url)
    .then((response) => {
      const facts = response.data;

      this.setState({
        facts
      })
      // console.log(this.state.facts);
    })
    .catch(error => {
      console.log(error);
      console.log('An error has occurred...');
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Trivia Game</h1>
        <div className='question-box'>
          <h2 className='q-text'>
            question
          </h2>
           </div>

       <div>
        <div>answer</div>
        <div>answer</div>
        <div>answer</div>
        <div>answer</div>
       </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
import axios from 'axios';



class App extends React.Component {
  state = {
    facts: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/quiz-info')
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
      <div>
      <h1>Trivia Game</h1>
        {this.state.facts.map((fact, index) => (
          <div key={index}>
            <h3>{fact.question}</h3>
          </div>
        ))}
      </div>
    )
  }
}

export default App;

import React from 'react';
import axios from 'axios';




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

        <div className='bg-black text-purple-500 p-10 rounded'>
          <h2 className='text-4xl'>
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

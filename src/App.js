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

        <div className='bg-black text-purple-500 p-10 rounded-lg shadow-mg'>
          <h2 className='text-4xl'>
            question
          </h2>
           </div>

       <div>
        <button className='bg-green-500 w-1/2 p-4 text-black-800'>answer</button>
        <button className='bg-green-500 w-1/2 p-4 text-black-800'>answer</button>
        <button className='bg-green-500 w-1/2 p-4 text-black-800'>answer</button>
        <button className='bg-green-500 w-1/2 p-4 text-black-800'>answer</button>

       </div>
      </div>
    )
  }
}

export default App;

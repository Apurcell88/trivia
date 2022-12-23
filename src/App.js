import './App.css';
import React from 'react';
import Start from './components/Start';

function App() {
  const [startTrivia, setStartTrivia] = React.useState(false);
  const [trivia, setTrivia] = React.useState([]);

 React.useEffect(() => {
    async function getTrivia() {
      const res = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await res.json();
      // set the trivia array to the data
      setTrivia(data.results);
    }
    getTrivia();
  }, [])

  // need to loop over data.incorrect_answers
  const questions = trivia.map((data, index) => (
    <div>
      <h2 className='question' key={data.question}>
      {data.question}
      </h2>
      <button>{data.correct_answer}</button>
      {data.incorrect_answers.map(answer => {
        return (
          <button>{answer}</button>
        )
      })}
    </div>
  ))

  return (
    <div className='trivia-container'>
      {startTrivia ? '' : <Start setStartTrivia={setStartTrivia}/>}
      {startTrivia && questions}
    </div>
  );
}

export default App;

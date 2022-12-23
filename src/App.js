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

  const questions = trivia.map(data => (
    <h2 className='question' key={data.question}>
      {data.question}
    </h2>
  ))

  return (
    <div className='trivia-container'>
      {startTrivia ? '' : <Start setStartTrivia={setStartTrivia}/>}
      <div className>
        {startTrivia && questions}
      </div>
    </div>
  );
}

export default App;

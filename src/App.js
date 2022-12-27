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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  console.log(trivia);

  // create a function that applies style to clicked answer
  function clickedAnswer() {

  }

  // combine correct answer string into the incorrect answers array

  
  const questions = trivia.map((data, index) => (
    <div>
      <h2 className='question' key={data.question}>
      {data.question}
      </h2>
      <button className='answer' onCLick={clickedAnswer}>{data.correct_answer}</button>
      {data.incorrect_answers.map(answer => {
        return (
          <button className='answer' onCLick={clickedAnswer}>{answer}</button>
        )
      })}
    </div>
  ))

  // const questions = trivia.map((data, index) => (
  //   <div>
  //     <h2 className='question' key={data.question}>
  //     {data.question}
  //     </h2>
  //     <button>{data.correct_answer}</button>
  //     {data.incorrect_answers.map(answer => {
  //       return (
  //         <button>{answer}</button>
  //       )
  //     })}
  //   </div>
  // ))

  return (
    <div className='trivia-container'>
      {startTrivia ? '' : <Start setStartTrivia={setStartTrivia}/>}
      {startTrivia && questions}
      <button className='check-answers'>Check answers</button>
    </div>
  );
}

export default App;

const Start = (props) => {
    return (
      <div className="start--container">
        <h1 className="start--title">Quizzical</h1>
        <p className="start--text">Answer some trivia questions!</p>
        <button
          className="start--btn"
          onClick={() => props.setStartTrivia(true)}
        >
          Start quiz
        </button>
      </div>
    );
}
 
export default Start;
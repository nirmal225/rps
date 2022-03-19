import './index.css'

const GameScore = props => {
  const {score} = props

  return (
    <div className="score-details-container">
      <h1 className="score-heading">
        Rock
        <br /> Paper <br />
        Scissors
      </h1>
      <div className="score-container">
        <p className="heading">Score</p>
        <p className="score">{score}</p>
      </div>
    </div>
  )
}

export default GameScore

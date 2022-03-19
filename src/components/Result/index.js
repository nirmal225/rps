import './index.css'

const Result = props => {
  const {status, gameEmoji, resetGame, choicesList, playerEmoji} = props

  const playAgain = () => {
    resetGame()
  }
  const player = choicesList.find(eachEmoji => eachEmoji.id === playerEmoji)
  const opponent = choicesList.find(eachEmoji => eachEmoji.id === gameEmoji)

  return (
    <div className="result-container">
      <div className="images-container">
        <div className="image-container">
          <p className="image-name">You</p>
          <img alt={player.id} className="image" src={player.imageUrl} />
        </div>
        <div className="image-container">
          <p className="image-name">Opponent</p>
          <img alt={opponent.id} className="image" src={opponent.imageUrl} />
        </div>
      </div>
      <h1 className="status-heading">{status}</h1>
      <button type="button" className="play-again-button" onClick={playAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Result

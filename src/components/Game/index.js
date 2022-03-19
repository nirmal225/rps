import './index.css'
import {Component} from 'react'

import RockPaperScissor from '../RockPaperScissor'
import GameScore from '../GameScore'
import Result from '../Result'
import Rules from '../Rules'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    playerEmoji: '',
    gameEmoji: '',
    status: '',
  }

  resetGame = () => {
    this.setState({
      isPlaying: true,
      playerEmoji: '',
      gameEmoji: '',
    })
  }

  renderResultView = () => {
    const {status, isPlaying, score, playerEmoji, gameEmoji} = this.state

    return (
      <Result
        score={score}
        status={status}
        isPlaying={isPlaying}
        gameEmoji={gameEmoji}
        choicesList={choicesList}
        playerEmoji={playerEmoji}
        resetGame={this.resetGame}
      />
    )
  }

  getRandomEmoji = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const randomEmoji = choicesList[randomNumber].id

    return randomEmoji
  }

  getClickedEmoji = id => {
    const randomEmoji = this.getRandomEmoji()

    this.setState({
      playerEmoji: id,
    })

    if (
      (id === 'ROCK' && randomEmoji === 'ROCK') ||
      (id === 'PAPER' && randomEmoji === 'PAPER') ||
      (id === 'SCISSORS' && randomEmoji === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 0,
        isPlaying: !prevState.isPlaying,
        status: 'IT IS DRAW',
      }))
    } else if (
      (id === 'ROCK' && randomEmoji === 'SCISSOR') ||
      (id === 'PAPER' && randomEmoji === 'ROCK') ||
      (id === 'SCISSORS' && randomEmoji === 'PAPER')
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isPlaying: !prevState.isPlaying,
        status: 'YOU LOSE',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isPlaying: !prevState.isPlaying,
        status: 'YOU WIN',
      }))
    }

    this.setState({
      gameEmoji: randomEmoji,
      playerEmoji: id,
    })
  }

  renderGameView = () => (
    <div className="game-details-container">
      <ul className="game-container">
        {choicesList.map(eachItem => (
          <RockPaperScissor
            key={eachItem.id}
            eachItem={eachItem}
            getClickedEmoji={this.getClickedEmoji}
          />
        ))}
      </ul>
    </div>
  )

  render() {
    const {isPlaying, score} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <GameScore score={score} />
          {isPlaying ? this.renderGameView() : this.renderResultView()}
          <Rules />
        </div>
      </div>
    )
  }
}

export default Game

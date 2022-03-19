import './index.css'

const RockPaperScissor = props => {
  const {eachItem, getClickedEmoji} = props
  const {id, imageUrl} = eachItem

  const onClickGetEmoji = () => {
    getClickedEmoji(id)
  }

  return (
    <li>
      <button type="button" className="image-button" onClick={onClickGetEmoji}>
        <img alt={id} src={imageUrl} className="image" />
      </button>
    </li>
  )
}

export default RockPaperScissor

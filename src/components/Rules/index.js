import './index.css'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'

const Rules = () => (
  <div>
    <Popup
      modal
      trigger={
        <div className="rules-container">
          <button className="rules-button" type="button">
            Rules
          </button>
        </div>
      }
      className="popup-container"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-image"
          />
        </div>
      )}
    </Popup>
  </div>
)

export default Rules

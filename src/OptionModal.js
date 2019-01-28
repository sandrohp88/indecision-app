import React from 'react'
import Modal from 'react-modal'

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
    >
      <h1>Hello modal</h1>
      <p>{props.selectedOption}</p>
      <button onClick={props.handleClearSelectedOption}>Ok</button>
    </Modal>
  </div>
)
export { OptionModal }

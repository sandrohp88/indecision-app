import React from 'react'
import Modal from 'react-modal'
import { modal, modal__title, modal__body, button } from "./OptionModal.module.scss";
import  "./OptionModal.module.scss";

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
      className = {modal}
      closeTimeoutMS={200}
    >
      <h3 className={modal__title}>Selected Option</h3>
      <p className= {modal__body}>{props.selectedOption}</p>
      <button className={button} onClick={props.handleClearSelectedOption}>Ok</button>
    </Modal>
  </div>
)
export { OptionModal }

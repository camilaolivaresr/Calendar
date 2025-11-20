import {  useState } from 'react'
import Modal from 'react-modal'
import './modal.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () =>{
    console.log('cerrando')
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}

      >
        <h1>hola</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste inventore et nemo aut enim aliquid asperiores necessitatibus nisi dignissimos ad veniam debitis temporibus, ipsam aperiam quos odit quis. Aut, commodi.</p>

      </Modal>
    </div>
  )
}

export default CalendarModal

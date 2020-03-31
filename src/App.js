import React, { useState } from 'react';
import Modal, { setAppElement } from 'react-modal';
import { Swipeable } from 'react-swipeable';

import { GlobalStyle, Container, Btn, customModal } from "./styles";

import Calendar from './components/calendar/';


setAppElement('#root')

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // ...
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Btn onClick={openModal}>Open Modal</Btn>

      </Container>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customModal}
      >
        <Swipeable onSwipedDown={(eventData) => console.log('swipe!', eventData)} >
          <header>
            <button onClick={closeModal}><strong>X</strong> </button>
            <span> Calendar</span>
          </header>
          <Calendar />
        </Swipeable>
      </Modal>
    </>
  );
}

export default App;

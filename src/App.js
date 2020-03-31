import React, { useState } from 'react';
import Modal, { setAppElement, defaultStyles } from 'react-modal';
import { Swipeable } from 'react-swipeable';

import { GlobalStyle, Container, ImageMain, Btn, BtnWrapper, Animation, HeaderModal } from "./styles";

import close from './assets/close.svg'
import background from './assets/background.png'
import Calendar from './components/calendar/';


setAppElement('#root')
defaultStyles.content.backgroundColor = 'white';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customModal = {
    content: {
      top: '30vh',
      rigth: '0',
      left: '0',
      bottom: '0',
      margin: '0',
      width: '100%',
      padding: 10,
      background: '#fff',
      overflow: 'none',
      WebkitOverflowScrolling: 'none',
      borderRadius: '10px',
      outline: 'none'
    },
    overlay: {
      backgroundColor: '#999',
      opacity: 0.9
    }
  }

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
        <ImageMain src={background} alt="background" />
        {!modalIsOpen ?
          <Btn onClick={openModal} style={{ marginBottom: 50 }}>Open Modal</Btn>
          : null
        }
      </Container>
      <Animation>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          style={customModal}
        >
          <Swipeable onSwipedDown={(eventData) => closeModal(console.log(eventData))} >
            <HeaderModal>
              <img src={close} onClick={closeModal} alt="icon-close" />
              <span> Calendar</span>
            </HeaderModal>
            <Calendar />
            <BtnWrapper>
              <Btn onClick={closeModal}>Apply</Btn>
            </BtnWrapper>
          </Swipeable>
        </Modal>
      </Animation>
    </>
  );
}

export default App;

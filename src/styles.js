import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { slideInUp } from "react-animations";
import ReactModal from 'react-modal'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
`

export const Modal = styled(ReactModal)`
  &.rdrMonth {
    width: 12em !important;
  }
`
export const customModal = {
  content: {
    top: '32%',
    rigth: '0',
    left: '0',
    bottom: '0',
    margin: '0',
    width: '100%',
    padding: 10
  },
  overlay: {
    backgroundColor: '#999',
    opacity: '0.8'
  }
}

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
`

export const Btn = styled.button`
  background-image: linear-gradient(43deg, #4a54df 4%, #15d4d8 69%);
  color: #fff;
  font-size: 18px;
  padding:10px;
  margin: 10px 20px;
  border-radius: 20px;
  min-width: 250px;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center
`

const animation = keyframes`${slideInUp}`;

export const Animation = styled.div`
  animation: 2s ${animation};
  background-color: #fff;
`;

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
`

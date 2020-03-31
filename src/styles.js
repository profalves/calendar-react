import styled, { createGlobalStyle } from 'styled-components';

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
`

export const Title = styled.h1`
  color: #404666;
`

export const Btn = styled.button`
  background-color: #404666;
  color: #fff;
  font-size: 18px;
  padding:10px;
  margin: 20px;
  border-radius: 5px;
`

export const customModal = {
  content: {
    top: '35%',
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



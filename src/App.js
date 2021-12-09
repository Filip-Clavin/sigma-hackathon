import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import clippy from './img/clippy.png'

import Chat from './components/Chat/Chat'

const GlobalStyle = createGlobalStyle`

  ${reset}

  html {
    overflow: hidden;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
  
  #root {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3%);
    }
  }

  .clippy {
    position: absolute;
    max-height: 90%;
    animation-name: bounce;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <img className='clippy' src={clippy} alt="clippy" />
      <Chat />
    </>
  );
}

export default App;

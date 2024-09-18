import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #09117E, #09ABF3);

li{
  list-style: none;
}
`

function App() {

  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  )
}

export default App

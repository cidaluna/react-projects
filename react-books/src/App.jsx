import './App.css';
import IconesHeader from './components/IconesHeader';
import Logo from './components/Logo';
import OpcoesHeader from './components/OpcoesHeader';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  )
}

export default App

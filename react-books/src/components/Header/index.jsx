import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import './style.css'


const Header = () => {
  return (
    <header className="App-header">
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
    </header>
  )
}

export default Header

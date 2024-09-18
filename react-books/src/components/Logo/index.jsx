import logo from '../../assets/logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
        <img src={logo} alt="Logo React Books" />
        <p><strong>React</strong>Books</p>
    </div>
  )
}

export default Logo
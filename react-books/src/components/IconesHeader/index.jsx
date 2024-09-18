import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import './style.css';


const icones = [perfil, sacola];

const IconesHeader = () => {
  return (
    <ul className='icones'>
          { icones.map((icon) => (
            <li key={icon} className='icone'><img src={icon} alt={icon} /></li>
          ))}
    </ul>
  )
}

export default IconesHeader

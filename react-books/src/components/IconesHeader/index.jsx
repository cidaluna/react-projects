import styled from 'styled-components';
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';

const Icone = styled.li`
  margin-right: 20px;
  width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const icones = [perfil, sacola];

const IconesHeader = () => {
  return (
    <Icones>
          { icones.map((icon) => (
            <Icone key={icon}><img src={icon} alt={icon} /></Icone>
          ))}
    </Icones>
  )
}

export default IconesHeader

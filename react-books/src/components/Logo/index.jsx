import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 25px;
    align-items: center;
`

const LogoImage = styled.img`
    margin-right: 6px;
`

function Logo() {
  return (
    <LogoContainer>
        <LogoImage src={logo} alt="Logo React Books" />
        <p><strong>React</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo
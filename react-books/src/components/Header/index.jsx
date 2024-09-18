import styled from 'styled-components'
import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'

const HeaderContainer = styled.header`
    display: flex;
    background-color: #fff;
    justify-content: center;
`

const Header = () => {
  return (
    <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
  )
}

export default Header

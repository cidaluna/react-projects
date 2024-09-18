import styled from 'styled-components';

const Opcoes = styled.ul`
   display: flex;
`

const Opcao = styled.li`
 min-width: 120px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const OpcoesHeader = () => {
  return (
    <Opcoes>
          { textoOpcoes.map((item) => (
            <Opcao key={item}>
              <p>{item}</p>
            </Opcao>
          ))}
    </Opcoes>
  )
}

export default OpcoesHeader

import styled from 'styled-components'
import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo>Últimos Lançamentos 1</Titulo>
            <Titulo cor="#000">Últimos Lançamentos 2</Titulo> {/* passando prop*/}
            <NovosLivrosContainer>
                { livros.map(item => (
                    <img key={item.id} src={item.src}/>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
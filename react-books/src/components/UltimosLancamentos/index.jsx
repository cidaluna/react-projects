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
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
                alinhamento="center"
            >Últimos Lançamentos</Titulo> {/* utilizando props */}
            <NovosLivrosContainer>
                { livros.map(item => (
                    <img key={item.id} src={item.src}/>
                ))}
            </NovosLivrosContainer>

            <div>
                <h3>Talvez você se interesse por ...</h3>
                <h4>Angular 17</h4>
                <p>Construindo uma aplicação integrada com o Google</p>
                <button>Saiba mais</button>
            </div>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
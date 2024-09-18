import styled from 'styled-components'
import imagemLivro from '../../assets/livro2.png'
import CardRecomenda from '../CardRecomenda'
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

            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 17"
                descricao="Construindo uma aplicação integrada com o Google"
                imagem={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
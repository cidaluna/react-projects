import { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import { livros } from '../Pesquisa/dadosPesquisa'

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Pesquisa = () => {

  const [livrosPesquisados, setLivrosPesquisados] = useState([]); // padrão é uma lista vazia


  return (
    <PesquisaContainer>
        <Titulo> Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
        <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro =>
                         livro.nome.toLowerCase().includes(textoDigitado.trim().toLowerCase()) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {
                livrosPesquisados.map(item => (
                    <Resultado key={item.id}>
                        <p>{item.nome}</p>
                        <img src={item.src}/>
                    </Resultado>
                ))
            }
    </PesquisaContainer>
  )
}

export default Pesquisa

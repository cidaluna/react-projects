import './style.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const OpcoesHeader = () => {
  return (
    <ul className='opcoes'>
          { textoOpcoes.map((item) => (
            <li key={item} className='opcao'>
              <p>{item}</p>
            </li>
          ))}
    </ul>
  )
}

export default OpcoesHeader

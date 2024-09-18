import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App.jsx'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

body{
  display: flex;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", system-ui;
  font-style: normal;
}

li{
  list-style: none;
}
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)

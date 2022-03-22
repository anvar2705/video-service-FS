import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { myTheme } from './components/shared/theme/myTheme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

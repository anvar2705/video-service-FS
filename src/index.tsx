import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { myTheme } from './components/shared/theme/myTheme'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

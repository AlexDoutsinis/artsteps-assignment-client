import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import 'fontsource-roboto'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </>,
  document.getElementById('root'),
)

//
// Third-Party JS Imports
//
import React from 'react'
import ReactDOM from 'react-dom'

//
// App JS Imports
//
import App from './components/App'

//
// CSS Imports
//
import '../sass/main.sass'

//
// Render
//
ReactDOM.render(
    <App title="Badge Claim" />,
    document.getElementById('app')
)
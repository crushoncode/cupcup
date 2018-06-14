import React from 'react'
import ReactDOM from 'react-dom'

// const React = require('react')

function App() {
    return React.createElement('div', {}, 'Hello World')
} 

const result = App()

ReactDOM.render(result, document.querySelector('#root'))

// <div>Hello World</div>
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

const reactProps = {
  componentTitle: 'Component Test',
  number:'+5551998406095',
}

it('render App without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App {...reactProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

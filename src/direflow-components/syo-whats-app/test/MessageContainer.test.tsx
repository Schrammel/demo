import React from 'react'
import ReactDOM from 'react-dom'
import MessageContainer, { Props } from '../components/MessageContainer/MessageContainer'

const props: Props = {
  messages: [],
  websocket: {
    connected: true,
    connecting: false,
    error: false
  }
}

it('render MessageContainer without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MessageContainer {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})


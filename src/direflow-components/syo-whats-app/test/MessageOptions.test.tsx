import React from 'react'
import ReactDOM from 'react-dom'
import { MessageOptionsProps } from '../components/MessageOptions'
import MessageOptions from '../components/MessageOptions/MessageOptions'
import { actions } from '../components/MessageOptions/MessageOptions'

const props: MessageOptionsProps = {
  show: true,
  color: 'red',
  ...actions,
  message: {
    from: '+5551998406095',
    to: '+5551998406095',
    message: {
      text: 'hello',
      type: 'TEXT'
    },
    integrationType: 'WHATSAPP',
    messageId: 'asdasdasds',
    sentAt: new Date().toISOString(),
  },
}

it('render MessageOptions without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MessageOptions {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

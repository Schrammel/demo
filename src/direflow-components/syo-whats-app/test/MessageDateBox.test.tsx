import React from 'react'
import ReactDOM from 'react-dom'
import MessageDateBox, { Props } from '../components/MessageDateBox/MessageDateBox'
import { reduceMessages } from '../components/MessageDateBox/'
import { Message } from '../store/ducks/messages/types'
import { Provider } from 'react-redux'
import store from '../store'

const firstMessage = new Date(1594038334400).toISOString()
const secondMessage = new Date(1594038334405).toISOString()


const messages: Message[] = [{
  from: '+5551998406095',
  to: '+5551998406095',
  message: {
    text: 'hello',
    type: 'TEXT'
  },
  integrationType: 'WHATSAPP',
  messageId: 'asdasdasds',
  sentAt: secondMessage,
}]
const messages2: Message[] = [{
  from: '+5551998406095',
  to: '+5551998406095',
  message: {
    text: 'hello',
    type: 'TEXT'
  },
  integrationType: 'WHATSAPP',
  messageId: 'asdasdasds',
  sentAt: firstMessage,
  doneAt: new Date().toISOString(),
}]

const props: Props = {
  mapMessage: {
    date: 'date',
    messages: messages
  }
}

it('render MessageDateBox without crashing', () => {
  const Root = () => {
    return <Provider store={store} >
      <MessageDateBox {...props}></MessageDateBox>
    </Provider>
  }

  const div = document.createElement('div')
  ReactDOM.render(<Root />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it(`check order of messages, first message must have been sent at ${firstMessage}`, () => {
  const reduce = reduceMessages([...messages, ...messages2])
  expect(1).toEqual(reduce.length)
  expect(reduce[0].messages[0].sentAt).toEqual(firstMessage)
})


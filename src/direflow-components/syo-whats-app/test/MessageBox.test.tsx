import React from 'react'
import ReactDOM from 'react-dom'
import MessageBox from '../components/MessageBox'
import { OwnProps } from '../components/MessageBox/MessageBox'
import { Provider } from 'react-redux'
import store from '../store'

const elementProps: OwnProps = {
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


it('render MessageBox without crashing', () => {
  const Root = () => {
    return <Provider store={store} >
      <MessageBox {...elementProps}></MessageBox>
    </Provider>
  }

  const div = document.createElement('div')
  ReactDOM.render(<Root />, div)
  ReactDOM.unmountComponentAtNode(div)
})




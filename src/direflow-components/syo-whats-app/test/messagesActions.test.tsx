import * as actions from '../store/ducks/messages/actions'
import { MessagesTypes, Message } from '../store/ducks/messages/types'

describe('actions', () => {
  it('should create an action to recieve message', () => {
    const message: Message = {
      from: '+5551998406095',
      to: '+5551998406095',
      message: {
        text: 'hello',
        type: 'TEXT'
      },
      integrationType: 'WHATSAPP',
      messageId: 'asdasdasds',
      sentAt: new Date().toISOString(),
    }
    const expectedAction = {
      type: MessagesTypes.RECIEVE_MESSAGE,
      payload: { data: message },
    }
    expect(actions.recieveMessage(message)).toEqual(expectedAction)
  })
})

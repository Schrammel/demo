import React from 'react'

import MessageBox from '../MessageBox'
import { Message } from '../../store/ducks/messages/types'
import DateBox from '../DateBox'

export type Props = {
  mapMessage: MapMessages
};

type MapMessages = {
  date: string
  messages: Message[]
};

const MessageDateBox = (props: Props) => {
  return (
    <React.Fragment>
      <DateBox message={props.mapMessage.date} />
      {props.mapMessage.messages.map((m) => <MessageBox key={m.messageId} message={m} />)}
    </React.Fragment>
  )
}

export default MessageDateBox
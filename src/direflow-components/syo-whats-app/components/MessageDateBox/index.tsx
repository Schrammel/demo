import MessageDateBox, { Props } from './MessageDateBox'
import { Message } from '../../store/ducks/messages/types'

export type MessageDateBoxProps = Props;
export default MessageDateBox

type MapMessages = {
  date: string
  messages: Message[]
};

export const reduceMessages = (messages: Message[]) => {
  const initialValue: MapMessages[] = []
  return messages
    .sort((b, a) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime())
    .reduce(agroupMessages, initialValue)
}

const agroupMessages = (accumulator: MapMessages[], currentValue: Message) => {
  const date = new Date(currentValue.sentAt).toLocaleDateString()
  const mapMessages = accumulator.find(map => map.date === date)
  if (mapMessages) {
    mapMessages.messages.push(currentValue)
  } else {
    accumulator.push({ date, messages: [currentValue] })
  }
  return accumulator
}
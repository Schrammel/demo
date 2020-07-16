import React from 'react'
import ReactDOM from 'react-dom'

import DateBox from '../components/DateBox'
import { DateBoxProps } from '../components/DateBox'

const props: DateBoxProps = {
  message: 'hello'
}

it('render MessageOptions without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateBox {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})



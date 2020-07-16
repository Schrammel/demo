import React from 'react'
import ReactDOM from 'react-dom'

import BlockBottomBar, { Props } from '../components/BottomBar/BlockBottomBar'

const props: Props = {
  open: true
}

it('render BlockBottomBar without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BlockBottomBar {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})


it('render BlockBottomBar without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BlockBottomBar open={false} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

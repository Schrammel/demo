import React from 'react'
import ReactDOM from 'react-dom'

import BottomBar from '../components/BottomBar/'
import store from '../store'
import { Provider } from 'react-redux'

it('render BottomBar without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store} >
    <BottomBar />
  </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})


import React from 'react'
import ReactDOM from 'react-dom'
import Time from '../components/Time'

const timeProps = { date: new Date(1591898110000) }
it('render Time without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Time {...timeProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

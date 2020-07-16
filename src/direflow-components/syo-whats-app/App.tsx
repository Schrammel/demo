import React, { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'

import Header from './components/HeaderBar'
import MessageContainer from './components/MessageContainer'
import Bottom from './components/BottomBar'
import store from './store'
import * as sessionActions from './store/ducks/session/actions'
import { setRootDom } from './store/ducks/dom/actions'
import { theme, useStyles } from './theme'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { connectWS } from './store/ducks/websocket/actions'
import { IProps, ActionsProps } from './types'

export const actions = { ...sessionActions, connectWS, setRootDom }
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch)

const App = connect(null, mapDispatchToProps)(({
  to, from, room, websocket,
  setTo, setFrom, setRoom, setWebsocket,
  connectWS, setRootDom
}: IProps & ActionsProps) => {

  setFrom(from)
  setTo(to)
  setWebsocket(websocket)
  setRoom(room)
  const classes = useStyles()
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("Inserindo uma nova variavel", root)
    if (root.current) {
      setRootDom(root.current)
    }
  }, [root])

  useEffect(() => {
    if (!websocket || websocket.startsWith('{{')) {
      console.warn('websocket is invalid')
      return
    }
    if (!room || room.startsWith('{{')) {
      console.warn('room is invalid')
      return
    }
    connectWS()
  }, [websocket, room, connectWS])

  return <ThemeProvider theme={theme}>
    <div style={{ height: '100%', overflowY: 'hidden' }}>
      <div className={classes.wrapper}>
        <Header number={to} />
        <MessageContainer />
        <Bottom />
      </div>
      <div ref={root}></div>
    </div>
  </ThemeProvider>
})

const Root = (props: IProps) => {
  return <Provider store={store} >
    <App {...props}></App>
  </Provider>
}

Root.defaultProps = {
  componentTitle: 'Syo Whats App',
  from: 'from',
  to: 'to',
  room: 'sala01',
  websocket: 'http://201.76.115.96:3002'
}

export default Root

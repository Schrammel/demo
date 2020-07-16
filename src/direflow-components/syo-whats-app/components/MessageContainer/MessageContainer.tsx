import React, { useEffect, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import { Message } from '../../store/ducks/messages/types'
import MessageDateBox, { reduceMessages } from '../MessageDateBox'
import { Grid, CircularProgress, Slide } from '@material-ui/core'
import { WebSocketState } from '../../store/ducks/websocket/types'

export const containerStyles = makeStyles((theme: Theme) => {
  return createStyles({
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    content: {
      overflowX: 'hidden',
      width: '100%',
    },
    messageContainer: {
      position: 'relative',
      padding: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    container: {
      position: 'relative',
      width: '100%',
      minHeight: '200px',
    },
    bottonRight: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '0px',
      height: '0px',
    },
    messagesContent: {
      float: 'left',
      height: '100%',
      width: '100%',
      overflowY: 'scroll',
    },
    circularProgress: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      color: 'green',
    }
  })
})

interface StateProps { messages: Message[]; websocket: WebSocketState }
export type Props = StateProps;

const MessageContainer = (props: Props) => {
  const { messages } = props
  const classes = containerStyles()
  const [bottom, setBottom] = useState<HTMLDivElement | null>()
  const [showDownButton, setShowDownButton] = useState(false)
  const renderMesseges = reduceMessages(messages)
    .map(m => <MessageDateBox key={m.date} mapMessage={m} />)

  const toogleShowButton = (e: React.UIEvent<HTMLDivElement>) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.currentTarget
    const result = offsetHeight + scrollTop - scrollHeight
    //descontando uma margem
    setShowDownButton(result <= -16)
  }

  const scrollToBottom = () => bottom?.scrollIntoView({ behavior: 'smooth' })

  useEffect(scrollToBottom, [messages])

  return (
    <div className={classes.container} >

      <div className={classes.messagesContent} onScroll={toogleShowButton}>
        <Grid container className={classes.content} >
          <Grid item xs={12}>
            <Grid style={{ margin: '0' }} className={classes.messageContainer} container spacing={2}>
              {renderMesseges}
              <div ref={setBottom}></div>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.bottonRight}>
        <Zoom in={showDownButton} >
          <div onClick={scrollToBottom} role="presentation" className={classes.arrowDown}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowDownIcon />
            </Fab>
          </div>
        </Zoom>
      </div>

      <Slide timeout={600} direction="up" in={props.websocket.connecting} mountOnEnter unmountOnExit>
        <Grid container justify="center" className={classes.bottonRight}>
          <Grid item>
            <CircularProgress onClick={scrollToBottom} className={classes.circularProgress} title="Conectando..." />
          </Grid>
        </Grid>
      </Slide>

    </div>
  )
}

export default MessageContainer

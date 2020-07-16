import React, { Fragment, useState } from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { Paper, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import Time from '../Time'
import MessageOptions from '../MessageOptions'
import { Message, MessagesState } from '../../store/ducks/messages/types'
import { SessionState } from '../../store/ducks/session/types'
import MessageOfResponse from '../MessageResponseBox/MessageResponseBox'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    response: {
      marginBottom: theme.spacing(1),
    },
    text: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(7),
    },
    box: {
      position: 'relative',
      borderRadius: theme.spacing(1),
      padding: '4px'
    },
    in: {
      marginRight: theme.spacing(4),
      backgroundColor: '#fff'
    },
    out: {
      marginLeft: theme.spacing(4),
      backgroundColor: '#dcf8c6'
    },
    icon: {
      position: 'absolute',
      bottom: '4px',
      right: theme.spacing(1),
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.45)',
    },
    options: {
      background: 'linear-gradient(90deg,rgba(var(--outgoing-background-rgb),0) 0,rgba(var(--outgoing-background-rgb),1) 50%)',
      fontSize: '13px',
      cursor: 'pointer',
      position: 'absolute',
      top: '0px',
      right: '0px'
    },
    timeLeft: {
      position: 'absolute',
      bottom: '4px',
      right: theme.spacing(1)
    },
    timeRight: {
      position: 'absolute',
      bottom: '4px',
      right: theme.spacing(3)
    }
  })
})

export type OwnProps = { message: Message }
type StateProps = { session: SessionState; messages: MessagesState }
export type Props = StateProps & OwnProps

const MessageBox = (props: Props) => {
  const { message } = props
  const { from } = props.session
  const classes = useStyles(props)
  const [showOptions, setShowOptions] = useState(false)
  const myMessege = message.from === from
  const justify = myMessege ? 'flex-end' : 'flex-start'
  const color = myMessege ? classes.out : classes.in
  const time = new Date(message.sentAt)
  const text = message?.message?.text.split('\n').map((item, key) => {
    return <Fragment key={key}>{item}<br /></Fragment>
  })

  const replyMessege = props.messages.data.find(m => m.messageId === message.message?.context?.id)

  return <Grid item xs={12}>
    <Grid container justify={justify}>
      <Grid item>
        <Paper className={[classes.box, color].join(' ')} title={JSON.stringify(message, null, '\t')} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
          <MessageOptions className={classes.options} show={showOptions} color={color} message={message} />
          <Time className={myMessege ? classes.timeRight : classes.timeLeft} date={time} />

          {myMessege && message.doneAt && <DoneAllIcon className={classes.icon} fontSize="small" />}
          {myMessege && !message.doneAt && <AccessTimeIcon className={classes.icon} fontSize="small" />}
          {replyMessege && <MessageOfResponse session={props.session} responseMessage={replyMessege} className={classes.response} />}

          <Typography className={classes.text}>{text}</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
}

export default MessageBox

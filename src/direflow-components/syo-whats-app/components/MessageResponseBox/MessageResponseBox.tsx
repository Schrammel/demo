import React from 'react'
import { makeStyles, createStyles, Typography } from '@material-ui/core'

import { Message } from '../../store/ducks/messages/types'
import { SessionState } from '../../store/ducks/session/types'

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    flex: {
      display: 'flex'
    },
    /* Flex Item */
    item: {
      heigth: '100%',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.05)',
      fontSize: '1.5em',
      padding: '5px 10px 10px',
      borderTopRightRadius: '7.5px',
      borderBottomRightRadius: '7.5px',
    },
    /* Flex Item */
    item2: {
      borderTopLeftRadius: '7.5px',
      borderBottomLeftRadius: '7.5px',
      heigth: '100%',
      width: '5px',
      background: '#6bcbef',
      textAlign: 'center',
      fontSize: '1.5em',
    }
  })
})

type StateProps = {
  responseMessage: Message | undefined
  session: SessionState
}

type OwnProps = {
  responseMessage: Message | undefined
  className?: string
}

export type Props = StateProps & OwnProps;

export default function MessageOfResponse({ className, responseMessage, session }: Props) {
  const { from } = session
  const name = responseMessage?.from === from ? 'Você' : responseMessage?.from ?? 'Desconhecido'
  const message = responseMessage?.message.text || 'mensagem nao encontrada'
  const classes = useStyles()
  return <section className={[classes.root, className, classes.flex].join(' ')}>
    <div className={classes.item2}></div>
    <div className={classes.item}>
      <Typography style={{ color: '#6bcbef' }} variant="body2" >{name}</Typography>
      <Typography style={{ color: 'rgba(0, 0, 0, 0.6)' }} variant="body2" >{message}</Typography>
    </div>
  </section>
}
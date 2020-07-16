import React from 'react'
import { Slide, AppBar, Toolbar, makeStyles, Theme, createStyles, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import MessageOfResponse from '../MessageResponseBox'
import { Message } from '../../store/ducks/messages/types'
import { setReplyMessage } from '../../store/ducks/messages/actions'

export type StateProps = { responseMessage: Message | undefined }
export const actions = { setReplyMessage }
export type Props = StateProps & typeof actions;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    message: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
})

export default function ResponseBottomBar({ responseMessage, setReplyMessage }: Props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Slide direction="up" in={!!responseMessage} timeout={0} unmountOnExit mountOnEnter>
        <div>
          <AppBar elevation={0} position="sticky" color="primary" >
            <Toolbar>
              {responseMessage && <React.Fragment>
                <MessageOfResponse className={classes.message} />
                <IconButton
                  onClick={() => { setReplyMessage() }}
                  color="inherit">
                  <CloseIcon />
                </IconButton>
              </React.Fragment>}
            </Toolbar>
          </AppBar>
        </div>
      </Slide>
    </React.Fragment >
  )
}
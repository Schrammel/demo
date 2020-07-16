import React, { useState, SyntheticEvent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MicIcon from '@material-ui/icons/Mic'
import InputBase from '@material-ui/core/InputBase'
import SendIcon from '@material-ui/icons/Send'
import { createStyles, Theme, makeStyles, fade } from '@material-ui/core/styles'

import { sendMessageText } from '../../store/ducks/messages/actions'
import { setInputBottom } from '../../store/ducks/dom/actions'
import { Emoji, EmojiItens, EmojiButton } from '../../hooks/EmojiContext'
import BlockBottomBar from './BlockBottomBar'
import { SessionState } from '../../store/ducks/session/types'
import ResponseBottomBar from '../ResponseBottomBar'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.spacing(3),
      backgroundColor: fade(theme.palette.common.white, 0.95),
      margin: theme.spacing(1),
      width: '100%',
    },
    icon: {
      margin: theme.spacing(1),
      cursor: 'pointer'
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'auto',
      maxHeight: theme.spacing(40)
    },
    inputRoot: {
      color: 'inherit',
    },
    input: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
    },
  })
})

export const actions = { sendMessageText, setInputBottom }
type ActionsProps = typeof actions;
type StateProps = { session: SessionState }
export type Props = ActionsProps & StateProps;

export default function BottomBar(props: Props) {
  const { sendMessageText } = props
  const classes = useStyles()
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const isBlocked = props.session.blocked
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)

  const toggleOpen = (value = !open) => {
    setOpen(value)
  }

  const sendMessage = () => {
    if (text.trim() === '') {
      return
    }
    sendMessageText(text)
    toggleOpen(false)
    setText('')
  }

  const onKeyUpEvent = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      sendMessage()
      ev.preventDefault()
    }
  }
  const onSelect = (event: SyntheticEvent) => {
    const target = event.target
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
      setSelectionStart(target.selectionStart || 0)
      setSelectionEnd(target.selectionEnd || 0)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(event)
    setText(event.target.value)
  }

  const putEmojii = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const newText = event.currentTarget.innerText
    setText(text.substr(0, selectionStart) + newText + text.substr(selectionEnd, text.length))
    setSelectionStart(selectionStart + newText.length)
    setSelectionEnd(selectionStart + newText.length)
  }

  return (
    <React.Fragment>
      <BlockBottomBar open={isBlocked} />
      <AppBar elevation={0} position="sticky" color="primary" >
        <Emoji onClick={putEmojii} toggleOpen={toggleOpen} open={open}>
          <EmojiItens />
          <ResponseBottomBar />
          <Toolbar>
            <EmojiButton disabled={isBlocked} />
            <div className={classes.search}>
              <InputBase
                placeholder="Digite uma mensagem"
                fullWidth
                value={text}
                onClick={onSelect}
                disabled={isBlocked}
                onKeyDown={onSelect}
                onChange={handleChange}
                inputRef={props.setInputBottom}
                multiline
                classes={{
                  root: classes.inputRoot,
                  input: classes.input,
                }}
                onKeyPress={onKeyUpEvent}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {!text && <IconButton
              color="inherit"
              disabled={isBlocked}>
              <MicIcon />
            </IconButton>}

            {!!text && <IconButton
              color="inherit"
              disabled={isBlocked}
              onClick={sendMessage}>
              <SendIcon />
            </IconButton>}
          </Toolbar>
        </Emoji>
      </AppBar>
    </React.Fragment>
  )
}
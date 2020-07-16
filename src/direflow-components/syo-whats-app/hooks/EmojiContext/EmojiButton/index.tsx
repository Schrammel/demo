import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'
import Close from '@material-ui/icons/Close'

import { useEmoji } from '..'

export function EmojiButton({ disabled = false }: { disabled: boolean }) {
  const { open, toggleOpen } = useEmoji()
  const isMobile = typeof window.orientation !== 'undefined'
  return <div>
    {!isMobile && <IconButton color="inherit" onClick={() => toggleOpen()} disabled={disabled} onMouseDown={e => e.preventDefault()}>
      {!open && <SentimentVerySatisfiedIcon />}
      {open && <Close />}
    </IconButton>}
  </div>
}

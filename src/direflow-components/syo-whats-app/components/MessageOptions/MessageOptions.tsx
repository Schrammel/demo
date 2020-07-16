import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { setReplyMessage } from '../../store/ducks/messages/actions'
import { Message } from '../../store/ducks/messages/types'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    item: {
      fontSize: '14.5px',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    notHover: { opacity: 0 },
  })
})

type OwnProps = {
  className?: string
  show: boolean
  color: string
  message: Message
}

export const actions = { setReplyMessage }
type Actions = typeof actions;
export type Props = OwnProps & Actions;

export default function MessageOptions(prop: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [container, setContainer] = React.useState<HTMLDivElement | null>()
  const classes = useStyles()
  const style = prop.show ? '' : classes.notHover

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const reply = () => {
    prop.setReplyMessage(prop.message)
    setAnchorEl(null)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={[prop.className, style].join(' ')}>
      <span onClick={handleClick}>
        <KeyboardArrowDownIcon />
      </span>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        container={container}
      >
        <MenuItem className={classes.item} onClick={reply}>Responder</MenuItem>
        <MenuItem disabled className={classes.item} onClick={handleClose}>Encaminhar mensagem</MenuItem>
        <MenuItem disabled className={classes.item} onClick={handleClose}>Favoritar mensagem</MenuItem>
        <MenuItem disabled className={classes.item} onClick={handleClose}>Apagar mensagem</MenuItem>
      </Menu>
      <div ref={setContainer}></div>
    </div >
  )
}

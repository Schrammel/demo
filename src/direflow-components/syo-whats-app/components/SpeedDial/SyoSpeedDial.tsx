import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Fab from '@material-ui/core/Fab/Fab'
import Avatar from '@material-ui/core/Avatar/Avatar'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import Zoom from '@material-ui/core/Zoom/Zoom'
import PhotoIcon from '../../image/PhotoIcon.svg'
import ImageModal from './'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      paddingRight: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    icon: {
      position: 'absolute',
      right: theme.spacing(0),
    },
    icon1: {
      top: theme.spacing(8)
    },
    icon2: {
      top: theme.spacing(18)
    },
    icon3: {
      top: theme.spacing(28)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
)

export default function OpenIconSpeedDial() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>

      <IconButton edge="start" onClick={handleOpen} color="inherit" aria-label="menu">
        <AttachFileIcon />
      </IconButton>

      <ImageModal in={open} className={[classes.icon, classes.icon1].join(' ')} />

      <Zoom in={open} timeout={600}>
        <Fab className={[classes.icon, classes.icon2].join(' ')}>
          <Avatar className={[classes.large].join(' ')} >
            <PhotoIcon />
          </Avatar>
        </Fab>
      </Zoom>

      <Zoom in={open} timeout={500}>
        <Fab className={[classes.icon, classes.icon3].join(' ')}>
          <label style={{ height: '24px' }} htmlFor="icon-button-file">
            <InsertDriveFileIcon />
          </label>
        </Fab>
      </Zoom>
    </div >
  )
}

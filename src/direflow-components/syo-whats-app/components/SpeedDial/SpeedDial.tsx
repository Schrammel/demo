import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import SaveIcon from '@material-ui/icons/Save'
import PrintIcon from '@material-ui/icons/Print'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      border: '1px solid black'
    },
    speedDial: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2)
    }
  })
)

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' }
]

export default function OpenIconSpeedDial() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="down"
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

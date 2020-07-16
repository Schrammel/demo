import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import OpenIconSpeedDial from '../SpeedDial/SyoSpeedDial'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    bar: {
      borderBottom: 'solid 1px #c8c8c8',
    },
  }),
)
export type Props = { number: string }
export default function HeaderBar(props: Props) {
  const classes = useStyles()
  const person = ''
  return (
    <div>
      <AppBar elevation={0} className={classes.bar} position="sticky" >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Avatar alt="Profile Picture" src={person} />
          </IconButton>
          <Typography variant="h6" color="secondary" className={classes.title}>
            {props.number}
          </Typography>
          <OpenIconSpeedDial></OpenIconSpeedDial>
        </Toolbar>
      </AppBar>
    </div>
  )
}

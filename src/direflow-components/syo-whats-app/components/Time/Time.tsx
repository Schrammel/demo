import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => {
  return createStyles({
    time: {
      marginTop: 'auto',
      fontSize: '10px',
      color: 'rgba(0, 0, 0, 0.45)',
      paddingLeft: '1em',
    },
  })
})

export type Props = { date: Date; className: string }
const Time = (props: Props) => {
  const time = props.date.toLocaleTimeString().substring(0, 5)
  const classes = useStyles(props)
  return <Typography className={[props.className, classes.time].join(' ')} >{time}</Typography>
}

export default Time

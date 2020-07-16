import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Paper, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    box: {
      backgroundColor: 'rgba(225, 245, 254, 0.92)',
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
  })
})

export type Props = { message: string }

const DateBox = (props: Props) => {
  const classes = useStyles(props)
  const { message } = props
  const today = new Date()
  const date = message === today.toLocaleDateString() ? 'HOJE' : message

  return <Grid item xs={12}>
    <Grid container justify="center">
      <Grid item>
        <Paper className={classes.box}>
          <Typography style={{ fontSize: '12.5px' }}>{date}</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
}

export default DateBox

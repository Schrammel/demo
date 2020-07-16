import { createMuiTheme, makeStyles, createStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ededed',
      contrastText: '#919191',
    },
    secondary: grey,
  },
})

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '1fr',
      backgroundColor: '#e5ddd5',
    },
    messageTile: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      opacity: '0.06',
    },
    content: {
      overflowX: 'hidden',
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em',
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey',
      },
    },
  }),
)
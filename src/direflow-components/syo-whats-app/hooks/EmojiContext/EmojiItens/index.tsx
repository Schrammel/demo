import React, { useState } from 'react'
import { fade, Grid, Theme, makeStyles, createStyles, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, AppBar, InputBase } from '@material-ui/core'
import { useEmoji } from '..'
import { groups } from './emojis'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    icon: {
      margin: theme.spacing(1),
      cursor: 'pointer'
    },
    root: {
      overflow: 'auto',
      maxHeight: theme.spacing(40)
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.10),
      marginRight: theme.spacing(2),
      width: '100%',
    }, inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%'
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    aroot: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }
  })
})

interface Props {
  window?: Node
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window })
  return (
    <Slide appear={false} direction="down" timeout={650} in={!trigger}>
      {children}
    </Slide>
  )
}

type Emoji = {
  code: number
  description?: string
}

type subgroups = {
  subgroup: string
  itens: Emoji[]
}

const reduceFunction = (value: Emoji[], current: subgroups) => {
  value.push(...current.itens)
  return value
}

export function EmojiItens() {
  const { open, onClick } = useEmoji()
  const [searchEmoji, setSearchEmoji] = useState('')
  if (!open && searchEmoji !== '') {
    setSearchEmoji('')
  }
  const classes = useStyles()
  const [scrollTarget, setScrollTarget] = useState<Node>()

  const handleSearchEmoji = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEmoji(event.target.value)
  }

  return <React.Fragment>
    {open &&
      <div ref={node => node ? setScrollTarget(node) : setScrollTarget(undefined)} className={classes.root}>
        <CssBaseline />
        <HideOnScroll window={scrollTarget}>
          <AppBar elevation={1} position="sticky">
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Pesquisar Emojis"
                  fullWidth
                  onChange={handleSearchEmoji}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <div className={classes.aroot}>
          {groups.map(group => <React.Fragment key={group.id}>
            <Grid style={{ marginTop: '20px' }} item xs={12}>
              <Typography >{group.id}</Typography>
            </Grid>
            {group.subgroups.reduce(reduceFunction, []).filter(e => !searchEmoji || e?.description?.includes(searchEmoji)).map((tile) => (
              <Grid item key={tile.code}>
                <h2 onClick={onClick} title={tile.description} className={classes.icon} >{String.fromCodePoint(tile.code)}</h2>
              </Grid>
            ))}
          </React.Fragment>)}
        </div>
      </div>
    }
  </React.Fragment >
}

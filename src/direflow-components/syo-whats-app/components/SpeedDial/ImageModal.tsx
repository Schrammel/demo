import React, { useRef, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '../../image/ImageIcon.svg'
import Zoom from '@material-ui/core/Zoom/Zoom';
import Fab from '@material-ui/core/Fab/Fab';
import Avatar from '@material-ui/core/Avatar/Avatar';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import { IconButton, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    input: {
      display: 'none',
    },
  })
);

type OwnProps = {
  in: boolean
  className: string
  root?: HTMLDivElement
}

export default function ImageModal({ in: zoom, className, root }: OwnProps) {

  const classes = useStyles();
  const domRef = React.useRef<HTMLDivElement>(null);
  console.log(domRef, root)
  const imgRef = React.useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = useState('');

  const handleClose = () => {
    setOpen(!open);
  };

  const loadFile = () => {
    inputRef.current?.click();
  }
  useEffect(() => {
    console.log(imgRef);
  }, [imgRef.current])

  const changeImage = (event: any) => {
    handleClose();
    const input = event.target;
    console.log(input.files)
    if (input.files && input.files[0]) {
      setSrc(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <div ref={domRef}>
      <Zoom in={zoom} timeout={400}>
        <Fab color="inherit" onClick={loadFile} className={className} title="Fotos e vídeos">
          <Avatar className={[classes.large].join(' ')} >
            <ImageIcon />
          </Avatar>
        </Fab>
      </Zoom>

      <input
        ref={inputRef}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        onChange={changeImage}
        type="file"
      />

      <Dialog fullScreen open={open} onClose={handleClose} container={root} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <img ref={imgRef} src={src} alt="your image" />
          <DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </div>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
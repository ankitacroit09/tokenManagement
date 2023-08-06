import React from 'react'
import { Button, makeStyles, Typography, Popover } from '@material-ui/core'

const useStyle = makeStyles(() => ({
  root: {
    display: 'contents',
    justifyContent: 'normal',
    flexWrap: 'wrap'
  },
  ready: {
    width:300,
    height:100,
    margin:5,
    fontSize: 27,
    backgroundColor:'#03AA6D'
  },
  tokenNumber: {
    width:300,
    height:100,
    margin:5,
    fontSize: 27,
    backgroundColor:'red'
  },
  desc: {
    fontSize: 20,
    width:'200%',
    height:'10%',
  },

}))

export const Token = (props) => {
  const { tokenNumber, text , status } = props;
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <Button  className={status == "complete" ? classes.ready: classes.tokenNumber} aria-describedby={id} variant="contained" onClick={handleClick}>
        {tokenNumber}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          width:300,
          height:100,
          horizontal: 'left',
        }}
      >
        <Typography  className={classes.desc} sx={{ p: 2 }}>{text}</Typography>
      </Popover>
    </div>
  );
}

export default  Token;
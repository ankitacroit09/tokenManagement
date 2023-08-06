import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
 import { Box} from '@material-ui/core'
 import { Grid, InputLabel, makeStyles, Paper, AppBar, TextField } from '@material-ui/core'
import { setTokenList } from '../../../redux-toolkit/slice/app'
import Token from '../../Controls/Token/index'

const useStyle = makeStyles(() => ({
  ready: {
    width:'100%' ,
    height:80,
    fontSize: 27,
    backgroundColor:'#FFFFFF'
  },
  label:{
    textAlign: 'center',
    color: 'black',
    fontSize:'larger'
  },
  list:{
    height:300
  },
  labelPREPARING:{ 
    color: 'black',
    fontSize:'larger'
  }

}))
const DisplayDashboard = () => {
  const classes = useStyle();
  //const tokenListRedux = useSelector((state) => state.app.tokenList)
  const tokenListRedux = [
    {
        "tokenNumber": 1,
        "status": "incomplete",
        "description": "Sweet corn, Water"
    },
    {
        "tokenNumber": 44,
        "status": "complete",
        "description": "Chilli garliyo with milk, Water"
    },
    {
      "tokenNumber": 21,
      "status": "complete",
      "description": "Sweet corn, Water"
  },
  {
    "tokenNumber":51,
    "status": "complete",
    "description": "Sweet corn, Water"
},
{
  "tokenNumber": 1,
  "status": "complete",
  "description": "Sweet corn, Water"
},
    {
        "tokenNumber": 2,
        "status": "incomplete",
        "description": "one coffee, one tea with milk, Water"
    },
    {
        "tokenNumber": 3,
        "status": "incomplete",
        "description": "coffee with milk, Water"
    }
]
  return (
    <>
    <Box  className={classes.ready} sx={{  }}>  <label className={classes.label} >READY</label> </Box>
    <div className={classes.list}>
      {tokenListRedux.map((token) => (
          token.status !== 'incomplete'  && <Token tokenNumber={token.tokenNumber} text={token.description} status={token.status} />
      ))}
    </div>
    <Box  className={classes.ready} sx={{  }}> <label className={classes.labelPREPARING} > PREPARING </label></Box>
    <div className={classes.list}>
      {tokenListRedux.map((token) => (
          token.status !== 'complete'  && <Token tokenNumber={token.tokenNumber} text={token.description} status={token.status} />
      ))}
    </div>
</>
  )
}

export default DisplayDashboard;

import React,{useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Paper,Box, Grid} from '@material-ui/core';
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';
import {expenseContext} from '../Contextwrap/Context'
import Right from './Right'
import Left from './Left'
function Wrapper(props) {
    const useStyles = makeStyles((theme)=>({
       
        wrapper:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh",
    backgroundColor:"#929693"
    
        },
        paper:{
            padding:"30px",
            minHeight:"500px",
            width:"1000px",
            borderRadius:"10px",
            position:"relative",
            margin:"50px 0",
            [theme.breakpoints.down('sm')]:{
                width:"85%"
            },
            [theme.breakpoints.down('xs')]:{
                width:"80%",
                padding:"20px",
                
            },
            
        },
        customisedButton:{
            position:"absolute",
           top:"15px",
           right:"15px",
           padding:"1px",
           backgroundColor:"transparent",
           cursor:"pointer"
        },
        leftWrap:{
           
            height:"450px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        rightWrap:{
            marginTop:"50px",
            minHeight:"400px",
            [theme.breakpoints.down('sm')]:{
                marginTop:"0"
            }
        }
    }));
    const classes = useStyles();

    const {dark,toggletheme} =useContext(expenseContext);

    return (

        <Box className={classes.wrapper}>
    <Paper elevation={8} className={classes.paper} >
 
  <Brightness6OutlinedIcon onClick={toggletheme} className={classes.customisedButton}/>
<Grid container spacing={5}>
{/* the outer one */}

<Grid item md={5} xs={12} className={classes.leftWrap}>
    {/* The left one */}
    <Left/>
    
   
</Grid>
<Grid item md={7} xs={12} className={classes.rightWrap}>
     {/* The right one */}
    <Right/>
</Grid>
</Grid>
    </Paper>
   
        </Box>
           
       
    )
}

export default Wrapper

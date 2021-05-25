import React,{useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
import {expenseContext}  from '../Contextwrap/Context'
const useStyles = makeStyles((theme)=>({
    tracker:{
        height:"200px",
        width:"200px"
    },
    title:{
       
        height:"50px",
   
       
        position:"relative",
        top:"-40px",
        color:"#f44336",
        fontWeight:"500"
    },
    balanceWrap:{
        textAlign:"center",
        marginBottom:"30px",
        marginTop:"20px"
    },
    tracker:{
        marginTop:"55px",
        textAlign:"center"
    },
    money:{
        marginTop:"20px",
        
    }
}));
function Left() {
let {balance,income,expense} = useContext(expenseContext);
    const classes = useStyles();

    return (
        <div className={classes.left}>
            <div className={classes.title}>
                <Typography variant="h4">
EXPENSE-TRACKER
                </Typography>

            </div>
            <div className={classes.balanceWrap}>
<Typography variant="h5">Your Balance</Typography>
<Typography variant="h5" style={{paddingTop:"10px"}} color={income<expense?"secondary":"primary"}>${balance}</Typography>
            </div>
            <div className={classes.tracker}>
<Grid container>
    <Grid item xs>
<Typography color="primary">Income</Typography>
<Typography className={classes.money} color="primary">
${income}
</Typography>
    </Grid>
    <Grid item xs>
    <Typography color="secondary">Expenses</Typography>
<Typography className={classes.money} color="secondary">
${expense}
</Typography>
    </Grid>
</Grid>
            </div>
    </div>
    )
}

export default Left

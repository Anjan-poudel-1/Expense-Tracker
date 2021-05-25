import React from 'react'

import { Grid } from '@material-ui/core';
import Transaction from './Transaction';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
    income:{
       
    },
    expense:{
    
    },
    gridcontainer:{
        marginTop:"15px",
        [theme.breakpoints.down('md')]:{
            
                marginTop:"0",
                
            
        },
        display:"flex",
        justifyContent:"center"
    },
    
}));
function Right() {

    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <Grid container spacing={3} className={classes.gridcontainer}>
                <Grid item sm={6} xs={12} className={classes.income}>
<Transaction income="true"/>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.expense}>
<Transaction expense="true"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Right

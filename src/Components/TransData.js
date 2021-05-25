import React,{useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {expenseContext} from '../Contextwrap/Context'
function TransData(props) {

    

    const useStyles = makeStyles((theme)=>({
       
        dataWrap:{
            backgroundColor:props.income?theme.palette.primary.main:theme.palette.secondary.main,
            padding:"2px 10px",
            minWidth:"180px",
           marginBottom:"15px",
          display:"flex",
          justifyContent:"space-between"
          
        },
        font:{
            color:"white"
        }
        
        }));
    const classes = useStyles();
    let {delete_expense,delete_income} = useContext(expenseContext);
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            {console.log(props.transactions)}
            {
                props.transactions?
                props.transactions.map(a=>{
                    console.log(a)
                    return(<div style={{display:"flex",flexDirection:"row"}}> 
                    <Paper className={classes.dataWrap} elevation={2} >
                          <Typography variant="subtitle2" color="textPrimary" className={classes.font}> {a.text}  </Typography>
                          <Typography variant="subtitle2" className={classes.font}> ${a.value}  </Typography>
                    </Paper>
                    <DeleteRoundedIcon style={{color:"red",cursor:"pointer",marginLeft:"5px"}} onClick={props.income?()=>delete_income(a):()=>delete_expense(a)}/>
                            </div>)
                })

 

                :
                null}
            
        
         
      </div>
    )
}

export default TransData

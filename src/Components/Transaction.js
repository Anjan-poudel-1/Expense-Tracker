import React,{useState,useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Button ,Typography} from '@material-ui/core';
import {expenseContext} from '../Contextwrap/Context'
import TransData from './TransData'
import {v4 as uuidv4} from 'uuid'
function Transaction(props) {
   
    const useStyles = makeStyles((theme)=>({
        wrap:{
            paddingLeft:"40px"
        },
        inputfield:{
        borderColor:"white ",
        backgroundColor:"transparent",
        border:"none",
        borderBottom:`1px solid ${props.income?theme.palette.primary.main:theme.palette.secondary.main}`,
        outline:"none",
        color:props.income?theme.palette.primary.main:theme.palette.secondary.main,
        "&::placeholder":{
            color:props.income?theme.palette.primary.main:theme.palette.secondary.main
        },
        marginBottom:"30px",
        display:"block"
        },
        button:{
            padding:"2px 15px",
            color:"#fff",
            fontSize:"14px",
            display:"block"
        },
        title:{
            margin:"20px 0"
        },
        transactionsWrap:{
           
        }
        

       
        }));
    const classes = useStyles();
    const [incometext,setIncometext] = useState('');
    const [incomevalue,setIncomevalue] = useState();
    const [expensetext,setExpensetext] = useState('');
    const [expensevalue,setExpensevalue] = useState();

    let {add_income,add_expense,expenseTransactions,incomeTransactions} = useContext(expenseContext);
   console.log(incomeTransactions);
    return (
        <div className={classes.wrap}>
            
            <form >
           
      <input type="text" placeholder={props.income?"Income":"Expense"} className={classes.inputfield}  value={props.income?incometext:expensetext}
       onChange={props.income?
       (event)=>setIncometext(event.target.value):
       (event)=>setExpensetext(event.target.value)}>
      </input>
     
      <input type="number" placeholder="Value" className={classes.inputfield} value={props.income?incomevalue:expensevalue}
      onChange={props.income?
      (event)=>setIncomevalue(event.target.value):
      (event)=>setExpensevalue(event.target.value)}>
      </input>
        
           <Button  disabled={props.income?(incometext && incomevalue?false:true):(expensetext && expensevalue?false:true)} color={props.income?"primary":"secondary"} variant="contained" className={classes.button} 
           onClick={props.income?
            ()=>{ add_income({id:uuidv4() ,text:incometext,value:parseInt(incomevalue),income:true});
            setIncomevalue(0);
            setIncometext('');

        }
           
        :
        ()=>{add_expense({id:uuidv4(),text:expensetext,value:parseInt(expensevalue),income:false})
        setExpensevalue(0);
        setExpensetext('');
    }
        }>
               Submit
           </Button>
            
            </form>
            <div className={classes.transactionsWrap}>
                <Typography className={classes.title}>Transactions</Typography>
<div className={classes.transactions}>
<TransData income={props.income} transactions={props.income?incomeTransactions:expenseTransactions}/>
</div>
            </div>
           
        </div>
    )
}

export default Transaction

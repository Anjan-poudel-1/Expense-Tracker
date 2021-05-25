import React,{useContext,createContext,useReducer} from 'react'
import {expenseReducer} from './Expensereducer'
export const expenseContext = createContext();
export const useExpense = ()=>{
    useContext(expenseContext);
}



export const ExpenseProvider = (props)=>{

   
    let initialState = {
         dark:true,
         income:0,
         balance:0,
         expense:0,
         incomeTransactions:[],
         expenseTransactions:[]
    }

    


    const [state,dispatch] = useReducer(expenseReducer,initialState);

    const toggletheme = ()=>{
        
        dispatch({type:'TOGGLE_THEME',data:state.dark});

    }
    const add_income=(data)=>{
console.log(data);
console.log("income is added");
dispatch({type:'INCOME_SUBMITTED',data:data});
dispatch({type:'CALCULATE_IN_OUT',data:data});
dispatch({type:'CALCULATE_BALANCE',data:data});
    }
    const add_expense=(data)=>{
        console.log(data);
        console.log("expense is added");
        dispatch({type:'EXPENSE_SUBMITTED',data:data});
        dispatch({type:'CALCULATE_IN_OUT',data:data});
        dispatch({type:'CALCULATE_BALANCE',data:data});
            }
        
        const delete_income = (data)=>{
            
          let newarr= state.incomeTransactions.filter(a=>{
              console.log("runninggg filter")
            console.log( data.id!==a.id)  
           return data.id!==a.id
            });
          console.log(data);
          console.log("data affter delete");
          console.log(newarr);  

          dispatch({type:'CALCULATE_DELETE_IN_OUT',data:data});
          dispatch({type:'CALCULATE_BALANCE',data:data});


dispatch({type:'INCOME_DELETED',data:newarr});

        }


        const delete_expense = (data)=>{
            
            let newarr= state.expenseTransactions.filter(a=>{
                console.log("runninggg filter")
              console.log( data.id!==a.id)  
             return data.id!==a.id
              });
            console.log(data);
            console.log("data affter delete");
            console.log(newarr);  
  
            dispatch({type:'CALCULATE_DELETE_IN_OUT',data:data});
            dispatch({type:'CALCULATE_BALANCE',data:data});
  
  
  dispatch({type:'EXPENSE_DELETED',data:newarr});
  
          }


const value={
    dark:state.dark,
    toggletheme,
    add_income,
    add_expense,
    delete_income,
    delete_expense,
    income:state.income,
         balance:state.balance,
         expense:state.expense,
         incomeTransactions:state.incomeTransactions,
         expenseTransactions:state.expenseTransactions

}
    return(
        <expenseContext.Provider value={value}>
{props.children}
        </expenseContext.Provider>
    )

}

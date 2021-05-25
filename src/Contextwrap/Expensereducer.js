export const expenseReducer = (state,action)=>{
    console.log("reducer runs")
switch(action.type){
    case 'TOGGLE_THEME':
        console.log("toggle runs "+ state.dark);
        return{
            ...state,
            dark:!state.dark
        
    }
    case 'INCOME_SUBMITTED':
        console.log(action.data);
        console.log("income is submitted...reducer")
        return{
            ...state,
            incomeTransactions:[...state.incomeTransactions,action.data]
        }
    case 'EXPENSE_SUBMITTED':
        console.log(action.data);
        return{
                ...state,
                expenseTransactions:[...state.expenseTransactions,action.data]
            }
        case 'INCOME_DELETED':
        console.log(action.data);
        console.log("income is deleted...reducer")
        return{
            ...state,
            incomeTransactions:action.data
        }
        case 'EXPENSE_DELETED':
            console.log(action.data);
            console.log("expense is deleted...reducer")
            return{
                ...state,
                expenseTransactions:action.data
            }
        
    case 'CALCULATE_IN_OUT' :
        console.log(action.data);
        return{
            ...state,
            income:action.data.income?state.income+action.data.value:state.income,
            expense:!action.data.income?state.expense+action.data.value:state.expense,
          
        }
        case 'CALCULATE_BALANCE' :
            console.log(action.data);
            return{
                ...state,
                balance:state.income-state.expense
            }
        
            case 'CALCULATE_DELETE_IN_OUT' :
                console.log(action.data);
                return{
                    ...state,
                    income:action.data.income?state.income-action.data.value:state.income,
                    expense:!action.data.income?state.expense-action.data.value:state.expense,
                  
                }
               
     default: return state
}
}
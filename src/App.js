import {useContext} from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import {darktheme,lighttheme} from './Theme'
import {makeStyles} from '@material-ui/core/styles'
import {ExpenseProvider,useExpense,expenseContext} from './Contextwrap/Context'
import Wrapper from './Components/Wrapper'
import React from 'react'
const useStyles = makeStyles((theme)=>({

  app:{
    margin:"0",
    padding:"0",
    boxSizing:"border-box"
  }
}));


function App() {
  const {dark} =useContext(expenseContext);

  let classes = useStyles();
 
  return (

        <ThemeProvider theme={dark?darktheme:lighttheme}>
          {console.log(dark)}
     
     <Wrapper/>
  
    </ThemeProvider>
     
    
   
  );
}

export default App;

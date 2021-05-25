import { createMuiTheme } from '@material-ui/core/styles';
export const lighttheme = createMuiTheme({
palette:{
    primary:{
        
        main:"#255e00"
    },
    background:{
        paper:"#f5f5f5"
            },
    secondary:{
main:"#ba000d"
    },
  
    
}
});
export const darktheme = createMuiTheme({
   
    palette:{
        primary:{
            main:"#12b248"
        },
        text:{
primary:"#fff"
        },
        background:{
    paper:"#181A21",
    default:"#000"
        },
        secondary:{
    main:"#ff7961"
        },
        action:{
            disabledBackground:"#ccc"
        }
   
    }
});

import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    Address: {
      lineHeight: theme.spacing(5),
      padding: theme.spacing(2),
      color: 'rgb(15, 190, 215)'
    },
    paper: {
      display: 'flex',
      boxShadow: '1px 1px 3px 0px #e0e0e0b3',
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(5),
      backgroundColor: theme.palette.background.paper,
    },
    grid: {     
      marginTop: theme.spacing(1,0,0,0)
    },
    papertwo: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      
      
    },
    cardcontent: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
    card: {
      display: 'flex',
  
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
    },
    tab: {
      paddingLeft:'50px',
      color: 'rgb(15, 190, 215)'
    },
    Divider: {
      width: '70%',
      marginTop: theme.spacing(5),
    },
    textCol: {
      alignSelf: 'center',
    },
    imgIcon: {
        padding: theme.spacing(1),
        height: '70px'
    },
    FormControl: {
        paddingBottom: theme.spacing(5),
        paddingRight: theme.spacing(3),
        width: '100%'
    },
    CheckBox: {
        paddingBottom: theme.spacing(0),
        paddingRight: theme.spacing(3),
        width: '100%',
        '& .MuiFormControlLabel-root' : {
          marginRight: '2px'
        }
    },
    label: {
      fontSize: '0.8em'
    }

}));

export default style
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    paper: {
        boxShadow: '1px 1px 3px 0px #e0e0e0b3',
        paddingTop: theme.spacing(3),
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
    //   flex: 1,
    },
    cardMediaLeft: {
        padding: theme.spacing(5),
    },
    cardMediaCenter: {
        padding: theme.spacing(5),
        textAlign: 'center'
    },
    tab: {
    //   paddingLeft:'50px',
      color: 'rgb(15, 190, 215)'
    },
    Divider: {
      width: '70%',
      marginTop: theme.spacing(5),
    },
    Address: {
      width: '70%',
      marginTop: theme.spacing(5),
      lineHeight: theme.spacing(5)
    },
    textInTable: {
      lineHeight: 1
    }
  }));
  
export default useStyles
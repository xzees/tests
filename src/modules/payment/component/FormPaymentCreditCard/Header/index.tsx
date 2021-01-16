import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CreditCardIcon from '@material-ui/icons/CreditCard';

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
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    
    
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
  Address: {
    lineHeight: theme.spacing(5),
    padding: theme.spacing(2),
    color: 'rgb(15, 190, 215)'
  }
}));



const FormPaymentCreditCardHeader = (props: any) => {
    const classes = useStyles();
    const { post } = props;
  
    return (
        <>
        <Grid item xs={12} md={12}>
            <div className={classes.card}>
                <CreditCardIcon  fontSize={'large'} /> 
                <Typography className={classes.Address} variant="h6">
                    ชำระเงินผ่านบัตรเคดิต/เดบิต
                </Typography>

            </div>
        </Grid>
    
        </>
    )
}

export default FormPaymentCreditCardHeader;
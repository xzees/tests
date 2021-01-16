import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box,  MenuItem, Checkbox, FormControlLabel, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { AppImage } from 'common/components';
import FontManager from 'common/Manager/FontManager';
import _ from 'lodash';
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import ProductValueModel from 'modules/payment/models/ProductValueModel';
import FormResponse from 'modules/payment/models/FormResponse';
import FormHidden from './FormHidden';
import TextFields from './TextFields';
import Selects from './Selects';
import useStyles from './style'
import Button from './Button'
import FormCreditCard from 'modules/payment/Hook/FormCreditCard'

interface Iprop {
    init: FormResponse
}

const FormPaymentCreditCardBody = (props: Iprop) => {
    const classes = useStyles();
    const { init } = props;
    const {
        d,
        state,
        setState,
        handleInputFocus,
        convertMonth,
        btnSubmit,
        handleInputChange,
    } = FormCreditCard()
    

    const actionUrl = new ProductValueModel(_.find(init.product.value, (v: any) => v.label == 'payment_gateway_url_form', undefined))


    return (
        <>
        <form method={'POST'} action={actionUrl.value} >
            <FormHidden init={init} />
            <Grid item xs={12}>
                <Box className={classes.paper} mt={4} mb={4} >
                    <Grid item xs={12} md={6} >
                        <Grid item xs={12} >
                            <Box display={'flex'} width={'100%'}>
                                <Typography className={classes.textCol} variant="h6" >บัตรที่รับชำระ : </Typography>  
                                <AppImage className={classes.imgIcon} src={'https://assets.travizgo.com/development/web/common/payment-methods/credit-card-icons/mastercard.png'} />
                                <AppImage className={classes.imgIcon} src={'https://assets.travizgo.com/development/web/common/payment-methods/credit-card-icons/visa.png'} />
                            </Box>                        </Grid>
                        <Box display={'flex'} width={'100%'} >
                            <Grid item xs={12} >
                                <Box className={classes.FormControl}>
                                    <TextFields
                                        type={'text'}
                                        value={state.cardNo}
                                        label={'หมายเลขบัตรเครดิต'}
                                        placeholder={'XXXX XXXX XXXX XXXX'}
                                        name={'cardNo'}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Box>
                            </Grid>
                        </Box>
                        <Box display={'flex'} width={'100%'} >
                            <Grid item xs={4} >
                                <Box className={classes.FormControl}>
                                    <Selects 
                                        name={'epMonth'}
                                        placeholder={'เดือน'}
                                        label={'วันหมดอายุ'}
                                        value={state.epMonth}
                                        onChange={handleInputChange}
                                        onFocus={() => {
                                            setState({ ...state, ...{ focused: 'expiry'} })
                                        }}
                                    >
                                        {_.times(12).map((v: any, index: number)=> <MenuItem key={index} style={{
                                            fontSize: FontManager.default.text
                                        }} value={(v+1)}>{v+1}</MenuItem >)}
                                    </Selects>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box className={classes.FormControl}>
                                    <Selects 
                                        placeholder={'ปี'}
                                        value={state.epYear}
                                        onChange={handleInputChange}
                                        onFocus={() => {
                                            setState({ ...state, ...{ focused: 'expiry'} })
                                        }}
                                        label="ปี"
                                        name={'epYear'}
                                    >
                                        {_.range(d.getFullYear()-1, d.getFullYear()+20).map((v: any, number: number)=> <MenuItem key={number} style={{
                                            fontSize: FontManager.default.text,
                                        }} value={(v+1)}>{v+1}</MenuItem >)}
                                    </Selects>
                                </Box>
                            </Grid>
                            <Grid item xs={4} >
                                <Box className={classes.FormControl}>
                                    <TextFields
                                        type={'text'}
                                        label={'รหัส CVV/CVC'}
                                        value={state.securityCode}
                                        placeholder={'CVV/CVC'}
                                        name={'securityCode'}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                </Box>
                            </Grid>
                        </Box>
                            <Grid item xs={12} >
                                <Box className={classes.CheckBox}>
                                    <TextFields
                                        type={'text'}
                                        value={state.cardHolder}
                                        placeholder={'ชื่อนามสกุลผู้ถือบัตร'}
                                        name={'cardHolder'}
                                        label={'ชื่อนามสกุล'}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                    />
                                    
                                </Box>
                            </Grid>
                            <Grid item xs={12} >
                                <Box 
                                    className={classes.CheckBox} 
                                    display={'flex'} 
                                    alignItems={'center'} 
                                >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleInputChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label={<Typography style={{ marginRight: '2px' }} color="textSecondary">ยอมรับเงื่อนไข</Typography>}
                                /> 
                                    <Typography color="textSecondary">
                                        <a href="#">ข้อตกลงและเงื่อนไขการชำระเงิน</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} >
                                <Box className={classes.FormControl}>
                                    <Button disabled={btnSubmit()} />
                                </Box>
                            </Grid>
                    </Grid>
                    <Hidden only="xs">
                        <Grid item xs={6} >
                            <Box display={'flex'} height={'100%'} alignItems={'center'} width={'100%'}>
                                <Card
                                    cvc={state.securityCode}
                                    expiry={state.expiry}
                                    focused={state.focused}
                                    name={state.cardHolder}
                                    number={state.cardNo}
                                />
                            </Box>
                        </Grid>
                    </Hidden>
                </Box>
            </Grid>
        </form>
        
        </>
    )
}

export default FormPaymentCreditCardBody;
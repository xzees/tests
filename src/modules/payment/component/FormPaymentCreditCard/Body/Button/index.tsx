import React from 'react';
import FontManager from 'common/Manager/FontManager';
import _ from 'lodash';
import "react-credit-cards/es/styles-compiled.css";
import { Button as BT } from '@material-ui/core';


interface Iprop {
    disabled: boolean
}

const Button = (props: Iprop) => {
   
    return (
        <>

            <BT  
                {...props}
                style={{
                    height: '50px',
                    fontSize: FontManager.default.text,
                    color: 'white'
                }}
                type={'submit'}
                fullWidth
                variant="contained" 
                color="primary"
            >
                ชำระเงิน   
            </BT>
        </>
    )
}

export default Button;
import React from 'react';
import _ from 'lodash';
import FontManager from 'common/Manager/FontManager';
import { TextField } from '@material-ui/core';

interface ITextField {
    // type: string;
    // defaultValue: string;
    // placeholder: string;
    // name: string;
    [key: string]: any;
}

const TextFields = (props: ITextField) => {
    
    return (
        <>
            <TextField
                {...props}

                fullWidth={true}
                InputLabelProps={{
                    shrink: true,
                    style:{
                        fontSize: FontManager.default.text,
                    }
                }}
                autoComplete={'off'}
                InputProps={{
                    style : {
                        height: '50px',
                        fontSize: FontManager.default.text,
                    },
                }}
                variant="outlined"
            />
        </>
    )
}

export default TextFields;
import React from 'react';
import _ from 'lodash';
import FontManager from 'common/Manager/FontManager';
import { MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface ISelects {
    [key: string]: any;
}



const useSelectStyle = makeStyles((theme: any) => ({
    root: {
        '& .MuiSelect-outlined.MuiSelect-outlined li' : {
            paddingLeft: 0
        }
    },
    placeholder: {
        color: '#aaa',
        fontSize: FontManager.default.text,
    }
    
}));

const Placeholder = (props: any) => {
    const classes = useSelectStyle();
    return <MenuItem className={classes.placeholder}>{props.children}</MenuItem>;
};

const Selects = (props: ISelects) => {
    const classes = useSelectStyle()
    return (
        <>
            
            <TextField
            select
            {...props}
            className={classes.root}
            fullWidth={true}
            InputLabelProps={{
                shrink: true,
                style:{
                    fontSize: FontManager.default.text,
                }
            }}
            InputProps={{
                style : {
                    height: '50px',
                    fontSize: FontManager.default.text,

                },
            }}
            SelectProps={{
                displayEmpty: true,
                inputProps: {
                    style : {
                        fontSize: FontManager.default.text,
                    },
                    'aria-label': 'Without label'
                },
                renderValue: props.value !== "" ? undefined : () => <Placeholder>{props.placeholder}</Placeholder>
                
            }}
            type={'text'}
            variant="outlined"
        >
            <Placeholder>{props.placeholder}</Placeholder>
            {props.children}
        </TextField>
        </>
    )
}


export default Selects;
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Grid, TextField, MenuItem, Hidden } from '@material-ui/core';
import { AppImage } from 'common/components';
import ImageManager from 'common/Manager/ImageManager';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        padding: theme.spacing(2, 0),
        boxShadow: '0px 0.5px 0px 1px rgb(220 220 220)',
        backgroundColor: 'white'
    },
    noPadding: {
        padding: theme.spacing(2, 3, 2, 3), 
    },
}));



const Header = (props: any) => {
    const classes = useStyles();

    return (

        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <Container maxWidth="md">
                
                    <Box display={'flex'} pl={1} pr={1} alignItems={'center'} >
                        <Grid xs={6} item >
                            
                            <Typography variant="h6" noWrap color="textSecondary">
                                <Hidden smDown>
                                    <AppImage 
                                        width={'90px'}
                                        src={ImageManager.default.images.sabuypay.icon.logo} 
                                    />
                                </Hidden>
                                <Hidden mdUp>
                                    <AppImage 
                                        width={'50px'}
                                        src={ImageManager.default.images.sabuypay.icon.logo} 
                                    />
                                </Hidden>
                            </Typography>
                        </Grid>
                        <Grid xs={6} item>
                            <Box textAlign={'right'}>
                                <TextField
                                    select
                                    SelectProps={{
                                        style: {
                                            maxWidth: '200px',
                                            textAlign: 'left',
                                        },
                                    }}
                                    inputProps={{
                                        className: classes.noPadding
                                    }}
                                    defaultValue={'th'}
                                    variant={'outlined'}
                                >
                                    <MenuItem value={'th'}>
                                    <AppImage 
                                        width={'30px'}
                                        style={{
                                            verticalAlign: 'middle',
                                            paddingRight: '10px'
                                        }}
                                        src={'https://www.thaitravelcenter.com/images/flag/th.gif'} 
                                    />
                                    ภาษาไทย
                                    </MenuItem>
                                    <MenuItem value={'en'}>
                                        <AppImage 
                                            width={'30px'}
                                            style={{
                                                verticalAlign: 'middle',
                                                paddingRight: '10px'
                                            }}
                                            src={'https://www.thaitravelcenter.com/images/flag/us.gif'} 
                                        />
                                        English
                                    </MenuItem>
                                </TextField>
                                
                            </Box>
                        </Grid>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>

    )
}

export default Header
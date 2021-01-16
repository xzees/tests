import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Grid } from '@material-ui/core';
import { AppImage } from 'common/components';
import ImageManager from 'common/Manager/ImageManager';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'white',
        padding: theme.spacing(2, 0),
    }
}));

const Footer = (props: any) => {
    const classes = useStyles();

    return (

        <div className={classes.appBar}>
            <Container maxWidth="md">
                <Box display={'flex'} pl={1} pr={1} alignItems={'center'} >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >

                        <Grid xs={12} md={6} item >
                            <Typography 
                                variant="h6" 
                                noWrap 
                                color="textSecondary"
                                style={{
                                    textAlign: isWidthDown('md', props.width) ? 'center' : 'left'
                                }} 
                            >
                                ©2021 Sabuypay Corporation Co.,Ltd. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <Typography
                                style={{
                                    textAlign: isWidthDown('md', props.width) ? 'center' : 'right'
                                }} 
                                variant="h6" 
                                color="textSecondary"
                            >
                                <AppImage 
                                    style={{
                                        maxWidth: '500px',
                                        verticalAlign: 'middle'
                                    }}
                                    src={ImageManager.default.images.sabuypay.logofooter + '?time=' + Date.now()} 
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>

    )
}

export default withWidth()(Footer)
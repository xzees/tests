import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, Divider, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './style'

export default function CompanyBox(props: any) {
  const classes = useStyles();
  const { post } = props;

  return (
          <Paper className={classes.paper}  >
              <Grid  
              container
              direction="row"
              justify="center"
              alignItems="center"
            
              className={classes.card}>
                <Grid xs={12} md={3} item >
                  <Hidden smDown>
                    <CardMedia className={classes.cardMediaLeft}>
                        <img width={'100%'} src={post.logo} alt={post.logoTitle} />
                    </CardMedia>
                  </Hidden>
                  <Hidden mdUp>
                    <CardMedia className={classes.cardMediaCenter}>  
                        <img width={'130px'}  src={post.logo} alt={post.logoTitle} />
                    </CardMedia>
                  </Hidden>
                </Grid>
                <Grid xs={12} item md={9}>
                  <div className={classes.cardDetails}>
                      <CardContent className={classes.cardcontent}>
                        <Typography component="h2" variant="h5" color="textSecondary">
                            {post.title}
                        </Typography>
                        <Typography 
                          style={{
                            fontFamily: 'DBHeaventRoundedmedv32'
                          }}
                          component="h2" 
                          variant="h3" 
                          color="textSecondary"
                        >
                            {post.company}
                        </Typography>
                        <Box display={'flex'}>
                        <Grid item xs={6} md={2}>

                            <Typography variant="h6" color="textSecondary">
                              รายละเอียดสินค้า: 
                            </Typography>
                          </Grid>

                          <Grid item xs={6} md={3}>
                            <Typography className={classes.tab} variant="h6" color="primary">{post.order.title}</Typography>
                          </Grid>
                        </Box>
                        <Box display={'flex'}>
                          <Grid item xs={6} md={2}>
                            <Typography variant="h6" color="textSecondary">
                              หมายเลขคำสั่งซื้อ: 
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography className={classes.tab} variant="h6" color="primary">{post.order.order_code}</Typography>
                          </Grid>
                        </Box>
                        <Box display={'flex'}>
                        <Grid item xs={6} md={2}>
                            <Typography variant="h6" color="textSecondary">
                              จำนวน: 
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography 
                            className={classes.tab} 
                            variant="h6" 
                            color="primary">{post.order.amount}</Typography>
                          </Grid>
                        </Box>
                        
                        <Divider className={classes.Divider} />
                        <Typography className={classes.Address} variant="h6" color="textSecondary">{post.order.address}</Typography>
                      </CardContent>
                  </div>
                </Grid>
              </Grid>
          </Paper>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';

const useStyle = makeStyles({
    imgBox: {
        height:"100vh",
        overflow:"scroll",
    },
    img: {
        width:"100%",
    }
})

const ItemDetail = () => {
    const classes = useStyle();

    return (
        <Container maxWidth="lg">
            <Paper elevation={10} >
            <Grid container> 
                <Grid item xs={12}>
                    <h2>AMD 라이젠5-3세대 3600 (마티스)</h2>
                    <div className="chips">
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />
                        <Chip
                        label="sss"
                        />

                    </div>
                </Grid>
                <Grid item xs={12} className={classes.imgBox}>
                    <img className={classes.img} src="http://iws.danawa.com/prod_img/500000/973/459/desc/prod_8459973/add_1/20190703143848851_SITY0BG2.jpg" alt="detail" />
                </Grid>
            </Grid> 
            </Paper>
        </Container>
    )
}

export default ItemDetail;
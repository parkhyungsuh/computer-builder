import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    container:{
        height:"100vh",
    }
});

const SelectedItem = () => {
    const classes = useStyle();

    return (
        <Paper elevation={10} className={classes.container}>
            <Grid container>
                <Grid item sm={12} lg={6}>
                    <div>
                        <img src="http://img.danawa.com/prod_img/500000/973/459/img/8459973_1.jpg" alt="thumbnail" />
                        <div>
                            <Chip label="6코어" />
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="CPU"
                                secondary="AMD 라이젠5-3세대 3600 (마티스)"
                            />
                            <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SelectedItem;
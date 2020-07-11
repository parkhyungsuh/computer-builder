import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const handleDelete = () => {
    console.log('chipchip')
};
const useStyle = makeStyles((theme) => ({
    root:{

    },
    heading:{
        flexBasis:150,
        lineHeight:2,
    },
    chips:{
    },
    card: {
    }
}));

const ItemFilter = () => {
    const classes = useStyle();

    const [expanded, setExpanded] = useState(false);
    const handleChange = (filter) => (event, isExpanded) => {
        setExpanded(isExpanded ? filter : false);
      };
      
    return (
        <Paper elevation={5}>
            <Accordion expanded={expanded === 'filter'} onChange={handleChange('filter')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="filter" id="filter">
                    <Typography className={classes.heading}>Filter</Typography>
                    <div className={classes.chips}>
                        <Chip label="6core" onDelete={handleDelete} />
                        <Chip label="6core" onDelete={handleDelete} />
                        <Chip label="6core" onDelete={handleDelete} />
                        <Chip label="6core" onDelete={handleDelete} />
                        <Chip label="6core" onDelete={handleDelete} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <Typography>코어수</Typography>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <Typography>속도</Typography>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <Typography>캐쉬</Typography>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                            </Card>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Card>
                                <Typography>제조사</Typography>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                                <Chip label="6core"/>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}

export default ItemFilter;
import React, { useState } from 'react';
import {Tabs,Tab,Container} from '@material-ui/core';

const CategoryList  = [
    "CPU",
    "Mainboard",
    "RAM",
    "VGA",
    "SSD",
    "HDD",
    "Case",
    "Power",
    "Cooler"
]

const Navigation = (props) => {
    const [cat, setCat] = useState('CPU');
    const handleChange = (event, newCat) => {
        setCat(newCat);
        props.onChangeCategory(newCat);
    };

    return (
        <Container maxWidth="lg">
            <Tabs value={cat} onChange={handleChange} aria-label="Navigation" variant="scrollable" scrollButtons="auto">
                {
                    CategoryList.map( data => <Tab key={data} label={data} value={data} /> )
                }
            </Tabs>
        </Container>
    )
}

export default Navigation;
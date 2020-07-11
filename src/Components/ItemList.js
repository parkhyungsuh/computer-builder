import React from 'react';
import Item from './Item';
import ItemFilter from './ItemFilter';
import Container from '@material-ui/core/Container';

const ItemList = () => {

    return (
        <Container maxWidth="lg">
        <ItemFilter />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Container>
    )
}

export default ItemList;
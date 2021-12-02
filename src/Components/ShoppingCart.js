import React from 'react'
import List from './List'

function ShoppingCart(items) {
    return (
        <List item={items.item}/>
    )
}

export default ShoppingCart
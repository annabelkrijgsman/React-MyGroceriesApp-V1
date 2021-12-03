import React from 'react'
import List from './List'

function ShoppingCart(items) {
    return (
        <div>
            <button onClick={items.emptyShoppingCart}>Empty shoppingcart</button>
            <List item={items.item} type='shoppingCart'/>
        </div>
    )
}

export default ShoppingCart
import React from 'react'
import List from './List'

function ShoppingCart(items) {
    return (
        <div className='shopping-cart'>
            <h1>Shoppingcart</h1>
            <button onClick={items.emptyShoppingCart}>Empty shoppingcart</button>
            <List item={items.item} type='shoppingCart'/>
        </div>
    )
}

export default ShoppingCart
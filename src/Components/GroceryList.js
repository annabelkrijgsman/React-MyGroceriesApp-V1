import React from 'react'
import List from './List'

function GroceryList(items) {
    return (
        <List 
            item={items.item} 
            passedFunction={items.passedFunction}
        />
    )
}

export default GroceryList
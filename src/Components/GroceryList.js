import React from 'react'
import List from './List'

function GroceryList(items) {
    return (
        <List {...items} />
    )
}

export default GroceryList
import React from 'react'
import List from './List'
import InputField from './InputField'

function GroceryList(items) {
    return (
        <div className='grocery-list'>
            <h1>Grocerylist</h1>
            <InputField 
                addNewItem={items.addNewItem}
            />
            <List 
                item={items.item} 
                clickedItem={items.clickedItem}
            />
        </div>
    )
}

export default GroceryList
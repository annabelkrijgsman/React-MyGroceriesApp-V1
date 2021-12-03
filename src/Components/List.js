import React from 'react'
import ListItem from './ListItem'

function List(items) {
    if(items.type === 'shoppingCart') {
        return (
            <ul>
                {Object.values(items.item).map(item => (
                    <ListItem 
                        key={item.id}
                        title={item.title} 
                        amount={item.amount}
                        clickedItem={items.clickedItem}
                    />
                ))}
            </ul>
        )
    } else {
        return (
            <ul>
                {Object.values(items.item).map(item => (
                    <ListItem 
                        key={item.id}
                        title={item.title} 
                        clickedItem={items.clickedItem}
                    />
                ))}
            </ul>
        )
    }
}

export default List
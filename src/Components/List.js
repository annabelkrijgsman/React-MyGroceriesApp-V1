import React from 'react'
import ListItem from './ListItem'

function List(items) {
    return (
        <ul>
            {Object.values(items.item).map(item => (
                <ListItem key={item.id} title={item.title} passedFunction={items.passedFunction}/>
            ))}
        </ul>
    )
}

export default List
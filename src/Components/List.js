import React from 'react'
import ListItem from './ListItem'

function List(items) {
    return (
        <ul>
            {Object.values(items).map(item => (
                <ListItem key={item.id} title={item.title} />
            ))}
        </ul>
    )
}

export default List
import React from 'react'

function ListItem(item) {
    return (
        <li
            className='list-item'
            onClick={item.clickedItem}
            value={item.title}
        >
            <span> {item.title} </span>
            {(item.amount !== undefined) ? <span> Amount: {item.amount} </span> : ''}
        </li>
    )
}

export default ListItem
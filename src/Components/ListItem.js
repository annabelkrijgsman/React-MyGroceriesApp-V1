import React from 'react'

function ListItem(item) {
    return (
        <li
            className='list-item'
            onClick={item.clickedItem}
            value={item.title}
        >
            {item.title + ' ' + item.amount}
        </li>
    )
}

export default ListItem
import React from 'react'

function ListItem(item) {
    return (
        <li
            key={item.id}
            className='list-item'
            onClick={item.passedFunction}
            value={item.title}
        >
            {item.title}
        </li>
    )
}

export default ListItem
import React from 'react'

function InputField(item) {
    return (
        <div>
            <input 
                type='text'
                placeholder='Enter new grocery item'
                id='addItem'
            ></input>
            <button onClick={item.addNewItem}>Add</button>
        </div>
    )
}

export default InputField
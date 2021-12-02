import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: 'Bread'},
                {id: 2, title: 'Milk'},
                {id: 3, title: 'Cookies'}
            ]
        }
    }

    render() {
        return(
            <ul>
                {this.state.groceryItems.map(item => (
                    <ListItem key={item.id} title={item.title}/>
                ))}
            </ul>
        )
    }
}

export default List
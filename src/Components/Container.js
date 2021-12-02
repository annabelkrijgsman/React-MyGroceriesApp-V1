import React, { Component } from 'react'
import GroceryList from './GroceryList'
//import ShoppingCart from './ShoppingCart'

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: 'Bread'},
                {id: 2, title: 'Milk'},
                {id: 3, title: 'Cookies'}
            ]
        }
        this.clickItem = this.clickItem.bind(this)
    }

    clickItem () {
        console.log('I was clicked!')
    }

    render() {
        return (
            <div className="container">
                <GroceryList {...this.state.groceryItems}/>
                {/* <ShoppingCart /> */}
            </div>
        )
    }
}

export default Container
import React, { Component } from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: 'Bread'},
                {id: 2, title: 'Milk'},
                {id: 3, title: 'Cookies'}
            ],
            shoppingListItems: [
                {id: 1, title: 'Chocolate'},
                {id: 2, title: 'Berries'},
                {id: 3, title: 'Shampoo'}
            ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    }

    handleClickGroceryItem = (item) => {
        const title = item.target.getAttribute('value')
        console.log(title)
    }

    render() {
        return (
            <div className="container">
                <GroceryList 
                    item={this.state.groceryItems}
                    passedFunction={this.handleClickGroceryItem }
                />
                <ShoppingCart item={this.state.shoppingListItems}/>
            </div>
        )
    }
}

export default Container
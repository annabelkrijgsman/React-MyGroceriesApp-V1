import React, { Component } from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: 'Chocolate'},
                {id: 2, title: 'Milk'},
                {id: 3, title: 'Cookies'}
            ],
            shoppingListItems: [
                {id: 1, title: 'Icecream', amount: 2},
                {id: 2, title: 'Berries', amount: 3},
                {id: 3, title: 'Shampoo', amount: 1}
            ]
        }
    }

    handleClickGroceryItem = (item) => {
        const title = item.target.getAttribute('value')
        const groceries = this.state.groceryItems
        const shoppingItems = this.state.shoppingListItems
        let isFound = false

        shoppingItems.map(shoppingItem => { 
            if(shoppingItem.title === title) {
                isFound = true
            }
            return isFound
        })

        if (!isFound) {
            let newShoppingList = groceries.filter(groceryItem => groceryItem.title === title)
            newShoppingList.forEach(newShoppingItem => {
                let nextId = this.getNextId(this.state.shoppingListItems)
                this.setState(previousState => ({
                    shoppingListItems: [
                        ...previousState.shoppingListItems, 
                        {id: nextId, title: newShoppingItem.title, amount: + 1}
                    ]
                }))
            })
        } else {
            this.addAmountToItem(title, shoppingItems)
        }
    }

    addAmountToItem = (title, shoppingItems) => {
        shoppingItems.forEach(item => {
            if(title === item.title) {
                item.amount++
                this.setState(previousState => ({
                    shoppingListItems: [
                        ...previousState.shoppingListItems
                    ]
                }))
            }
        })
    }

    emptyCart = () => {
        this.setState({shoppingListItems: []})
    }

    addNewGroceryItem = () => {
        let inputValue = document.getElementById('addItem').value
        let nextId = this.getNextId(this.state.groceryItems)

        this.setState(previousState => ({
            groceryItems: [
                ...previousState.groceryItems,
                {id: nextId, title: inputValue}
            ]
        }))
    }

    getNextId = (myItems) => {
        let highestId = 0;
        myItems.forEach(item => {
            if (item.id > highestId) {
                highestId = item.id
            }
        })
        const nextId = highestId + 1
        return nextId
    }

    render() {
        return (
            <div className="container">
                <GroceryList 
                    item={this.state.groceryItems}
                    clickedItem={this.handleClickGroceryItem}
                    addNewItem={this.addNewGroceryItem}
                />
                <ShoppingCart 
                    emptyShoppingCart={this.emptyCart}
                    item={this.state.shoppingListItems}
                />
            </div>
        )
    }
}

export default Container
import React, { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

// This file is our starting point of our GroceryList web page!  We will be calling in 2 child components to be rendered into our app: Item and ItemForm.  We broke it down this way for organizational purposes!

function GroceryList() {

    // We use the useState hook in order to create a variable that holds our list of grocery items.  We will give it an intial value of the below object, which holds two key-value pairs - id and text.
    // We will pass this into our Item component, where we are rendering this list to display our grocery items!
    const [groceryItem, setGroceryItem] = useState([
        {
            id: "100101010",
            text: "Apples",
        }
    ]);
    

    // The below is an example of a useEffect.  In this example, every time the groceryItem state changes (such as items being added/deleted), it will run our useEffect.  As long as the groceryItem is not an empty array, it will give us an alert saying "Updated grocery list!".  Feel free to uncomment out lines 21-27 to see this!

    // useEffect(() => {
    //     if (!groceryItem[0]) {
    //         return
    //     } else {
    //         alert("Updated grocery list!")
    //     }
    // }, [groceryItem])

    
    // The below function is what we're passing into our ItemForm component.  This helps us add items to our groceryItem state
    const addGroceryItem = (item) => {
        // If there wasn't anything written out in the input, we don't want to add empty stuff to our list, so we'll return to stop the rest of the function from running
        if (!item.text) {
            return;
        }

        // We did this console.log just to see what was coming down
        console.log("I'M IN THE ADDGRCOERYITEM FUNCTION", item)
        
        // We will create a new array in which we spread out the items currently in our groceryItem state from line 11, and then also add the new item to it!
        const newItemList = [...groceryItem, item]

        // We will need to now update the groceryItem state with the array we created on line 41
        setGroceryItem(newItemList)

    }


    // The below function is being passed into our Item component.  This helps us remove items from our groceryItem state
    const removeGroceryItem = (id) => {
        // Here we are filtering through our list of the groceryItem state.  Because we are passing in the id of the item that was clicked on (from what was rendered in Item.js), we can filter through it to create a new array that will include items that do not match the id of the item that we clicked on.
        const updateItemList = [...groceryItem].filter((item) => item.id !== id)

        // WWe will need to now update the groceryItem state with the array we created on line 52
        setGroceryItem(updateItemList)
    }


    return (
        // In order to add in some of the above items (groceryItem, addGroceryItem, removeGroceryItem), we need to wrap them in a set of curly braces.
        <div>
            {/* Notice how this formatted differently from the above comments */}
            {/* The below h1 is an example of adding an inline-style */}
            <h1 style={{color: "blue"}}>SUPER AWESOME GROCERY LIST</h1>
            {/* The ItemForm and Item are being imported into this file so that we may utilize them here.  These are child components, and we're passing in properties.  It is common for properties to be the same name of the value being passed in - For example, in the Item component, we have a property name "groceryItem" and are passing in the value for {groceryItem}, which is coming from the state up on line 11 */}
            <ItemForm onSubmit={addGroceryItem}/>
            <Item 
                groceryItem={groceryItem}
                removeGroceryItem={removeGroceryItem}
            />
        </div>
    )
}

export default GroceryList;
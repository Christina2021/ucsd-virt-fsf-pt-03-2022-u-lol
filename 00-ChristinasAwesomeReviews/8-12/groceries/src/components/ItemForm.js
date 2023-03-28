import React, { useState } from 'react';

// In order to utilize the properties that were being passed from the parent component (GroceryList), we need to add the "props" parameter into the below line.  If we didn't have any props to pass in, we could have left it as ItemForm()
function ItemForm(props) {
    // Creating a new state to save the value of the input (from line 31); this is needed to show the updated value of the input on the webpage.  We give it an initial value of an empty string.
    const [input, setInput] = useState('');

    // We created a handleSubmit function that we are calling every time the form component below is submitted by clicking on the button
    const handleSubmit = (e) => {
        e.preventDefault();

        // The onSubmit function is a prop coming from our GroceryList file.  It is calling the addGroceryItem function and passing in the new object that we have created below (with 2 key-value pairs - an id that's generating a random number for the value, and the text that has a value of whatever the input state is currently at from line 6)
        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input,
        })

        // We use the below line to reset our input state from line 6 to be an empty string again.
        setInput("")

    }

    // We created a handleChange function that we are calling every time there is a change to the input on line 31 below.  This is required in order for us to make any changes to the text input.  The changes made in the input box on the app will make an update to our input state from line 6.
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New item"
                    value={input}
                    name="text"
                    onChange={handleChange}
                >
                </input>
                <button>Add item to list!</button>
            </form>
        </div>
    )
}

export default ItemForm;
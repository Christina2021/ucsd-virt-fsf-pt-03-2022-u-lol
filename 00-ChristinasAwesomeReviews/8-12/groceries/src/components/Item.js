import React from 'react';

function Item(props) {

    //console.log(props.groceryItem)

    // This is an example of internal styles.  We created a styles object that has a list of key-value pairs, in which the key is used to be called in our render/return, and the value being the specific set of styles that need to be applied
    const styles = {
        listItem: {
            display: "flex",
            flexDirection: "row"
        }
    }

    return (
        <div>
            {/* We created a conditional below (using the ternary operator) based on if the groceryItem array has items in it or not by checking if the first index exists */}
            {props.groceryItem[0] ? (
                // If it does exist, we will map/iterate through the groceryItem array, and then render a return of the below div (lines 23-26)
                props.groceryItem.map((item, i) => {

                    return (
                        <div style={styles.listItem} key={item.id}>
                            <p>{item.text}</p>
                            <p onClick={() => props.removeGroceryItem(item.id)}> 🗑️</p>
                        </div>
                    )

                })
            ) : (
                // If the first index does not exist, then render the below
                <div>No Items Added Just Yet</div>
            )
            }
        </div>
    
    )
}

export default Item;
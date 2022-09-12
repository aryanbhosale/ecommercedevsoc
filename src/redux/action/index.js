// Adding items to the cart
export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product 
    }
}

// Deleting items from the cart
export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}


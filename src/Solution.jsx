import React from 'react'

export default function Solution({ shoppingCart }) {

    const shoppingCartItems = shoppingCart.map(prod =>
        <p>
            <span>{prod.item} : </span>
            <span>{prod.price}</span>
        </p>
    )
    return (
        <h5>
            {shoppingCartItems}
        </h5>
    )
}
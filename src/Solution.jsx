import React from 'react'

export default function Solution({ data, sortProducts }) {

    const totalPrice = sortProducts(data).map(prd =>
        <p>
            <span>
                {prd.product}
            </span>
            <span>
                {prd.price}
            </span>
        </p>)
    return (
        <h5>
            Output : {totalPrice}
        </h5>
    )
}
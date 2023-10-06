import React from 'react'

export default function Solution({data,total}) {

const totalPrice = total(data)
    return (
        <h5>
            Output : {totalPrice}
        </h5>
    )
}
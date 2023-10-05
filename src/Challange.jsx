import React from 'react'

export default function Challange() {

    const ch = `
    We have a list of podcasts and need the ability to filter by only
    podcasts which are free.
    
    Write a function that takes in the podcast data and returns an new
    array of only those podcasts which are free.
    
    Additionally, your new array should return only 
    objects containing only the podcast title, rating, and whether or 
    not it is paid. 
    `
    const output =
        [
            { title: "Scrimba Podcast", rating: 10, paid: false },
            { title: "Something about Witches", rating: 8, paid: false },
            { title: "Coding Corner", rating: 9, paid: false }
        ]
    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {ch}
            <br />

        </h3>
    )
}
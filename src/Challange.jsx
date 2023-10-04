import React from 'react'

export default function Challange() {

    const des1 = `We've received what (we assume) is a message of peace and brotherhood from 
    an alien planet. They almost got it right, but the messages are 
    backward. Write functions to reverse the backward messages so we can 
    read what they have to say! `
     
    
    const title = ":htraE no od ot ffutS";
    const messages = [
                "maerc eci yrT",
                "rewoT leffiE tisiV",
                "noom eht ot snamuh etacoleR",
                "egrahc ni stac tuP", 
            ]
    const messageElements = messages.map(message => <p>${message}</p>)
    const hint = ` Step 1: Reverse a string
    Write a function that takes in a string and returns the reverse 
    of that string. An interviewer may want to check if you know your
    string methods, or may want to know if you can reverse a string manually. 
    Practice both ways! 
    
    Example input: !htrae ot emocleW
    Example output: Welcome to earth!`



    return (
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>
            {des1}
            <br/>
            {`title : ${title}`}
            <br/>
            {`messages :`}
            {messageElements}
            <br/>
            {hint}

        </h3>
    )
}
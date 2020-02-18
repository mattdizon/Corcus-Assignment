import React from 'react'

const Button = ({ 
    color,
    text,
}) => {
    return (
        <button type="button" onclick="alert('Hello world!')">{text}</button>
    )
}

export default Button
import React from 'react'

const InputField = ({
    icon,
    name,
    type,
    placeholder,
}) => {
    return(
        <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input  type={type || "text"} placeholder={placeholder}/>
        </div>
    )
}
export default InputField
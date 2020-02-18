import React from 'react'
import Text from '../Typography/Text'
const Metadata = ({ 
    icon,
    title,
    subtitle
}) => (
    <>
        <img src  = {icon}/>
        <Text>{title}</Text>
        <br/>
        <Text>{subtitle}</Text>
    </>
)
export default Metadata
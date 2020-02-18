import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import InputField from '../../components/Form/InputField'
import Title from '../../components/Typography/Title'
import Text from '../../components/Typography/Text'

const ProductOverview = () => {
    return(
        <Card>
            <Text>Campaign Title</Text>
            <InputField/>
            <Text>Product Description</Text>
            <Text>What is the product and how creators will create content for it</Text>
            <InputField/>
            <Text>Product Images</Text>
            <Text>What the product looks like and the content stle the brand is looking for</Text>
            <InputField/>
            <Text>Categories</Text>
            <InputField/>
            <br/>
            <Button text = 'Save'/>
            <Button text = 'Continue'/>
        </Card>
    )
}
export const ProductOverview
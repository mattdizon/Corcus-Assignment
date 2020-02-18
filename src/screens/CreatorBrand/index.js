import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Typography/Title'
import Text from '../../components/Typography/Text'
const CreatorBrand = () => {
    return (
        <Card>
            <Title> I am a ...</Title>
            <Card>
                <Text>Creator</Text>
                <br/>
                <Text>I want to work with brands on marketing campaigns</Text>
            </Card>
            <Card>
                <Text>Brand</Text>
                <br/>
                <Text>I want to promote my product or service</Text>
            </Card>
            <Button text = 'Select'/>
        </Card>
    )
}
export default CreatorBrand
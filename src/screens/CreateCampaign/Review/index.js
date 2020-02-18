import React from 'react'
import Card from '../../../components/Card'
import Text from '../../components/Typography/Text'

const Review = ({}) => {
    return (
        <>
            <Card title = 'Product Overview'>
                <Text>Campaign Title</Text>
                <br/>
                <Text>Holiday Campaign</Text>
                <Text>Product Description</Text>
                <br/>
                <Text>Holiday Campaign</Text>
                <br/>
                <>
                </>
                <Text>Categories</Text>
                <br/>
            </Card>
            <Card title = 'Ad Requirements'>
                <Text> INSTAGRAM POST DESCRIPTION</Text>
                <br/>
                <Text>REWARDS</Text>
                <br/>
                <Text>TASKS</Text>
                <br/>
                <Text>TAGS TO USE</Text>
            </Card>
            <Card title = 'Audience Targets'>
                <Text> LOCATION</Text>
                <br/>
                <Text>AGE</Text>
                <br/>
                <Text>GENDER</Text>
                <br/>
                <Text>INTEREST</Text>
            </Card>
            <Card>
                <Text>PAYMENT METHOD</Text>
            </Card>
        </>
    )
}
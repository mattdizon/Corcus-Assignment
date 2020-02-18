import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import InputField from '../../components/Form/InputField'
import Title from '../../components/Typography/Title'
import Text from '../../components/Typography/Text'

const AccountSetup = () => {
    return (
        <Card>
            <Text> Brand Logo</Text>
            <br/>
            <Text>Brand Name</Text>
            <Text>Brand Website</Text>
            <br/>
            <Text>Tell us about the brand</Text>
            <br/>
            <Text>Social Media</Text>
            <Text>Connect your social media to attract the right creator audience for your campaigns</Text>
            <br/>
            <Button text = 'Complete'/>
        </Card>
    )
}
export default AccountSetup
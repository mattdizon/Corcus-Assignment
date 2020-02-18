import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import InputField from '../../components/Form/InputField'
import Title from '../../components/Typography/Title'
import Text from '../../components/Typography/Text'

const AudienceTargets = () => {
    return(
        <Card>
            <Text>Age</Text>
            <InputField type = 'number'/> - <InputField type = 'number'/>
            <Text> Location </Text>
            <br/>
            <Text>The location of audience</Text>
            <InputField/>
            <br/>
            <Text>Gender</Text>
            <br/>
            <Text>Unselect if you want to specify male or female</Text>
            <br/>
            <Text>Interest</Text> 
            <br/>
            <Text>Define your audience's interest</Text>
            <InputField/>
        </Card>
    )
}
export default AudienceTargets
import React from 'react'
import Text from '../../../components/Typography/Text'
import InputField from '../../../components/Form/InputField'
const Budget = () => {
    return (
        <>
            <Text>Duration</Text>
            <br/>
            <Text>The length of the campaign</Text>
            <br/>
            <Text>Start Date</Text>
            <InputField/>
            <Text>End Date</Text>
            <InputField/>
            <br/>
            <Text>Total Budget</Text>
            <br/>
            <Text>Your maximum budget for this campaign</Text>
            <InputField/>
        </>
    )
}
export default Budget
import React from 'react'
import Card from '../../components/Card'
import InputField from '../../../components/Form/InputField'
import Metadata from '../../../components/Metadata'
import Title from '../../../components/Typography/Title'
import Text from '../../../components/Typography/Text'

const AdRequirements = () => {
    return(
        <Card>
            <Card>
                <Metadata 
                    title = 'Instagram'
                    subtitle = ' Select the style of the content'
                />
                <Text>Posts</Text>
                <br/>
                <Text>Carousel</Text>
                <br/>
                <Text>Story</Text>
                <br/>
                <Text>Video</Text>
                <br/>
                <Text>Post Description</Text>
                <br/>
                <Text>
                    Describe the style of the content and any additional details for the creators
                </Text>
                <br/>
                <Text>Tags</Text>
                <br/>
                <Text>How will community members find the content</Text>
            </Card>
            <Card>
            <Metadata 
                    title = 'Youtube'
                    subtitle = ' Select the style of the content'
                />
            </Card>
            <Text>Payout Structure</Text>
            <br/>
            <Text>
                Choose one or a combination of payouts
            </Text>
            <br/>
            <Text>
                The item or service the creator is promoting
            </Text>
            <Card>
                <Text> Free Product or Service</Text>
                <InputField/>
                <br/>
                <Text>Fixed Rate</Text>
                <InputField/>
                <br/>
                <Text>Perfomance</Text>
                <br/>
                <Text>
                    Payment for every click and 1000 views
                </Text>
            </Card>
        </Card>
    )
}
export default AdRequirements
import React from 'react';
import Button from '../../components/Button'
import Card from '../../components/Card'
import InputField from '../../components/Form/InputField'
import Title from '../../components/Typography/Title'
import Text from '../../components/Typography/Text'

const SignUp = () => {
  return (
      <Card>
        <Title>Corcus</Title>
        <InputField placeholder = 'hello'/>
        <InputField placeholder = 'hello'/>
        <InputField placeholder = 'hello'/>
        <Button text = 'Click Me'/>
        <br/>
        <Text>Already have an account? Log In</Text>
        <br/>
        <br/>
        <Text>Or join with</Text>

      </Card>
  );
}

export default SignUp;

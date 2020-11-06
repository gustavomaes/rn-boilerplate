import React from 'react'
import styled from 'styled-components/native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppParamList } from 'routes/Navigation'
import { Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const Card = styled.View`
  align-self: center;
  width: 60%;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 12;
`

const Line = styled.View`
  width: 100%;
  border-bottom-width: 0.5;
  border-color: #95989a;
`

const WrapperText = styled.View`
  width: 100%;
  padding: 24px;
`

const ConfirmButtom = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
`

type ProfileScreenNavigationProp = StackNavigationProp<AppParamList>
type ProfileScreenRouteProp = RouteProp<AppParamList, 'Alert'>

type Props = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Alert = ({
  route: {
    params: { title, description }
  },
  navigation
}: Props) => (
  <Container>
    <Card>
      <WrapperText>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </WrapperText>
      <Line />
      <ConfirmButtom onPress={() => navigation.pop()}>
        <Text>OK</Text>
      </ConfirmButtom>
    </Card>
  </Container>
)

export default Alert

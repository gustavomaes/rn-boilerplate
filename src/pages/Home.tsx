import React, { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import Button from 'component/Button'
import styled from 'styled-components/native'
import ROUTENAMES from 'routes/RouteNames'
import { AppParamList } from 'routes/Navigation'
import useApi from 'hooks/useApi'
import client from 'util/api'

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(p) => p.theme.colors.mainBg};
  align-items: center;
  justify-content: center;
`

const CustomText = styled.Text`
  margin-top: 32px;
  font-size: 18px;
  color: black;
`

type ProfileScreenNavigationProp = StackNavigationProp<AppParamList>

type Props = {
  navigation: ProfileScreenNavigationProp
}

const Home = ({ navigation }: Props) => {
  const [data, isLoading, error, loadData] = useApi({
    fetchFn: () => client.get('/'),
    loadOnMount: true
  })

  useEffect(() => {
    console.log('data>', data)
  }, [data])

  return (
    <Wrapper
      onPress={() =>
        navigation.navigate(ROUTENAMES.ALERT, {
          title: 'Title',
          description: 'Description'
        })
      }
    >
      <Button />
      <CustomText>HOME</CustomText>
    </Wrapper>
  )
}
export default Home

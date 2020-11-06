import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${(p) => p.theme.colors.primary};
`

const Button = () => {
  return (
    <Wrapper>
      <Text>Button</Text>
    </Wrapper>
  )
}

export default Button

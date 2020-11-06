import React from 'react'
import Button from 'component/Button'
import styled from 'styled-components/native'

const Wrapper = styled.View`
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

const Destaques = () => (
  <Wrapper>
    <Button />
    <CustomText>Destaques</CustomText>
  </Wrapper>
)

export default Destaques

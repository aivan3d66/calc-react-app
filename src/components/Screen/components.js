import styled from 'styled-components'

export const Screen = styled.div`
  border-bottom: 2px solid #707070;
  color: ${props => props.schema.textColour};
  font: normal normal normal 64px/77px Helvetica Neue;
  margin: 0 20px 30px 0;
  min-height: 120px;
  overflow: hidden;
  padding: 20px 0 20px 20px;
  text-align: right;
`

export const Error = styled.h2`
  color: red;
  font: normal normal normal 34px/44px Helvetica Neue;
  text-align: left;
`

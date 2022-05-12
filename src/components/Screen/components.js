import styled from 'styled-components'

export const Screen = styled.div`
  min-height: 120px;
  padding: 20px 0 20px 20px;
  margin: 0 20px 30px 0;
  text-align: right;
  color: ${props => props.schema.textColour};
  font: normal normal normal 64px/77px Helvetica Neue;
  border-bottom: 2px solid #707070;
  overflow: hidden;
`

import styled from 'styled-components'

export const Button = styled.button`
  width: 120px;
  height: 120px;
  margin: auto;
  padding: 10px;
  color: ${props => props.schema.textColour};
  text-align: center;
  font: normal normal normal 64px/77px "Gill Sans", sans-serif;
  border: 1px solid #707070;
  border-radius: 32px;
  background-color: ${props => props.schema.buttonColour};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffffff;
    background-color: ${props => props.schema.buttonHoverColour || '#bababa'};
    border-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
  }
`

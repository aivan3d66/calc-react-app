import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 100px;
  margin: auto;
  padding: 10px;
  color: ${props => props.schema.textColour};
  text-align: center;
  font: normal normal normal 54px/60px "Gill Sans", sans-serif;
  border: 1px solid #707070;
  border-radius: 30px;
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

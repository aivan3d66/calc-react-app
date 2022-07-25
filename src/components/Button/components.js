import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.schema.buttonColour};
  border: 1px solid #707070;
  border-radius: 30px;
  color: ${props => props.schema.textColour};
  cursor: pointer;
  font: normal normal normal 54px/60px "Gill Sans", sans-serif;
  height: 100px;
  margin: auto;
  padding: 10px;
  text-align: center;
  transition: 0.3s;
  width: 100px;

  &:hover {
    background-color: ${props => props.schema.buttonHoverColour || '#bababa'};
    border-color: transparent;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
  }
`

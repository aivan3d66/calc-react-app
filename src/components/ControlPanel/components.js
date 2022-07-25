import styled from 'styled-components'

export const ControlPanel = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 40px auto;
  padding: 0 20px;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    border-radius: 32px;
    color: ${props => props.schema.textColour};
    cursor: pointer;
    font: normal normal normal 32px/44px "Gill Sans", sans-serif;
    transition: 0.3s;

    &:hover {
      color: #bababa;
    }
  }
`

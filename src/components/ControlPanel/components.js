import styled from 'styled-components'

export const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 40px auto;
  padding: 0 20px;

  button {
    color: ${props => props.schema.textColour};
    font: normal normal normal 32px/44px "Gill Sans", sans-serif;
    cursor: pointer;
    border-radius: 32px;
    background-color: transparent;
    border: none;
    transition: 0.3s;

    &:hover {
      color: #bababa;
    }
  }
`

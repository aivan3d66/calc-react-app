import styled from 'styled-components'

export const Settings = styled.div`
  align-items: flex-start;
  background-color: inherit;
  color: ${props => props.schema.textColour};
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1280px;
  padding: 20px;

  select {
    background-color: ${props => props.schema.buttonColour};
    color: ${props => props.schema.textColour};
    padding: 28px;
    transition: 0.3s;

    &:hover,
    &:focus {
      background-color: ${props => props.schema.buttonHoverColour || '#bababa'};
      color: white;
    }
  }

  button {
    border: 2px solid #434343;
    border-radius: 8px;
    cursor: pointer;
    font: normal normal normal 32px/38px "Gill Sans", sans-serif;
    height: 100px;
    margin: 20px 0;
    padding: 28px;
    text-align: left;
    transition: 0.3s;
    width: 400px;

    &:hover {
      background-color: ${props => props.schema.buttonHoverColour || '#bababa'};
      color: #ffffff;
    }
  }
`

export const Heading = styled.h3`
  color: inherit;
  font: normal normal normal 64px/77px "Gill Sans", sans-serif;
`

export const SelectHeading = styled.h4`
  font: normal normal normal 24px/29px "Gill Sans", sans-serif;
  margin: 20px 0 0 0;
`

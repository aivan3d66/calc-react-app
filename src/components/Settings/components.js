import styled from 'styled-components'

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1280px;
  margin: auto;
  padding: 20px;
  color: #000000;
  background-color: inherit;

  button {
    width: 400px;
    padding: 28px;
    margin: 20px 0;
    text-align: left;
    font: normal normal normal 32px/38px "Gill Sans", sans-serif;
    border: 2px solid #434343;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #ffffff;
      background-color: #bababa;
    }
  }
`

export const Heading = styled.h3`
  font: normal normal normal 64px/77px "Gill Sans", sans-serif;
`

export const SelectHeading = styled.h4`
  margin: 20px 0 0 0;
  font: normal normal normal 24px/29px "Gill Sans", sans-serif;
`

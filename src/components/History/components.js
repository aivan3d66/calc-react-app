import styled from 'styled-components'

export const History = styled.div`
  border-left: 2px solid #707070;
  color: ${props => props.schema.textColour};
  display: flex;
  flex-direction: column;
  height: 85%;
  margin: 0 auto;
  padding: 20px 0;
  width: 340px;

  h2, ul {
    font: normal normal normal 32px/38px "Gill Sans", sans-serif;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
    margin: 0;
    overflow: hidden;
    overflow-y: scroll;
    padding: 20px;
    text-align: left;
  }

  li {
    padding: 10px 0;
  }
`

import styled from 'styled-components'

export const History = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 80%;
  padding: 20px 0;
  margin: 0 auto;
  color: ${props => props.schema.textColour};
  border-left: 2px solid #707070;

  h2, ul {
    text-align: center;
    font: normal normal normal 32px/38px "Gill Sans", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding: 20px;
    text-align: left;
    list-style: none;
    overflow: hidden;
    overflow-y: scroll;
  }

  li {
    padding: 10px 0;
  }
`

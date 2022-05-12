import styled from 'styled-components'
import {NavLink} from "react-router-dom"

export const Header = styled.div`
  background-color: ${props => props.schema.headerColour};
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 120px;
  padding: 0 20px;
  margin: auto;
  color: #ffffff;


  h1, a {
    color: #ffffff;
    font: normal normal normal 32px/38px "Gill Sans", sans-serif;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: ${props => {
    return props.style ? isActive => (isActive ? "underline" : "none") : "none"
  }};
  &:hover {
    color: #bababa;
  }

  &[class*="active"]::before {
    position: absolute;
    bottom: -3px;
    content: '';
    width: 100%;
    height: 2px;
    color: #ffffff;
    background-color: #ffffff;
  }
`

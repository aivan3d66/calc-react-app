import styled from 'styled-components'
import {NavLink} from "react-router-dom"

export const Header = styled.div`
  background-color: ${props => props.schema.headerColour};
`

export const HeaderWrapper = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: auto;
  max-width: 1280px;
  padding: 0 20px;


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
    background-color: #ffffff;
    bottom: -3px;
    color: #ffffff;
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
  }
`

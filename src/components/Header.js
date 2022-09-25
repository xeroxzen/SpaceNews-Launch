import React from 'react'
import styled from "styled-components";
import { FaRocket} from 'react-icons/fa';

const  Header = () => {
  return (
    <NavBar>
      <Logo> SpaceNews <FaRocket/> </Logo>

      <Links>
        <Blog>Blog</Blog>
        <News>News</News>
        <Report>Report</Report>
      </Links>

    </NavBar>
  )
}

const NavBar = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  height: 7rem;
`
const Logo = styled.h1`
  margin: 3rem;
`

const Links = styled.div`
  display: Flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  padding: 4rem;
  font-size: 1.5rem
`

const Blog = styled.a`

`
const News = styled.a`

`

const Report = styled.a`

`

export default Header;
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { Article } from '@styled-icons/remix-line/Article'
import { Blog } from '@styled-icons/fa-solid/Blog'
import { DocumentReport } from '@styled-icons/heroicons-outline/DocumentReport'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'






const NavLinks = { 
    backgroundColor: "whitesmoke" ,
    color: "black",
    padding: "1rem",
    margin: "1rem",
    width: "2rem",
    border: "4px solid black",
}

const LinkStyle = {
    color: "blue",
    textDecoration: "none",
}

const LeftNav = () => {
  return (
    <Container>
        <Logo>
            <Link to='/'  style={LinkStyle}>SpaceNews </Link> 
        </Logo>
        <Links>
            <Link to ='/'> <Article style={NavLinks} /> </Link>
            <Link to='Blogs'> <Blog style={NavLinks} /> </Link>
            <Link to='/Reports'> <DocumentReport style={NavLinks} /> </Link>
            <Link to='/'> <FavoriteBorder style={NavLinks}  /> </Link>
        </Links>

        <SocialMedia>
            <Btn>Log In</Btn>
            <Btn>Sign Up</Btn>
       
        </SocialMedia>


    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
`
const Logo = styled.h1`
    display: flex;
    padding: 1rem;
    font-size: 2rem;
    border: 3px solid blue;
    color: blue;
    

`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

`

const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
`
const Btn = styled.button`

    background-color: whitesmoke;
    color: blue;
    border: 4px solid black;
    margin-bottom: 1.5rem;
    width: 10rem;
    height: 3rem;
    font-size: 1rem;
    font-family: 'Play', sans-serif;

`


export default LeftNav
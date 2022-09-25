import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { Article } from '@styled-icons/remix-line/Article'
import { Blog } from '@styled-icons/fa-solid/Blog'
import { DocumentReport } from '@styled-icons/heroicons-outline/DocumentReport'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { BookBookmark } from '@styled-icons/boxicons-regular/BookBookmark'
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle'
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle'
import { InstagramWithCircle  } from '@styled-icons/entypo-social/InstagramWithCircle'





const NavLinks = { 
    backgroundColor: "whitesmoke" ,
    color: "black",
    padding: "1rem",
    margin: "1rem",
    width: "2rem",
    border: "4px solid black",
}


const LeftNav = () => {
  return (
    <Container>
        <Logo>
            <Link to='/'>SpaceNews </Link> 
        </Logo>
        <Links>
            <Link to ='/'> <Article style={NavLinks} /> </Link>
            <Link to='Blogs'> <Blog style={NavLinks} /> </Link>
            <Link to='/Reports'> <DocumentReport style={NavLinks} /> </Link>
            <Link to='/'> <FavoriteBorder style={NavLinks}  /> </Link>
            <Link to='/'> <FavoriteBorder style={NavLinks}  /> </Link>
        </Links>

        <SocialMedia>

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
    

`


export default LeftNav
import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MediaQuiries } from "./MediaQuiries";

import { Article } from '@styled-icons/remix-line/Article'
import { Blog } from '@styled-icons/fa-solid/Blog'
import { DocumentReport } from '@styled-icons/heroicons-outline/DocumentReport'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';



const Navigation = () => {


    const [showMenu, setShowMenu] = useState(false);

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


    return (
        <Container>
            <nav className={`navbar`}>

                <ul className={`nav-menu ${showMenu && "active"}`}>
                    <li><Link to ='/'> <Article style={NavLinks} /> </Link> Articles</li>
                    <li><Link to='Blogs'> <Blog style={NavLinks} /> </Link> Blogs</li>
                    <li><Link to='/Reports'> <DocumentReport style={NavLinks} /> </Link> Reports</li>
                </ul>

                <Btn onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? (<FaTimes className="icons"/>) : (<GiHamburgerMenu className="icons"/>)}
                </Btn>
            </nav>

            <Logo>
                <Link to='/'  style={LinkStyle}>SpaceNews </Link> 
            </Logo>
        </Container>
    )
    }

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    height: 10vh;
    .nav-menu {
        position: absolute;
        left: -110%;
        top: 8rem;
        flex-direction: column;
        background:red
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 10vw;
        height: 100vh;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

        
        @media ${MediaQuiries.mobileS} {
                width: 15rem;   
            }
}
        .nav-menu.active {
            left: 0;
        }
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding-bottom: 2.5rem;
            padding-top: 2.5rem;
        }
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 1.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid black;
            color: blue;
        }
`
const Logo = styled.h1`
    display: flex;
    padding: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
    border: 3px solid blue;
    color: blue;
`
const Btn = styled.button`
    margin-left: 2rem;
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
    }
`




export default Navigation
import React from "react";
import styled from "styled-components";

import { BookBookmark } from '@styled-icons/boxicons-regular/BookBookmark'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'

const style = { 
  backgroundColor: "whitesmoke" ,
  color: "black",
  padding: "2rem",
  margin: "1rem",
  width: "2rem",
  border: "4px solid black",

}

const Article = ({title, newsSite, summary, url, imageUrl, publishedAt}) => {
  return (
    <Container>

      <TopInformation>
        <NewSite>{newsSite}</NewSite>
      </TopInformation>
      
      <CenterInformation>
        <Image src={imageUrl} alt="" />

        <HoverDetails>
            <FavoriteBorder style={style}  /> 
            <BookBookmark style={style}  /> 
        </HoverDetails>

      </CenterInformation>
      

      <BottomInformation>
        <Summary>{`${summary.substring( 0, 150 )}...`}</Summary>
        <Btn>
          <a href={url}>Read more</a>
          </Btn>
      </BottomInformation>
      
     
    </Container>
  );
};


const Container = styled.div`
 width: 80%;
 height: 60vh;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  margin: 2.5rem;




`
const TopInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  font-family: 'Abril Fatface', cursive;
  letter-spacing: 4px;
  word-spacing: 5px;
  
`
const CenterInformation = styled.div`
  position: relative;
`
const HoverDetails = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: white;
  font-size: 16px;
  padding: 16px 32px;

  :hover{
    opacity: 1;
  }
`


const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: 30vh;
  transition: .5s ease;
  backface-visibility: hidden;

  :hover{
    opacity: 0.3;
  }
`
const Title = styled.h1`
  font-size: 1rem;
  color: gold;

`
const PublishedAt = styled.p`
  font-size: 1rem;
  color: gold;

`

const BottomInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20vh;
`



const NewSite = styled.h2`
  font-size: 2rem;
  color: blue;
`


const Summary = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
  font-family: 'Play', sans-serif;
  word-spacing: 4px;
  letter-spacing: 2px;
  color: blue;
`
const Btn = styled.button`
  background-color: whitesmoke;
  color: blue;
  font-size: 16px;
  font-family: 'Play', sans-serif;
  padding: 16px 32px;
  word-spacing: 6px;
  letter-spacing: 3px;
  border: 4px solid black;
  margin-top: 1.5rem;

  :hover{
    background-color: black;
    border: 4px solid blue;

  }


`
export default Article;

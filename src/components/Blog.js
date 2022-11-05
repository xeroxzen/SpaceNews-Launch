import React from "react";
import styled from "styled-components";

const LinkStyle = {
  color: "blue",
  textDecoration: "none",
}

const Article = ({newsSite, summary, url, imageUrl}) => {
  return(
    <Container>

    <TopInformation>
      <NewSite>{newsSite}</NewSite>
    </TopInformation>
    
    <CenterInformation>
      <Image src={imageUrl} alt="" />
    </CenterInformation>
    

    <BottomInformation>
      <Summary>{`${summary.substring( 0, 150 )}...`}</Summary>

      <SubBottom>
        <Btn>
          <a href={url} target="_blank" rel="noopener noreferrer"  style={LinkStyle} >Read more</a>
        </Btn>
      </SubBottom>
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


`


const Image = styled.img`

display: block;
width: 100%;
height: 30vh;
transition: .5s ease;
backface-visibility: hidden;

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
const SubBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`

export default Article;

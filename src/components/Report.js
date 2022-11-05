import React from "react";
import styled from "styled-components";

const LinkStyle = {
  color: "blue",
  textDecoration: "none",
}


const Article = ({ newsSite, summary, url, imageUrl }) => {
  return (
    <Container>
      <Information>
        <TopInformation>
          <NewSite>{newsSite}</NewSite>
        </TopInformation>

        <BottomInformation>
          <Summary>{`${summary.substring(0, 250)}...`}</Summary>
          <Btn>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={LinkStyle}
            >
              Read more
            </a>
          </Btn>
        </BottomInformation>
      </Information>
    </Container>
  );
};


const Container = styled.div`
display: flex;
width: 90%;
height: 40vh;
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
padding: 3rem;
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
const Information = styled.div`
  flex-direction: column;
`

export default Article;

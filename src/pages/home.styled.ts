import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin-top: 350px;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${fadeIn} 1s ease-in-out forwards;

  &.animate-entry {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PersonDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 400px;
  padding-left: 60px;
  cursor: default;

  h1 {
    font-weight: bold;
    color: aliceblue;
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    margin-left: 65px;
  }

  h2 {
    font-family: 'League Spartan', sans-serif;
    margin-left: 100px;
    margin-top: -15px;
    margin-left: 200px;
    font-size: 40px;
    color: #8AFAFF;
  }
`;

export const PersonText = styled.div`
  width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;

  span {
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    word-wrap: break-word;
    color: aliceblue;
    font-size: 16px;
  }
`;

export const PersonLogo = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AnimatedImage = styled.img`
  width: 120px;
  height: 120px;
  cursor: default;
  transition: transform 0.3s ease-in-out, border-radius 0.5s ease-in-out;
  background-color: white;
  border-radius: 30%;

  &:hover {
    animation: moveUpDown 1.5s ease-in-out infinite;
    transform: translateY(-10px);
    border-radius: 0;
  }

  @keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;


export const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;

  
`;

export const TextProjectsContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span{
    font-family: 'League Spartan', sans-serif;
    font-size: 40px;
    color: #8AFAFF;
  }
`;

export const Projects = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 800px ;
margin-top: 200px;
background-color: green;

`;


export const LeftContainer = styled.div`
  float: left; 
  margin-right: 20px; 
  margin-left: 100px;
`;

export const RightContainer = styled.div`
  float: right; 
  margin-left: 20px; 
  margin-right: 100px;
`;

export const ImagePage = styled.img`
width: 300px;
height: 450px;
border-radius: 20px;
`;

export const AnimatedPage = styled.div`
width: 300px;
height: 200px;
`;

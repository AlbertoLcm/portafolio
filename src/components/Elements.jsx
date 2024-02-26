import styled, { css } from "styled-components";

export const P = ({ gray, children }) => {
  return gray
    ? <StyledP gray> {children} </StyledP>
    : <StyledP> {children} </StyledP>
}
export const Card = ({ title, description, image }) => {
  return <StyledCard image={image}>  </StyledCard>
}
export const Main = ({ children }) => <StyledMain> {children} </StyledMain>
export const Section = ({ children }) => <StyledSection> {children} </StyledSection>
export const Body = ({ children }) => <StyledBody> {children} </StyledBody>
export const H1 = ({ children }) => <StyledH1> {children} </StyledH1>
export const H2 = ({ children }) => <StyledH2> {children} </StyledH2>
export const Other = ({ name, children }) => <StyledOther name={name}> {children} </StyledOther>

const StyledOther = styled.section`
  position: relative;
  padding: 35px 0px 35px 25px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<${props => props.name}>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</${props => props.name}>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
`;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 200px;
  padding: 20px;
  z-index: -1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::before{
    position: absolute;
    cursor: pointer;
    content: '';
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #000000a8;
    z-index: 1;
    transition: all 0.3s;
  }
  &:hover::before{
    background-color: transparent;
  }
`;
const StyledSection = styled.section`
  position: relative;
  padding: 35px 0px 35px 25px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<section>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</section>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
`;
const StyledMain = styled.div`
  position: relative;
  padding: 50px 0px 50px 40px;
  &::before{
    position: absolute;
    left: 20px;
    top: 20px;
    content: '<html>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 20px;
    bottom: 20px;
    content: '</html>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  @media (max-width: 768px) {
    padding: 50px 20px 50px 20px;
  }
`;
const StyledBody = styled.div`
  position: relative;
  padding: 40px 0px 40px 20px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<body>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</body>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  @media (max-width: 768px) {
    padding: 40px 0px 40px 0px;
  }
`;
const StyledH1 = styled.h1`
  position: relative;
  padding: 20px 0px 20px 20px;
  line-height: 1;
  user-select: none;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<h1>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</h1>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
`;
const StyledH2 = styled.h2`
  position: relative;
  padding: 20px 0px 20px 20px;
  background: tomato;
  line-height: 1;
  background: linear-gradient(90deg, #BD0C7A, #00E1FF);
  -webkit-background-clip: text;
  color: transparent;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<h2>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
    text-shadow: none;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</h2>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
    text-shadow: none;
  }
`;
const StyledP = styled.p`
  ${props => props.gray && css`
    font-size: 1.1em;
    color: #5f5f5f;
  `}
  position: relative;
  padding: 25px 0px 25px 25px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<p>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</p>';
    font-family: 'Fasthand', cursive;
    font-size: 1rem;
    color: #5f5f5f;
  }
`;
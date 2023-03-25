import styled, { css } from "styled-components";

export const P = ({ gray, children }) => {
  return gray
    ? <StyledP gray> {children} </StyledP>
    : <StyledP> {children} </StyledP>
}
export const Section = ({ children }) => <StyledSection> {children} </StyledSection>
export const Sector = ({ children }) => <StyledSector> {children} </StyledSector>
export const Main = ({ children }) => <StyledMain> {children} </StyledMain>
export const Body = ({ children }) => <StyledBody> {children} </StyledBody>
export const H1 = ({ children }) => <StyledH1> {children} </StyledH1>
export const H2 = ({ children }) => <StyledH2> {children} </StyledH2>

const StyledMain = styled.div`
  position: relative;
  padding: 50px 200px 50px 40px;
  font-size: 20px;
  background-color: ${props => props.theme.background};
  &::before{
    position: absolute;
    left: 20px;
    top: 20px;
    content: '<html>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 20px;
    bottom: 20px;
    content: '</html>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledBody = styled.div`
  position: relative;
  font-size: 20px;
  padding: 40px 0px 40px 20px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<body>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</body>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledH1 = styled.h1`
  position: relative;
  padding: 20px 0px 20px 20px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<h1>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</h1>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledH2 = styled.h2`
  position: relative;
  padding: 20px 0px 20px 10px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<h2>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</h2>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledP = styled.p`
  ${props => props.gray && css`
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
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</p>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledSection = styled.section`
  position: relative;
  padding: 25px 0px 25px 25px;
  &::before{
    position: absolute;
    left: 0px;
    top: 0px;
    content: '<section>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
  &::after{
    position: absolute;
    left: 0px;
    bottom: 0px;
    content: '</section>';
    font-family: 'Fasthand', cursive;
    font-size: 1.375rem;
    color: #5f5f5f;
  }
`;
const StyledSector = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
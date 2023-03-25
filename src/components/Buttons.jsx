import styled, { keyframes } from "styled-components";

export const ButtonPrimary = ({ children }) => <StyledButtonPrimary> {children} </StyledButtonPrimary>
export const ButtonSecundary = ({ children }) => <StyledButtonSecundary> {children} </StyledButtonSecundary>

const neonTextPrimary = keyframes`
  0% {
    color: #ffd993;
  }
  10% {
    box-shadow: inset 0 0 60px orange;
    color: #fff;
  }
`;
const neonPrimary = keyframes`
  0% {
    border: 3px solid #f3f3f3be;
  }
  10% {
    box-shadow: 0 0 40px orange;
    border: 3px solid #fff;
  }
`;
const StyledButtonPrimary = styled.button`
  color: #ffd993;
  font-weight: 600;
  position: relative;
  box-shadow: inset 0 0 50px orange;
  background: transparent;
  border: 3px solid orange;
  &::before{
    content: '';
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    top: -3px;
    left: -3px;
    filter: blur(1px);
    box-shadow: 0 0 30px orange;
    border: 3px solid #f3f3f3be;
  }
  &:hover::before{
    animation: ${neonPrimary} 0.5s ease-in-out infinite alternate;
  }
  &:hover{
    animation: ${neonTextPrimary} 0.5s ease-in-out infinite alternate;
  }
`;

const neonTextSecundary = keyframes`
  0% {
    color: #f191cc;
  }
  10% {
    box-shadow: inset 0 0 60px #BD0C7A;
    color: #fff;
  }
`;
const neonSecundary = keyframes`
  0% {
    border: 3px solid #f3f3f3be;
  }
  10% {
    box-shadow: 0 0 40px #BD0C7A;
    border: 3px solid #fff;
  }
`;
const StyledButtonSecundary = styled.button`
  color: #f191cc;
  text-shadow: 0 0 15px #f55ab9;
  font-weight: 600;
  position: relative;
  box-shadow: inset 0 0 50px #BD0C7A;
  background: transparent;
  border: 3px solid #BD0C7A;
  &::before{
    content: '';
    position: absolute;
    background-color: transparent;
    border-radius: 1.25rem;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    filter: blur(1px);
    box-shadow: 0 0 30px #BD0C7A;
    border: 3px solid #f3f3f3be;
  }
  &:hover::before{
    animation: ${neonSecundary} 0.5s ease-in-out infinite alternate;
  }
  &:hover{
    animation: ${neonTextSecundary} 0.5s ease-in-out infinite alternate;
  }
`;
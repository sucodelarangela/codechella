import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryBlue};
  border: none;
  border-radius: 1rem;
  box-shadow: 4px 4px 0px #444444;
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 700;
  gap: 1rem;
  margin: 0 auto 2rem;
  padding: 1rem;
  width: 100%;
  & svg {
    fill: #FFF;
  }
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
  @media screen and (min-width: 768px) {
      width: fit-content;
  }
`;

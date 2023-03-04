import styled from "styled-components";

export const BasicSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  & div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  & img {
    border-radius: 1rem;
    object-fit: cover;
    height: 23.75rem;
  }
  & h2 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
  }
  & p {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 3rem;
    & img {
      min-width: 38rem;
    }
    & div {
      margin: auto;
    }
  }
`;

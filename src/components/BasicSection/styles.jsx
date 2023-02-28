import styled from "styled-components";

export const BasicSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  & img {
    border-radius: 1rem;
    object-fit: cover;
    height: 23.75rem;
    margin-bottom: 0.5rem;
    /* width: 100%; */
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
`;

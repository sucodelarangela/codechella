import styled from "styled-components";

export const LineUp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  text-align: center;
  & h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.primaryGreen};
    color: #FFF;
    font-family: var(--calistoga);
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  & .lineup {
    text-align: center;
    line-height: 300%;
    & h3 {
      font-size: 3rem;
      font-weight: 800;
    }
    & h4 {
      font-size: 2.5rem;
      font-weight: 700;
    }
    & h5 {
      font-size: 2rem;
      font-weight: 700;
    }
    & h6 {
      font-size: 2rem;
      font-weight: 500;
    }
    & h4:nth-child(2), h5:nth-child(2) {
      margin-bottom: 2rem;
    }
  }
`;

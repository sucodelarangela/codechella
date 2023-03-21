import styled from "styled-components";

export const Ticket = styled.section`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 49.5rem;
  & .header {
    display: flex;
    justify-content: space-between;
    & img {
      height: 2rem;
      filter: invert(${({ theme }) => theme.invert});
    }
  }
  & .info {
    display: grid;
    grid-auto-flow: row;
    gap: 2rem;
    margin-top: 2rem;
    & img {
      padding: 0 2rem;
      margin: 0 auto;
      width: 100%;
      max-width: 20rem;
    }
    & div {
      display: grid;
      justify-items: center;
      & h2 {
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 1rem;
      }
      & p {
        line-height: 2.5rem;
      }
    }
    @media screen and (min-width: 1280px) {
      grid-auto-flow: column;
      grid-template-columns: max-content;
      gap: 3rem;
      & img {
        padding: 0;
        max-height: 14rem;
      }
      & div {
        justify-items: left;
      }
    }
  }
`;

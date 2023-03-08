import styled from "styled-components";

export const BasicSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
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
  &.sector_details > img {
    height: 15rem;
  }
  @media screen and (min-width: 768px) {
    &.sector_details > img {
      width: 24rem;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 3rem;
    padding: 4rem 0;
    max-width: 1280px;
    &.experience {
    text-align: left;
      &:nth-of-type(2) {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
    &.sector_details {
      flex-direction: column;
      width: 100%;
      & img {
        min-width: unset;
      }
    }
    & img {
      min-width: 38rem;
    }
    & div {
      margin: auto;
    }
  }
`;

import styled from "styled-components";
import { Title } from "pages/Home/styles";

const MapSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  padding: 2rem 0;
  & img {
      width: 100%;
      max-width: 43rem;
      padding-bottom: 2rem;
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.25rem;
    justify-self: center;
    & h4 {
      font-weight: 700;
    }
    & li {
      display: flex;
      font-weight: 500;
      align-items: center;
      gap: 1rem;
      & span {
        display: inline-block;
        width: 32px;
        height: 32px;
      }
      &:first-of-type > span {
        background-color: #0E7DF1;
      }
      &:nth-of-type(2) > span {
        background-color: #FE016E;
      }
      &:nth-of-type(3) > span {
        background-color: #01A89E;
      }
      &:nth-of-type(4) > span {
        background-color: #3F51B5;
      }
      &:last-of-type > span {
        background-image: url('/wheel-chair.png');
      }
    }
  }
  @media screen and (min-width: 768px) {
    & img {
      margin: 0 auto;
    }
    & ul > h4 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    gap: 3rem;
  }
`;

const SectorsTitle = styled(Title)`
  font-family: var(--raleway);
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const DetailSection = styled.section`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    align-items: start;
    justify-items: center;
    & section:nth-child(2) {
      margin-top: 6.625rem;
    }
  }
`;

export { DetailSection, MapSection, SectorsTitle };

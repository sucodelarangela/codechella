import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  & .social {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    & img {
      filter: invert(${(props) => props.invert});
      width: 14rem;
    }
    & p {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2.5rem;
    }
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
  & p {
    text-align: center;
  }
`;

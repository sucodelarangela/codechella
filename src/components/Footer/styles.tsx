import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.footerBgColor};
  padding: 1.5rem;
  & .social {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    & img {
      filter: invert(${({ theme }) => theme.invert});
      width: 14rem;
    }
    & > div {
      display: flex;
      flex-direction: column;
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
        & a > svg:hover {
          filter: invert(80%);
        }
      }
    }
  }
  & p {
    text-align: center;
  }
  & a.link {
    color: inherit;
    font-weight: 700;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-bottom: 2px solid;
      width: 0%;
      transition: 0.3s width;
    }
    &:hover::before, &:focus::before {
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    & .social > div {
      flex-direction: row;
      gap: .5rem;
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 3.125rem 7.5rem;
    & .social {
      align-items: flex-start;
      & > div {
        justify-content: start;
        & p {
          width: fit-content;
        }
      }
    }
    & p {
      text-align: left;
      width: 20.375rem;
    }
  }
`;

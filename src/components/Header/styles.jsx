import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryBlue};
  padding: 2rem 1.5rem;
  position: relative;
  width: 100%;
  & img {
    width: 14rem;
  }
  .nav {
    display: none;
  }
  nav:not(.nav) {
    background: ${({ theme }) => theme.primaryBlue};
    width: 12.5rem;
    padding: 1rem;
    position: absolute;
    top: 8rem;
    right: 0;
    z-index: 10;
  }
  ul {
    text-align: center;
    & li {
      color: #fff;
      cursor: pointer;
      font-weight: 700;
      line-height: 2.5rem;
      font-size: 1.25rem;
      padding: 0.5rem 0;
      position: relative;
      &:not(:last-child)::after {
        content: "";
        position: absolute;
        width: 9rem;
        height: 1px;
        background: #fff;
        bottom: 0;
        left: 50%;
        transform: translatex(-50%)
      }
    }
    }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 3.75rem;
    img {
      margin-bottom: 2rem;
    }
    .hamburger-react {
      display: none;
    }
    & .nav {
      display: block;
      width: 100%;
      & ul {
        display: flex;
        justify-content: space-between;
        & li {
          padding: 0;
          font-size: 1.125rem;
          &:not(:last-child)::after {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem 7.5rem;
    img {
      margin: 0;
    }
    .nav {
      width: fit-content;
      & ul {
        gap: 2rem;
        & li {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

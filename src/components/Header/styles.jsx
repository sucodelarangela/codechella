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
  & nav {
    background: ${({ theme }) => theme.primaryBlue};
    width: 12.5rem;
    padding: 1rem;
    position: absolute;
    top: 8rem;
    right: 0;
    & ul {
      list-style: none;
      text-align: center;
      & li {
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        line-height: 2.5rem;
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
  }
`;

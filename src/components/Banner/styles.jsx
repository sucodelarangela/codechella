import styled from "styled-components";

export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ theme }) => theme.bgImgRgba};
  text-align: center;
  height: 16.875rem;
  width: 100%;
  padding: 1.5rem;
  position: relative;
  &::before {
    content: '';
    background-image: url(${props => props.banner});
    background-position: center;
    background-size: cover;
    inset: 0;
    opacity: ${({ theme }) => theme.opacity};
    position: absolute;
    z-index: -1;
  }
  & h2 {
    font-family: var(--calistoga);
    font-size: 2rem;
  }
  @media screen and (min-width: 768px) {
    height: 24rem;
    & h2 {
      font-size: 4rem;
    }
  }
  @media screen and (min-width: 1280px) {
    height: 25rem;
  }
`;

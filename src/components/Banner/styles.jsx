import styled from "styled-components";

export const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 16.875rem;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    background-image: url(${props => props.banner});
    background-position: center;
    background-size: cover;
    inset: 0;
    opacity: ${props => props.banner.includes('summer-home') ? 0.6 : 1};
    position: absolute;
    z-index: -1;
  }
  & h2 {
    font-family: var(--calistoga);
    font-size: 2rem;
  }
`;

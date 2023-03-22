import styled from "styled-components";

export const Image = styled.div`
display: flex;
  background-image: ${({ theme }) => theme.bgImgRgba};
  height: 30rem;
  width: 100%;
  margin: 1.5rem 0;
  position: relative;
  &::before {
    content: '';
    background-image: url('./404.jpg');
    background-position: center;
    background-size: cover;
    mix-blend-mode: multiply;
    border-radius: 1rem;
    inset: 0;
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 1280px) {
    height: 40rem;
    margin: 3rem 0 4rem;
  }
`;

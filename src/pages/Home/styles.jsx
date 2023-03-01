import styled from "styled-components";

const Title = styled.h2`
  display: inline-block;
  font-family: var(--calistoga);
  font-size: 3rem;
  margin: 2rem 0;
  text-align: center;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  mix-blend-mode: multiply;
  height: 21rem;
  width: 100%;
`;

export { Title, Image };

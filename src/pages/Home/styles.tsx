import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "components/Button/styles";

const Title = styled.h2`
  display: inline-block;
  font-family: var(--calistoga);
  font-size: 3rem;
  margin: 2rem 0;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  object-fit: cover;
  mix-blend-mode: multiply;
  height: 21rem;
  width: 100%;
`;

const NewLink = styled(Button).attrs({ as: Link })`
  
`;

export { Title, Image, NewLink };

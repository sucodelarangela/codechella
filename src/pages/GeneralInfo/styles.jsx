import styled from "styled-components";
import { boreal, summer } from "styles/themes";
import { Title } from "pages/Home/styles";

const InfoTitle = styled(Title)`
  font-size: 2rem;
  margin: 3rem 0;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Section = styled.section`
  margin: 0 auto 3rem;
  max-width: 62.25rem;
  .accordion {
    & .mantine-Accordion-content {
      background-color: ${summer.secondary};
      color: ${summer.textColor};
      line-height: 2.5rem;
      font-size: 1.5rem;
      padding-top: 1rem;
      & > a {
        color: ${summer.textColor};
        text-decoration: underline;
        &:hover, &:focus {
          color: ${({ theme }) => theme.primaryBlue};
        }
      }
    }
    & .mantine-Accordion-control {
      background-color: ${({ theme }) => theme.primaryBlue};
    }
    & .mantine-Accordion-item {
      border: none;
    }
    & .mantine-Accordion-label {
      color: #FFF;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export { InfoTitle, Section };

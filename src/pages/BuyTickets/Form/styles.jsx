import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50rem;
  padding-bottom: 2rem;
  & fieldset {
    border: none;
    & label, & input, & select {
        display: block;
        width: 100%;
      }
  }
  & label {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: .5rem;
  }
  & input, select {
    display: block;
    background: #FFF;
    border: none;
    color: #444;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    padding: 0.625rem;
  }
  & option {
    color: #444;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 1280px) {
    & fieldset {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 1.5rem;
      border: none;
      & label, & input, & select {
        display: block;
        width: 100%;
      }
    }
  }
`;

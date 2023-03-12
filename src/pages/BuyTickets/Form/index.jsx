import * as S from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowForward } from 'react-icons/md';
import { Input } from "components/Input";
import { Button } from "components/Button";

export const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    ticket: '',
    date: ''
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/your-ticket');
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        label='Nome completo:'
        id='name'
        placeholder='Insira seu nome'
        type='text'
        value={values}
        onChange={(e) => handleChange(e)}
      />
      <Input
        label='Email:'
        id='email'
        placeholder='Insira seu e-mail'
        type='email'
        value={values}
        onChange={(e) => handleChange(e)}
      />
      <fieldset>
        <div>
          <Input
            label='Tipo de ingresso:'
            id='ticket'
            placeholder='Tipo de ingresso'
            type='select'
            onChange={(e) => handleChange(e)}
          >
            <option value="fullPrice">Inteira</option>
            <option value="halfPrice">Meia-entrada</option>
          </Input>
        </div>
        <div>
          <Input
            label='Data de nascimento:'
            id='date'
            type='date'
            value={values}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </fieldset>
      <Button type="submit">Avançar! <MdArrowForward size={32} /></Button>
    </S.Form>
  );
};

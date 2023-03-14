import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from 'utils/yupSchema';
import { Button } from 'components/Button';

export const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(yupSchema) });

  function handleSubmit(data) {
    navigate('/your-ticket');
  }

  return (
    <S.Form onSubmit={onSubmit(handleSubmit)}>
      <label htmlFor='name'>Nome completo:</label>
      <input
        className={errors?.name && 'error'}
        id='name'
        placeholder='Insira seu nome'
        type='text'
        {...register('name')}
      />
      {errors.name && <span className='error'>{errors.name.message}</span>}
      <label htmlFor='email'>Email:</label>
      <input
        className={errors?.email && 'error'}
        id='email'
        placeholder='Insira seu e-mail'
        type='email'
        {...register('email')}
      />
      {errors.email && <span className='error'>{errors.email.message.includes('valid') ? 'Formato de e-mail inválido.' : 'Campo obrigatório.'}</span>}
      <fieldset>
        <div>
          <label htmlFor='sector'>Setor:</label>
          <select
            className={errors?.sector && 'error'}
            defaultValue=''
            id='sector'
            {...register('sector')}
          >
            <option value=''>Escolha um setor</option>
            <option value='Pista Premium'>Pista Premium</option>
            <option value='Pista Comum'>Pista Comum</option>
            <option value='Cadeiras Térreo'>Cadeiras Térreo</option>
            <option value='Cadeiras Superiores'>Cadeiras Superiores</option>
          </select>
          {errors.sector && <span className='error'>{errors.sector.message}</span>}
        </div>
        <div>
          <label htmlFor='showDate'>Data do evento:</label>
          <select
            className={errors?.showDate && 'error'}
            defaultValue=''
            id='showDate'
            {...register('showDate')}
          >
            <option value=''>Data do evento</option>
            <option value='11/03'>11 de Março</option>
            <option value='12/03'>12 de Março</option>
          </select>
          {errors.showDate && <span className='error'>{errors.showDate.message.includes('Invalid') ? 'Data inválida.' : errors.showDate.message}</span>}
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor='ticket'>Tipo de ingresso:</label>
          <select
            className={errors?.ticket && 'error'}
            defaultValue=''
            id='ticket'
            {...register('ticket')}
          >
            <option value='' disabled>Tipo de ingresso</option>
            <option value='Inteira'>Inteira</option>
            <option value='Meia-entrada'>Meia-entrada</option>
          </select>
          {errors.ticket && <span className='error'>{errors.ticket.message}</span>}
        </div>
        <div>
          <label htmlFor='date'>Data de nascimento:</label>
          <input
            className={errors?.date && 'error'}
            id='date'
            type='date'
            {...register('date')}
          />
          {errors.date && <span className='error'>{errors.date.message.includes('Invalid') ? 'Formato de data inválido' : errors.date.message}</span>}
        </div>
      </fieldset>
      <Button type='submit'>Avançar! <MdArrowForward size={32} /></Button>
    </S.Form>
  );
};

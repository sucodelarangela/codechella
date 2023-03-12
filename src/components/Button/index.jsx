import * as S from './styles';

export const Button = ({ children, type }) => {
  return (
    <S.Button type={type}>{children}</S.Button>
  );
};

import * as S from './styles';

export const Button = ({ children, wide }) => {
  return (
    <S.Button className={wide}>{children}</S.Button>
  );
};

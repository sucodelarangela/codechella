import { ReactElement } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <S.Button type={type}>{children}</S.Button>
  );
};

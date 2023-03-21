import { ReactElement } from 'react';
import * as S from './styles';

interface BasicSectionProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  className: string;
  children: ReactElement | string;
}

export const BasicSection = ({ src, alt, title, text, className, children }: BasicSectionProps) => {
  return (
    <S.BasicSection className={className}>
      <img src={src} alt={alt} aria-hidden={alt === '' ? true : false} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </S.BasicSection>
  );
};

import * as S from './styles';

export const BasicSection = ({ src, alt, title, text }) => {
  return (
    <S.BasicSection>
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{text}</p>
    </S.BasicSection>
  );
};

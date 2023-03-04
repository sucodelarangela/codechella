import * as S from './styles';

export const BasicSection = ({ src, alt, title, text, children }) => {
  return (
    <S.BasicSection>
      <img src={src} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </S.BasicSection>
  );
};

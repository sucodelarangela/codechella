import * as S from './styles';

export const BasicSection = ({ src, alt, title, text, className, children }) => {
  return (
    <S.BasicSection className={className}>
      <img src={src} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </S.BasicSection>
  );
};

import * as S from './styles';

export const LineUp = ({ lineup }) => {
  return (
    <S.LineUp>
      <h2>{lineup.date}</h2>
      <div className="lineup">
        {lineup.level1.map(band => <h3 key={band}>{band}</h3>)}
      </div>
      <div className="lineup">
        {lineup.level2.map(band => <h4 key={band}>{band}</h4>)}
      </div>
      <div className="lineup">
        {lineup.level3.map(band => <h5 key={band}>{band}</h5>)}
      </div>
      <div className="lineup">
        {lineup.level4.map(band => <h6 key={band}>{band}</h6>)}
      </div>
    </S.LineUp>
  );
};

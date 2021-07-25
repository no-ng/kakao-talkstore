import { FunctionComponent, useMemo } from 'react';
import useTimer from '../../hooks/use-timer';
import { Brand } from './brand.slice';
import { _BrandCard } from './brand.style';

interface Props {
  data: Brand;
}

const BrandCard: FunctionComponent<Props> = ({ data }) => {
  const { day, time } = useTimer(data.remainSeconds);
  const {
    copyContents,
    mainImageUrl,
    brandStore: { storeName },
  } = useMemo(() => data, [data]);

  return (
    <_BrandCard>
      <div className="main_brand">
        <span className="thumb_main">
          <img
            className="img_thumb"
            id="thumb_87"
            src={mainImageUrl}
            alt={storeName}
            style={{ width: '100%' }}
          />
        </span>
        <span className="info_brand">
          <strong className="tit_brand">
            <pre>{copyContents}</pre>
          </strong>
          <span className="txt_time">{day ? `${day}일 ${time}` : time} 남음</span>
        </span>
      </div>
    </_BrandCard>
  );
};

export default BrandCard;

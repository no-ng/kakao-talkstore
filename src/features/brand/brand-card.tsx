import { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import useTimer from '../../hooks/use-timer';
import { headerHeight } from '../../styles/util';
import { Brand } from './brand.slice';
import { _BrandCard } from './brand.style';

interface Props {
  data: Brand;
  selectedBrandId?: string;
}

const BrandCard: FunctionComponent<Props> = ({ data, selectedBrandId }) => {
  const brandRef = useRef<HTMLDivElement>(null);
  const { day, time } = useTimer(data.remainSeconds);
  const {
    id,
    copyContents,
    mainImageUrl,
    brandStore: { storeName },
  } = useMemo(() => data, [data]);

  useEffect(() => {
    if (id === Number(selectedBrandId)) {
      const top = (brandRef.current?.getBoundingClientRect().top ?? 0) - headerHeight;

      window.scrollTo(0, top);
    }
  }, [selectedBrandId]);

  return (
    <_BrandCard>
      <div className="main_brand" ref={brandRef}>
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

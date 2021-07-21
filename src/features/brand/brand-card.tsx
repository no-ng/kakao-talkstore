import { FunctionComponent } from 'react';
import useTimer from '../../hooks/use-timer';

interface Props {
  remainSeconds: number;
}

const BrandCard: FunctionComponent<Props> = ({ remainSeconds }) => {
  const { day, time } = useTimer(remainSeconds);

  return (
    <div className="main_brand">
      <span>{day ? `${day} ${time} 남음` : time}</span>
      <span className="thumb_main">
        <img
          className="img_thumb"
          id="thumb_87"
          src="https://st.kakaocdn.net/shoppingstore/home/brands/20210701155059_b72f65b4a39947029db32a82e5e8e255.png"
          alt="쿤달 KUNDAL"
          style={{ width: '100%' }}
        />
      </span>
    </div>
  );
};

export default BrandCard;

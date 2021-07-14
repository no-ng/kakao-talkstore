import Link from 'next/link';
import { useSelector } from 'react-redux';
import Timer from '../../components/timer';
import _SpecialCard from './special-card.style';
import { selectSpecialCard } from './talkdeal.slice';

const SpecialCard = () => {
  const specialCard = useSelector(selectSpecialCard);

  if (!specialCard) {
    return <div />;
  }

  const coupon = specialCard?.specialCardCoupon;
  const nf = new Intl.NumberFormat();

  return (
    <_SpecialCard specialCard={specialCard}>
      <Link href={`/promotion/${specialCard?.id}`}>
        <a>
          <img src={specialCard?.firstImageUrl} />
          <span className="top">
            {coupon && (
              <span className="badge">
                쿠폰<span>{coupon.value}%</span>
              </span>
            )}
            <span className="timer">
              <Timer remainSeconds={specialCard.remainSeconds} opener={'talkdeal'} />
            </span>
          </span>
          <span className="down">
            <span className="title">{specialCard.specialCardTitle}</span>
            <strong
              className="desc"
              dangerouslySetInnerHTML={{
                __html: specialCard.specialCardDescription.replace(/\\n/g, '<br />'),
              }}
            ></strong>
            <span className="price">
              <span className="special">
                톡딜가 {nf.format(Number(specialCard.specialCardSlot1))}원
              </span>
              <span className="regular">
                {nf.format(Number(specialCard.specialCardSlot2))}원
              </span>
            </span>
          </span>
        </a>
      </Link>
    </_SpecialCard>
  );
};

export default SpecialCard;

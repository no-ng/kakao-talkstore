import { Duration } from 'luxon';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import _SpecialCard from './special-card.style';
import TalkdealTimer from './talkdeal-timer';
import { selectSpecialCard } from './talkdeal.slice';

const SpecialCard = () => {
  const specialCard = useSelector(selectSpecialCard);

  if (!specialCard || specialCard?.remainSeconds <= 0) {
    return <div />;
  }

  const nf = new Intl.NumberFormat();

  const coupon = specialCard?.specialCardCoupon;

  const remainSec = Duration.fromObject({ seconds: specialCard.remainSeconds });
  const showTimer = remainSec.days < 1;
  const impended = remainSec.hours < 2;

  return (
    <_SpecialCard specialCard={specialCard}>
      <Link href={`/promotion/${specialCard?.id}`}>
        <a>
          <img src={specialCard?.firstImageUrl} />
          <span className="top">
            {coupon?.value && (
              <span className="badge">
                쿠폰
                {coupon?.unit === 'RATE' ? (
                  <span>{coupon.value}%</span>
                ) : (
                  <>
                    <span>{nf.format(coupon.value)}</span>원
                  </>
                )}
              </span>
            )}
            {showTimer && (
              <TalkdealTimer
                impended={impended}
                remainSeconds={specialCard.remainSeconds}
              />
            )}
          </span>
          <span className="down">
            <span className="title">{specialCard.specialCardTitle}</span>
            <strong
              className="desc"
              dangerouslySetInnerHTML={{
                __html: specialCard.specialCardDescription.replace(/\n/g, '<br />'),
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

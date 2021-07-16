import { motion } from 'framer-motion';
import { Duration } from 'luxon';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Timer from '../../components/timer';
import _SpecialCard from './special-card.style';
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
              <motion.span
                className={`timer ${impended && 'impended'}`}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  times: [0, 0.8, 1],
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: 'circIn',
                }}
              >
                <Timer remainSeconds={specialCard.remainSeconds} opener={'talkdeal'} />{' '}
                남음
              </motion.span>
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

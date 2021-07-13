import Link from 'next/link';
import { useSelector } from 'react-redux';
import _SpecialCard from './special-card.style';
import { selectSpecialCard } from './talkdeal.slice';

const SpecialCard = () => {
  const specialCard = useSelector(selectSpecialCard);

  return (
    <_SpecialCard>
      <Link href={`/promotion/${specialCard?.id}`}>
        <a>
          <img src={specialCard?.firstImageUrl} />
          <span className="badge"></span>
        </a>
      </Link>
    </_SpecialCard>
  );
};

export default SpecialCard;

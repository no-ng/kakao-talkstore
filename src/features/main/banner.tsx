import { useSelector } from 'react-redux';
import _Banner from './banner.style';
import { selectMainBanner } from './main.slice';

const Banner = () => {
  const banner = useSelector(selectMainBanner);

  return banner ? (
    <_Banner href="#">
      <img src={banner.firstImageUrl} />
    </_Banner>
  ) : null;
};

export default Banner;

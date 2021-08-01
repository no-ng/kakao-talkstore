import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ProfileCarouselProps {
  profiles: string[];
  isVisible: boolean;
}

const _ProfileCarousel = styled.span`
  margin-right: 6px;
  display: inline-block;
  width: 67px;
  height: 24px;

  .img {
    display: inline-block;
    width: 24px;
    height: 24px;
    mask-image: paint(squircle);
    --squircle-smooth: 0.4;
    --squircle-radius: 100px;
  }
`;

const ProfileCarousel: FunctionComponent<ProfileCarouselProps> = ({
  profiles,
  isVisible,
}) => {
  return (
    <_ProfileCarousel>
      <motion.span
        initial={{ x: 0, scale: 0 }}
        animate={{ x: [null, 0, 20, 40, 40], scale: [null, 1, 1, 1, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.01, 0.3, 0.6, 0.99, 1],
          repeat: Infinity,

          ease: [0, 1, 1, 1],
        }}
        className="img"
        style={{ backgroundImage: `url(${profiles[0]})` }}
      ></motion.span>
    </_ProfileCarousel>
  );
};

export default ProfileCarousel;

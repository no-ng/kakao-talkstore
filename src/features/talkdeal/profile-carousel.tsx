import { motion } from 'framer-motion';
import _range from 'lodash/range';
import reverse from 'lodash/reverse';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import useInterval from '../../hooks/use-interval';

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
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    mask-image: paint(squircle);
    --squircle-smooth: 0.4;
    --squircle-radius: 100px;
  }
`;

const ProfileCarousel: FunctionComponent<ProfileCarouselProps> = ({
  profiles,
  isVisible,
}) => {
  const lastIdx = profiles.length - 1;
  const [end, setEnd] = useState<number>(lastIdx);
  let range = _range(end, Math.max(-1, end - 3), -1);

  const { length: rangeLen } = range;

  if (rangeLen < 3) {
    const diff = 3 - rangeLen;
    range = [...range, ..._range(lastIdx, lastIdx - diff, -1)];
  }

  useInterval(() => {
    if (end <= 0) {
      setEnd(lastIdx);

      return;
    }

    setEnd(end - 1);
  }, 3000);

  return (
    <_ProfileCarousel>
      <motion.span>
        {reverse(range).map((num, idx) => {
          const img = profiles[num];

          return (
            <motion.span
              className="img"
              key={num}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translateX(${idx * 20}px)`,
                zIndex: 3 - idx,
              }}
            ></motion.span>
          );
        })}
      </motion.span>
    </_ProfileCarousel>
  );
};

export default ProfileCarousel;

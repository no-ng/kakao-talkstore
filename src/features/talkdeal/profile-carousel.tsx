import map from 'lodash/map';
import _range from 'lodash/range';
import reverse from 'lodash/reverse';
import { FunctionComponent, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
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

  const range2 = map(reverse(range), (num, idx) => ({ num, idx }));

  const transitions = useTransition(range2, {
    keys: ({ num }) => num,
    from: ({ idx }) => ({ x: idx * 20 - 10, scale: 0 }),
    enter: ({ idx }) => ({
      x: idx * 20,
      scale: 1,
      config: { mass: 1, tension: 280, friction: 25 },
    }),
    update: ({ idx }) => ({ x: idx * 20, scale: 1 }),
    leave: ({ idx }) => ({
      x: idx * 20 + 10,
      scale: 0,
      config: { mass: 1, tension: 280, friction: 20 },
      zIndex: 0,
    }),
    trail: 70,
    config: config.stiff,
    pause: !isVisible,
  });

  useInterval(() => {
    if (end <= 0) {
      setEnd(lastIdx);

      return;
    }

    setEnd(end - 1);
  }, 3000);

  return (
    <_ProfileCarousel>
      {transitions((styles, { num, idx }) => (
        <animated.span
          className="img"
          style={{
            backgroundImage: `url(${profiles[num]})`,
            zIndex: 3 - idx,
            ...styles,
          }}
        ></animated.span>
      ))}
    </_ProfileCarousel>
  );
};

export default ProfileCarousel;

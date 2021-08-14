import React, { FunctionComponent, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { animated, config, useTransition } from 'react-spring';
import Banner from '../main/banner';
import KeywordNav from './keyword-nav';
import Products from './products';
import SpecialCard from './special-card';
import { fetchTalkdeals, selectSpecialCard } from './talkdeal.slice';
import _Talkdeal from './talkdeal.style';

const Talkdeal: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTalkdeals());
  }, []);

  const contentLoaded = !!useSelector(selectSpecialCard);

  const transitions = useTransition(contentLoaded, {
    enter: (done) => ({ opacity: done ? 0 : 1, delay: 500 }),
    update: { opacity: 1, config: config.stiff },
    leave: { opacity: 0 },
  });

  return (
    <_Talkdeal>
      <Banner />
      <KeywordNav />
      {transitions((styles, contentLoaded) =>
        contentLoaded ? (
          <animated.div style={styles}>
            <SpecialCard />
            <Products />
          </animated.div>
        ) : (
          <animated.div className="loader" style={styles}>
            <Skeleton
              style={{ paddingTop: '56.25%', borderRadius: 8, marginBottom: 11 }}
            />
            <Skeleton
              style={{ width: '80%', height: 21, borderRadius: 8, marginBottom: 11 }}
            />
            <Skeleton
              style={{ width: '60%', height: 21, borderRadius: 8, marginBottom: 20 }}
            />
            <Skeleton
              style={{ paddingTop: '56.25%', borderRadius: 8, marginBottom: 11 }}
            />
          </animated.div>
        ),
      )}
    </_Talkdeal>
  );
};

export default Talkdeal;

import { AnimatePresence, motion, Transition } from 'framer-motion';
import React, { FunctionComponent, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import useHasMounted from '../../hooks/has-mounted';
import Banner from '../main/banner';
import KeywordNav from './keyword-nav';
import SpecialCard from './special-card';
import { fetchTalkdeals, selectSpecialCard } from './talkdeal.slice';
import _Talkdeal from './talkdeal.style';

const Talkdeal: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTalkdeals());
  }, []);

  const contentLoaded = !!useSelector(selectSpecialCard);

  let loader = <div />;

  const hasMounted = useHasMounted();

  if (hasMounted) {
    loader = (
      <>
        <div style={{ marginBottom: 20 }}>
          <Skeleton style={{ aspectRatio: '16/9', borderRadius: 8, marginBottom: 11 }} />
          <Skeleton
            style={{ width: '80%', height: 24, borderRadius: 8, marginBottom: 11 }}
          />
          <Skeleton style={{ width: '60%', height: 24, borderRadius: 8 }} />
        </div>
        <Skeleton style={{ aspectRatio: '16/9', borderRadius: 8, marginBottom: 11 }} />
      </>
    );
  }

  const leave: Transition = { ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 0.5 };
  const enter: Transition = { ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 };

  return (
    <_Talkdeal>
      <Banner />
      <KeywordNav />
      <AnimatePresence>
        {contentLoaded ? (
          <motion.div
            key="talkdeal-prod-loaded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={enter}
          >
            <SpecialCard />
          </motion.div>
        ) : (
          <motion.div
            key="talkdeal-prod-fetching"
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={leave}
          >
            {loader}
          </motion.div>
        )}
      </AnimatePresence>
    </_Talkdeal>
  );
};

export default Talkdeal;

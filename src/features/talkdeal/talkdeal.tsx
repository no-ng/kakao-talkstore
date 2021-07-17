import { AnimatePresence, motion, Transition } from 'framer-motion';
import { useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import useHasMounted from '../../hooks/has-mounted';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import { calcRatio } from '../../util';
import Banner from '../main/banner';
import KeywordNav from './keyword-nav';
import SpecialCard from './special-card';
import { fetchTalkdealMain, selectSpecialCard } from './talkdeal.slice';
import _Talkdeal from './talkdeal.style';

const Talkdeal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTalkdealMain());
  }, []);

  const contentLoaded = !!useSelector(selectSpecialCard);

  let loader = <div />;

  const hasMounted = useHasMounted();
  const obj = useWindowDimensions();

  if (hasMounted && obj) {
    const prodImgWidth = obj.width - 36;
    const prodImgHeight = calcRatio(16, 9, prodImgWidth);
    const loaderHeight = prodImgHeight * 2 + 180;

    loader = (
      <ContentLoader
        uniqueKey="talkdeal-prodlist"
        width={prodImgWidth}
        height={loaderHeight}
        viewBox={`0 0 ${prodImgWidth} ${loaderHeight}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="8" ry="8" width={prodImgWidth} height={prodImgHeight} />
        <circle cx="13" cy={prodImgHeight + 20} r="13" />
        <circle cx="30" cy={prodImgHeight + 20} r="13" />
        <circle cx="47" cy={prodImgHeight + 20} r="13" />
        <rect
          x={prodImgWidth - 140}
          y={prodImgHeight + 8}
          rx="8"
          ry="8"
          width="140"
          height="24"
        />
        <rect x="0" y={prodImgHeight + 50} rx="8" ry="8" width="263" height="18" />
        <rect x="0" y={prodImgHeight + 80} rx="8" ry="8" width="263" height="18" />
        <rect x="0" y={prodImgHeight + 110} rx="8" ry="8" width="140" height="18" />
        <rect
          x="0"
          y={prodImgHeight + 180}
          rx="8"
          ry="8"
          width={prodImgWidth}
          height={prodImgHeight}
        />
      </ContentLoader>
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

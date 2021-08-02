import { AnimatePresence, motion, Transition } from 'framer-motion';
import Link from 'next/link';
import React, { ChangeEvent, FunctionComponent } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import Dropdown from '../../components/dropdown';
import _KeywordNav from './keyword-nav.style';
import { selectThemeKeywords } from './talkdeal.slice';

const KeywordNav: FunctionComponent = () => {
  const onChange = (e: ChangeEvent) => console.log(e);
  const themeKeywords = useSelector(selectThemeKeywords);
  const leave: Transition = { ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 0.5 };
  const enter: Transition = { ease: [0.16, 1, 0.3, 1], duration: 0.5, delay: 1 };

  return (
    <_KeywordNav>
      <ul role="tablist">
        <li>
          <Dropdown onChange={onChange} chevronColor={'#fff'}>
            <option value="LATEST">최신순</option>
            <option value="OLDEST">마감순</option>
          </Dropdown>
        </li>
        <li>
          <Link href="/home/recommend/list">
            <a>맞춤추천</a>
          </Link>
        </li>
        <li>
          <Link href="/home/groupProduct/list">
            <a>전체톡딜</a>
          </Link>
        </li>
        <AnimatePresence>
          {themeKeywords ? (
            themeKeywords.map(({ themeKeyword, promotionId }) => (
              <motion.li
                key={promotionId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={enter}
              >
                <Link href={`/home/talkdeal/${promotionId}`}>
                  <a className="theme">{themeKeyword}</a>
                </Link>
              </motion.li>
            ))
          ) : (
            <motion.li initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={leave}>
              <Skeleton
                style={{
                  verticalAlign: 'top',
                  width: 80,
                  height: 35,
                  marginRight: 3,
                  borderRadius: 8,
                }}
              />
              <Skeleton
                style={{ verticalAlign: 'top', width: 80, height: 35, borderRadius: 8 }}
              />
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </_KeywordNav>
  );
};

export default KeywordNav;

import { range } from 'lodash';
import Link from 'next/link';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import Dropdown from '../../components/dropdown';
import _KeywordNav from './keyword-nav.style';
import { selectThemeKeywords } from './talkdeal.slice';

const KeywordNav: FunctionComponent = () => {
  const onChange = (e: ChangeEvent) => console.log(e);
  const themeKeywords = useSelector(selectThemeKeywords);

  const [list, setList] = useState<Array<Talkdeal.ThemeKeyword | Loader>>(
    themeKeywords || range(2).map((id) => ({ id, loader: true })),
  );

  useEffect(() => {
    setList(themeKeywords || []);
  }, [themeKeywords]);

  const transitions = useTransition(list, {
    enter: (item, idx) =>
      isLoader(item)
        ? { opacity: 1, delay: 500, position: 'absolute', x: idx * 83 }
        : { opacity: 0, delay: 500, x: -2 },
    update: (item) => (isLoader(item) ? {} : { opacity: 1, x: 0 }),
    leave: { opacity: 0 },
    keys: (item) => (isLoader(item) ? item.id : item.promotionId),
    trail: 50,
  });

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
        {transitions((styles, item) =>
          isLoader(item) ? (
            <animated.li style={styles}>
              <Skeleton
                style={{
                  verticalAlign: 'top',
                  width: 80,
                  height: 35,
                  borderRadius: 8,
                }}
              />
            </animated.li>
          ) : (
            <animated.li style={styles}>
              <Link href={`/home/talkdeal/${item.promotionId}`}>
                <a className="theme">{item.themeKeyword}</a>
              </Link>
            </animated.li>
          ),
        )}
      </ul>
    </_KeywordNav>
  );
};

interface Loader {
  id: number;
  loader: true;
}

function isLoader(o: any): o is Loader {
  return o?.loader === true;
}

export default KeywordNav;

import Link from 'next/link';
import React, { ChangeEvent } from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectThemeKeywords } from './talkdeal.slice';
import Dropdown from '../../components/dropdown';
import _KeywordNav from './keyword-nav.style';

const KeywordNav = () => {
  const onChange = (e: ChangeEvent) => console.log(e);
  const themeKeywords = useSelector(selectThemeKeywords);

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
        {themeKeywords ? (
          themeKeywords.map(({ themeKeyword, promotionId }) => (
            <li key={promotionId}>
              <Link href={`/home/talkdeal/${promotionId}`}>
                <a className="theme">{themeKeyword}</a>
              </Link>
            </li>
          ))
        ) : (
          <li>
            <ContentLoader uniqueKey="themeKeywords" width={200} height={35}>
              <rect x="0" y="0" rx="8" ry="8" width="75" height="35" />
              <rect x="79" y="0" rx="8" ry="8" width="75" height="35" />
            </ContentLoader>
          </li>
        )}
      </ul>
    </_KeywordNav>
  );
};

export default KeywordNav;

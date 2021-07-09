import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import _MainTab from './main-tab.style';

const MainTab = () => {
  const { asPath } = useRouter();

  return (
    <_MainTab>
      <ul role="tablist">
        <li>
          <Link href="/">
            <a aria-selected={asPath === '/'}>
              <span>톡딜</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/brand">
            <a aria-selected={asPath === '/brand'}>
              <span>브랜드데이</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/best">
            <a aria-selected={asPath === '/best'}>
              <span>베스트</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/live">
            <a aria-selected={asPath === '/live'}>
              <span>라이브</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/promotion">
            <a aria-selected={asPath === '/promotion'}>
              <span>기획전</span>
            </a>
          </Link>
        </li>
      </ul>
    </_MainTab>
  );
};

export default MainTab;

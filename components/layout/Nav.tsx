import Link from 'next/link';
import React, { memo, NamedExoticComponent } from 'react';
import { _Nav } from './Layout.style';

interface Props {
  disabled: boolean;
}

export const Nav: NamedExoticComponent<Props> = memo(({ disabled }) => {
  if (disabled) {
    return null;
  }

  return (
    <_Nav>
      <ul role="tablist">
        <li>
          <Link href="/">
            <span className="link_tab">톡딜</span>
          </Link>
        </li>
        <li>
          <Link href="/brand">
            <span className="link_tab">브랜드데이</span>
          </Link>
        </li>
        <li>
          <Link href="/best">
            <span className="link_tab">베스트</span>
          </Link>
        </li>
        <li>
          <Link href="/best">
            <span className="link_tab">라이브</span>
          </Link>
        </li>
        <li>
          <Link href="/promotion">
            <span className="link_tab">기획전</span>
          </Link>
        </li>
      </ul>
    </_Nav>
  );
});

Nav.displayName = 'Nav';

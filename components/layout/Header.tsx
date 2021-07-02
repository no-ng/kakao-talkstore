import Link from 'next/link';
import { _Header } from './Layout.style';

export const Header = () => (
  <_Header>
    <div>
      <h1 className="screen_out">톡스토어</h1>
      <Link href="/">
        <a>
          <h2 className="logo_txt">
            <img
              className="logo_img"
              src="https://st.kakaocdn.net/commerce_ui/front-ui/real/20210625/100049/assets/images/m640/logo_talkshopping_171207.png"
              alt="톡쇼핑하기"
            />
          </h2>
        </a>
      </Link>
    </div>
    <div className="menu">
      <a href="#none" className="menu_link">
        <span className="ico_store ico_menu">카테고리 메뉴</span>
      </a>
    </div>
    <div className="search">
      <a href="#none" className="search_link">
        <span className="ico_store ico_search">검색</span>
      </a>
    </div>
  </_Header>
);

import Link from 'next/link';
import styled from 'styled-components';

const _Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11000;
  width: 100%;
  min-height: 44px;
  text-align: center;
  background-color: #fff;

  .logo_txt {
    display: block;
    overflow: hidden;
    position: relative;
    height: 44px;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    font-weight: 700;
    color: #000;
    vertical-align: top;
  }

  .logo_img {
    display: block;
    width: 112px;
    height: auto;
    margin: 0 auto;
    padding-top: 6px;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 5px;
  }

  .menu_link {
    position: relative;
    float: left;
    width: 44px;
    height: 44px;
    text-align: center;
  }

  .search {
    position: absolute;
    top: 0;
    right: 5px;
  }

  .search_link {
    float: left;
    width: 44px;
    height: 44px;
    text-align: center;
  }
`;

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

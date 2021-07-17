import styled from 'styled-components';

export const _BrandLineDiv = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  height: 105px;
  padding: 18px 0 5px;

  ul {
    overflow-y: auto;
    white-space: nowrap;
    padding: 0 5px 40px;
    font-size: 0;

    li {
      display: inline-block;
      vertical-align: top;
      width: 75px;
    }
  }

  .link_brand {
    display: block;
  }

  .bg_squircle {
    display: block;
    position: relative;
    margin: 0 auto;
    width: 52px;
    height: 52px;

    img {
      display: block;
      width: 100%;
    }
  }

  .bg_squircle:after {
    position: absolute;
    content: '';
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    background: url('https://st.kakaocdn.net/commerce_ui/front-ui/real/20210706/185107/bg_squircle.a732340b9999be5bc0ac.svg')
      no-repeat;
    background-size: 190px 240px;
    background-position: -65px -180px;
  }

  .tit_brand {
    display: block;
    text-align: center;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    padding-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;
  }
`;

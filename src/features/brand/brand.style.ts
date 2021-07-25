import styled, { css } from 'styled-components';

const imgThumbCss = css`
  display: block;
  width: 100%;
`;

const titleCss = css`
  display: block;
  font-family: dm-sans-bold, sans-serif;
  text-align: center;
  font-size: 22px;
  line-height: 27px;
  overflow: hidden;
  letter-spacing: 0;
  color: #111;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const _BrandLine = styled.div`
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
      ${imgThumbCss}
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
    ${titleCss}
    color: #666;
    padding-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;
  }
`;

export const _BrandCard = styled.div`
  .main_brand {
    position: relative;

    span.thumb_main {
      display: block;
      overflow: hidden;
      position: relative;
      height: 0;
      padding-bottom: 100%;

      img {
        ${imgThumbCss}
      }
    }

    span.info_brand {
      position: absolute;
      text-align: center;
      top: 35px;
      left: 0;
      right: 0;
      padding: 0 25px;

      .tit_brand {
        ${titleCss}
      }

      .txt_time {
        display: block;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.06em;
        opacity: 0.6;
      }
    }
  }
`;

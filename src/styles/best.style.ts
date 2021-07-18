import styled from 'styled-components';

export const _BestStyle = styled.div`
  padding: 29px 18px 40px;

  .title {
    padding: 29px 0 16px;
    font-size: 20px;
    line-height: 24px;
    color: #222;
  }
  .icon_info {
    color: #b6b6b6;
    margin: 0 5px;
    font-size: 18px;
  }
  .layer_tip {
    max-width: 100%;
    border: 1px solid #b6b6b6;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 300;
    color: #666;
    padding: 7px 15px;
    margin 5px 0;
    position: absolute;
    background-color: #fff;
  }
  .layer_tip .btn_close {
    float: right;
    background-color: transparent;
    border: none;
  }
  .comp_slide {
    padding-bottom: 13px;
    overflow: hidden;
  }
  .list_tag {
    overflow-x: auto;
    padding: 0 18px 40px 0;
    margin-bottom: -40px;
    white-space: nowrap;
    color: #333;
    font-size: 15px;
    line-height: 34px;
    letter-spacing: -0.03em;
  }
  .list_tag li {
    display: inline-block;
    vertical-algin: top;
    margin-right: 5px;
  }
  .tag {
    background-color: #fff;
    padding: 0 12px;
    border: 1px solid #d3d5dd;
    border-radius: 23px;
  }
  .tag[aria-selected='true'] {
    border-color: #4684e9;
    font-weight: bold;
  }
  .tag[aria-selected='true'] .tag_hash {
    color: #4684e9;
  }

  .list_keyword_product {
    overflow-x: auto;
    position: relative;
    padding: 0 13px;
    white-space: nowrap;
  }
  .list_keyword_product li {
    display: inline-block;
    width: 134px;
    vertical-align: top;
    box-sizing: border-box;
  }
  .keyword_product .thumbnail {
    background-repeat: no-repeat;
    background-size: cover 50% ;
    width: 124px;
    height: 124px;
    border-radius: 5px;
  }
  .keyword_product .price {
    font-weight: bold;
    font-size: 13px;
  }
  .keyword_product .talkdeal_price {
    color: #4684e9;
  }
  .keyword_product .name {
    display: block;
    font-size: 13px;
    line-height: 17px;
    max-height: 34px;
    letter-spacing: -0.04em;
    white-space: normal;
  }
  .new_keyword {
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius:3px
    margin-top:25px;
    height:44px;
    line-height:44px;
    text-align: center;
    font-size:14px;
  }

`;

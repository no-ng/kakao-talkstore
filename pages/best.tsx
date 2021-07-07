import React, { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import { _Best } from '../styles/best.style';

export default function Best(): ReactElement {
  return (
    <Layout>
      <_Best>
        <strong className="title">
          베스트키워드
          <span className="icon_info">안내</span>
        </strong>
        <div className="comp_slide">
          <ul className="list_tag">
            <li>
              <a className="tag" aria-selected="true">
                <span className="tag_hash"># </span>
                롱원피스
              </a>
            </li>
            <li>
              <a className="tag">
                <span className="tag_hash"># </span>빵
              </a>
            </li>
          </ul>
        </div>
        <div className="comp_slide">
          <ul className="list_keyword_product">
            <li className="keyword_product">
              <div className="thumbnail"></div>
              <a>
                <span className="price">
                  <span className="talkdeal_price">톡딜가</span>10,000원
                </span>
                <span className="name">
                  얼죽아 분들을 위한! 리조 원형 얼음틀 & 아이스볼 메이커 4개입
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="new_keyword">추천상품 새로보기</div>
      </_Best>
    </Layout>
  );
}

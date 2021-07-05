import React, { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import Timer from '../components/timer/Timer';

// TODO: styled-component로 작업하기
export default function Brand(): ReactElement {
  return (
    <Layout>
      <Timer opener="brand" remainSeconds={205642} />
      <div>
        <div className="main_brand">
          <span className="thumb_main">
            <img
              className="img_thumb"
              id="thumb_87"
              src="https://st.kakaocdn.net/shoppingstore/home/brands/20210701155059_b72f65b4a39947029db32a82e5e8e255.png"
              alt="쿤달 KUNDAL"
              style={{ width: '100%' }}
            />
          </span>
        </div>
      </div>
    </Layout>
  );
}

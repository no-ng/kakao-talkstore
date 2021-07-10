import { FunctionComponent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Timer from '../../components/timer';
import { fetchBrandTab, selectBrandLoaded, selectBrands } from './brand.slice';

const Brand: FunctionComponent = () => {
  const dispatch = useDispatch();
  const loaded = useSelector(selectBrandLoaded);
  const brands = useSelector(selectBrands, shallowEqual);

  useEffect(() => {
    dispatch(fetchBrandTab());
  }, []);

  // TODO: loading component
  if (!loaded) {
    return null;
  }

  return (
    <div>
      <Timer opener="brand" remainSeconds={205642} />
      <div className="box_brandline">
        <strong className="screen_out">브랜드 목록</strong>
        <ul className="list_brand">
          {brands.map(({ id, brandStore: { profileImage, storeName } }) => (
            <li key={id}>
              <a href="#none" className="link_brand">
                <span className="bg_squircle">
                  <img className="img_thumb" src={profileImage} alt="지알앤" />
                </span>
                <strong className="tit_brand">{storeName}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>

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
  );
};

export default Brand;

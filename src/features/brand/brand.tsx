import { FunctionComponent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BrandCard from './brand-card';
import { fetchBrandTab, selectBrandLoaded, selectBrands } from './brand.slice';
import { _BrandLineDiv } from './brand.style';

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
      <_BrandLineDiv>
        <ul>
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
      </_BrandLineDiv>

      <div className="brand_card">
        {brands.map(({ id, remainSeconds }) => (
          <BrandCard key={id} remainSeconds={remainSeconds} />
        ))}
      </div>
    </div>
  );
};

export default Brand;

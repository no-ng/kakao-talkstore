import { FunctionComponent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BrandCard from './brand-card';
import { fetchBrandTab, selectBrandLoaded, selectBrands } from './brand.slice';
import { _BrandLine } from './brand.style';

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
      <_BrandLine>
        <ul>
          {brands.map(({ id, brandStore: { profileImage, storeName } }) => (
            <li key={id}>
              <a href="#none" className="link_brand">
                <span className="bg_squircle">
                  <img className="img_thumb" src={profileImage} alt={storeName} />
                </span>
                <strong className="tit_brand">{storeName}</strong>
              </a>
            </li>
          ))}
        </ul>
      </_BrandLine>

      <div className="box_brandcard">
        {brands.map((data) => (
          <BrandCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Brand;

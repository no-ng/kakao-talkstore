import { debounce, get } from 'lodash';
import { FunctionComponent, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BrandCard from './brand-card';
import { fetchBrandTab, selectBrandLoaded, selectBrands } from './brand.slice';
import { _BrandLine } from './brand.style';

const Brand: FunctionComponent = () => {
  const dispatch = useDispatch();
  const loaded = useSelector(selectBrandLoaded);
  const brands = useSelector(selectBrands, shallowEqual);
  const [selectedBrandId, setSelectedBrandId] = useState();

  useEffect(() => {
    dispatch(fetchBrandTab());

    const handle = debounce(() => setSelectedBrandId(undefined), 100);
    window.addEventListener('scroll', handle);

    return () => window.removeEventListener('scroll', handle);
  }, []);

  // TODO: loading component
  if (!loaded) {
    return null;
  }

  const scrollToBrand = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
    setSelectedBrandId(get(e, 'currentTarget.dataset.id'));

  return (
    <div>
      <_BrandLine>
        <ul>
          {brands.map(({ id, brandStore: { profileImage, storeName } }) => (
            <li key={id}>
              <a className="link_brand" data-id={id} onClick={scrollToBrand}>
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
          <BrandCard key={data.id} data={data} selectedBrandId={selectedBrandId} />
        ))}
      </div>
    </div>
  );
};

export default Brand;

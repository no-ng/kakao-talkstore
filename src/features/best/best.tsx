import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _BestStyle } from '../../styles/best.style';
import {
  fetchBestTab,
  selectRecommendCategories,
  selectRecommendProducts,
} from './best.slice';

const Best: FunctionComponent = () => {
  const dispatch = useDispatch();
  const recommendProducts = useSelector(selectRecommendProducts);
  const recommendCategories = useSelector(selectRecommendCategories);

  useEffect(() => {
    dispatch(fetchBestTab());
  }, []);

  return (
    <_BestStyle>
      <strong className="title">
        베스트키워드
        <span className="icon_info">안내</span>
      </strong>
      <div className="comp_slide">
        <ul className="list_tag">
          {recommendCategories.map((category) => (
            <li key={category}>
              <a className="tag" aria-selected="true">
                <span className="tag_hash"># </span>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="comp_slide">
        <ul className="list_keyword_product">
          {recommendProducts.views[0].products.map((product) => (
            <li className="keyword_product" key={product.productId}>
              <img
                className="thumbnail"
                src={product.productImage}
                alt={product.productName}
              />
              <a>
                <span className="name">{product.productName}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="new_keyword">추천상품 새로보기</div>
    </_BestStyle>
  );
};

export default Best;

import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _BestStyle } from '../../styles/best.style';
import { fetchBestTab, RecommendView, selectRecommendCategories } from './best.slice';

const Best: FunctionComponent = () => {
  const dispatch = useDispatch();
  const recommendCategories = useSelector(selectRecommendCategories);
  const [selectedCategory, setSelectedCategory] = useState<RecommendView>();

  useEffect(() => {
    dispatch(fetchBestTab());
  }, []);

  useEffect(() => {
    setSelectedCategory(recommendCategories[0]);
  }, [recommendCategories]);

  return (
    <_BestStyle>
      <strong className="title">
        베스트키워드
        <span className="icon_info">안내</span>
      </strong>
      <div className="comp_slide">
        <ul className="list_tag">
          {recommendCategories.map((category: RecommendView) => (
            <li
              key={category.categoryId}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              <a
                className="tag"
                aria-selected={selectedCategory?.categoryId === category.categoryId}
              >
                <span className="tag_hash"># </span>
                {category.categoryName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="comp_slide">
        <ul className="list_keyword_product">
          {selectedCategory?.products?.map((product) => (
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

import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { _BestStyle } from '../../styles/best.style';
import { fetchBestTab, RecommendView, selectRecommendCategories } from './best.slice';

const Best: FunctionComponent = () => {
  const dispatch = useDispatch();
  const recommendCategories = useSelector(selectRecommendCategories);
  const [showKeywordTooltip, setShowKeywordTooltip] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<RecommendView>();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchBestTab());
  }, []);

  useEffect(() => {
    setSelectedCategory(recommendCategories[0]);
  }, [recommendCategories]);

  useEffect(() => {
    setSelectedCategory(recommendCategories[selectedCategoryIndex]);
  }, [selectedCategoryIndex]);

  return (
    <_BestStyle>
      <strong className="title">
        베스트키워드
        <a
          className="icon_info"
          onClick={() => setShowKeywordTooltip(!showKeywordTooltip)}
        >
          &#9432;
        </a>
        {showKeywordTooltip && (
          <div className="layer_tip">
            전일 기준 톡스토어를 통한 조회수를 반영하여 매일 업데이트 됩니다.
            <button
              type="button"
              className="btn_close"
              onClick={() => {
                setShowKeywordTooltip(false);
              }}
            >
              &#x2715;
            </button>
          </div>
        )}
      </strong>
      <div className="comp_slide">
        <ul className="list_tag">
          {recommendCategories.map((category: RecommendView, index: number) => (
            <li
              key={category.categoryId}
              onClick={() => {
                setSelectedCategoryIndex(index);
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
      <div
        className="new_keyword"
        onClick={() => {
          if (selectedCategoryIndex >= recommendCategories.length - 1) {
            setSelectedCategoryIndex(0);
          } else {
            setSelectedCategoryIndex(selectedCategoryIndex + 1);
          }
        }}
      >
        추천상품 새로보기
      </div>
    </_BestStyle>
  );
};

export default Best;

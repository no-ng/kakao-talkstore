import Link from 'next/link';
import React from 'react';
import { FiHeart, FiShare } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowRenderer,
  WindowScroller,
} from 'react-virtualized';
import _Products from './products.style';
import ProfileCarousel from './profile-carousel';
import { selectProducts } from './talkdeal.slice';

const Products = () => {
  const prod = useSelector(selectProducts);

  if (!prod) {
    return null;
  }

  const { list } = prod;
  const cache = new CellMeasurerCache({
    fixedWidth: true,
  });
  const nf = new Intl.NumberFormat();

  const rowRenderer: ListRowRenderer = ({ key, index, style, parent, isVisible }) => {
    const product = list[index];

    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ measure }) => (
          <div className="product" style={style}>
            <Link href="#none">
              <a className="thumb">
                <img src={product.imageUrl} alt={product.productName} onLoad={measure} />
                <span className="badge_wrapper">
                  <span className="badge">마감 {product.remainDays}일전</span>
                </span>
              </a>
            </Link>
            <span className="info">
              <strong
                className="name"
                dangerouslySetInnerHTML={{
                  __html: product.mainCopy.replace(/\r?\n/g, '<br />'),
                }}
              ></strong>
              <span className={`detail ${product.subCopy ? 'subcopy' : ''}`}>
                {product.subCopy ? (
                  <span className="subcopy">{product.subCopy}</span>
                ) : (
                  <>
                    <span className="price">
                      톡딜가
                      <span className="txt">{nf.format(product.discountedPrice)}</span>원
                      {product.hasAdditionalOptionPrice ? '~' : ''}
                    </span>
                    <span className="regular">
                      <span className="txt">{nf.format(product.originalPrice)}</span>원
                    </span>
                  </>
                )}
              </span>
              {product.deliveryFeeType === 'FREE' && (
                <span className="label free_delivery">무료배송</span>
              )}
              {product.label && <span className="label">{product.label}</span>}
              <span className="dealjoin">
                <span className="deal">
                  <ProfileCarousel profiles={product.profiles} isVisible={isVisible} />
                  <span className="txt">
                    {nf.format(product.successRoomCount)}명 딜 성공중
                  </span>
                </span>
                <span className="actions">
                  <button type="button">
                    <FiShare size={'1.5rem'} color={'#999'} />
                  </button>
                  <button type="button">
                    <FiHeart size={'1.5rem'} color={'#999'} />
                  </button>
                </span>
              </span>
            </span>
          </div>
        )}
      </CellMeasurer>
    );
  };

  return (
    <_Products>
      {list && (
        <AutoSizer disableHeight>
          {({ width }) => (
            <WindowScroller>
              {({ height }) => (
                <List
                  autoHeight
                  width={width}
                  height={height}
                  overscanRowCount={2}
                  rowCount={list.length}
                  rowHeight={cache.rowHeight}
                  rowRenderer={rowRenderer}
                ></List>
              )}
            </WindowScroller>
          )}
        </AutoSizer>
      )}
    </_Products>
  );
};

export default Products;

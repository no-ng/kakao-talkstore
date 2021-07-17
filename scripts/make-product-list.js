#!/usr/bin/env node

/**
 * 같은 폴더에 meta.json, products, products2, products3 로 톡딜상품 API응답 파일을 넣고 실행하면 상품리스트 만들어줌
 */

const fs = require('fs');
const glob = require('glob');
const path = require('path');

const [meta, ...products] = glob.sync('{meta,products}*.json', { cwd: __dirname });

if (!meta || products.length < 1) {
  throw new Error('파일없다');
}

const {
  data: { productIds },
} = require(path.join(__dirname, meta));

const productMap = products.reduce((obj, file) => {
  const { data } = require(path.join(__dirname, file));
  return { ...obj, ...data };
}, {});

fs.writeFileSync(
  path.join(__dirname, 'product-list.json'),
  JSON.stringify(
    productIds.reduce((arr, id) => {
      if (productMap[id]) {
        return [...arr, productMap[id]];
      }

      return arr;
    }, []),
    undefined,
    2,
  ),
);

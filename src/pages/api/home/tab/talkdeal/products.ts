import { NextApiRequest, NextApiResponse } from 'next';
import products from './products.json';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    query: { after },
  } = req;

  const _after = parseInt(after as string, 10);

  if (!isNaN(_after)) {
    const index = products.findIndex(({ productId }) => productId === _after);
    const list = products.slice(index + 1, index + 11);

    res.json({ list, hasNext: list.length === 10 });

    return;
  }

  res.json({ list: products.slice(0, 10), hasNext: products.length > 10 });
};

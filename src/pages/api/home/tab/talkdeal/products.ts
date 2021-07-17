import { NextApiRequest, NextApiResponse } from 'next';
import products from './products.json';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(products);
};

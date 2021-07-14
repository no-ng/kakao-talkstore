import { NextApiRequest, NextApiResponse } from 'next';
import main from './main.json';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;

  res.json(main);
};

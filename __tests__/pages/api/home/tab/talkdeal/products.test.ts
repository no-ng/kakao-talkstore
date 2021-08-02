import { createMocks } from 'node-mocks-http';
import api from '../../../../../../src/pages/api/home/tab/talkdeal/products';

describe('api/home/tab/talkdeal/products', () => {
  test('초기 요청', async () => {
    const { req, res } = createMocks({ method: 'GET' });

    await api(req, res);

    const { list, hasNext } = JSON.parse(res._getData());

    expect(list.map((o: Talkdeal.Product) => o.productId)).toEqual([
      100298622, 67210447, 47012584, 100077794, 10440119, 102670393, 102781401, 83546786,
      101489827, 100189265,
    ]);
    expect(hasNext).toBe(true);
  });

  test('마지막 요청', async () => {
    const { req, res } = createMocks({ method: 'GET', query: { after: 101718991 } });

    await api(req, res);

    const { list, hasNext } = JSON.parse(res._getData());

    expect(list.length).toBe(2);
    expect(hasNext).toBe(false);
  });
});

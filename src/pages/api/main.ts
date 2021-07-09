import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    result: true,
    data: {
      mainBanner: {
        id: 1887,
        name: '7/9 톡딜프레시(상시)',
        firstImageUrl:
          'https://st.kakaocdn.net/thumb/C750x140/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fmain_top_banner%2F20210709112302_8fda2a224f6346a7bd1e5e5f35077255.png',
        landingType: 'URL',
        landingUrl:
          'https://store.kakao.com/promotion/1009?ad=fresh_shopping_banner&area=br',
        remainSeconds: 1904794,
      },
      subscribeChannels: [],
      month: 7,
      onAir: false,
      talkLoggedIn: false,
      notiCount: '0',
      friend: false,
      plusFriendHomeUrl: 'http://pf.kakao.com/_dsxmxad',
      hasActivateGiftCard: false,
    },
  });
};

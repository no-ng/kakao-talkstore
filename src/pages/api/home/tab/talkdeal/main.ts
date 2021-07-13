import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;

  res.json({
    result: true,
    data: {
      themeKeywords: [
        {
          promotionId: 1050,
          themeKeyword: '디지털위크',
          hotThemeKeyword: false,
          useFixedOrder: true,
          sortType: 'HIGHEST',
          period: { from: '20210712170000', to: '20210715235959' },
          new: false,
        },
        {
          promotionId: 1048,
          themeKeyword: '신선의정석',
          hotThemeKeyword: false,
          useFixedOrder: false,
          period: { from: '20210711170000', to: '20210801235959' },
          new: false,
        },
        {
          promotionId: 997,
          themeKeyword: '트렌드픽',
          hotThemeKeyword: true,
          useFixedOrder: true,
          sortType: 'LOWEST',
          period: { from: '20210628000000', to: '20210727235959' },
          new: false,
        },
      ],
      specialCard: {
        id: 1915,
        name: '7/13 삼성_노트북',
        firstImageUrl:
          'https://st.kakaocdn.net/thumb/C690x690/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fspecial_card%2F20210712152340_ed3ced2ec5334dfda9a6d2c507c4548d.png',
        landingType: 'URL',
        landingUrl: 'https://store.kakao.com/promotion/1050?area=brs',
        specialCardTitle: '삼성전자 디지털위크',
        specialCardDescription: '삼성노트북 플러스2 특가\n윈도우 10 기본 탑재!',
        specialCardSlot1: '519000',
        specialCardSlot2: '649000',
        specialCardPrimaryColor: '#8ED0FF',
        specialCardSecondaryColor: '#FFFFFF',
        specialCardBackgroundColor: '#1fe0',
        ad: false,
        remainSeconds: 66377,
        specialCardCoupon: {
          value: 10,
          unit: 'RATE',
          backgroundColor: '#064499',
          displayMaxDiscountValue: false,
        },
      },
    },
  });
};

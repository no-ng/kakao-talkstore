import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;

  res.json({
    result: true,
    data: {
      reward: {
        totalCount: 0,
        totalPrice: 0,
        kakaoPoint: 0,
        from: '20210701',
        to: '20210731',
      },
      specialCard: {
        id: 1882,
        name: '7/8 여행_경주켄싱턴',
        firstImageUrl:
          'https://st.kakaocdn.net/thumb/C690x690/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fspecial_card%2F20210708170320_a4d0b9f48d10426f9faf76d0c0d6857f.png',
        landingType: 'URL',
        landingUrl: 'https://store.kakao.com/promotion/1047?area=brs',
        specialCardTitle: '금호/켄싱턴 리조트 특별전',
        specialCardDescription: '경주 켄싱턴 리조트 77%\n무료 업그레이드+조식 2인',
        specialCardSlot1: '89900',
        specialCardSlot2: '390000',
        specialCardPrimaryColor: '#57370A',
        specialCardSecondaryColor: '#FFFFFF',
        specialCardBackgroundColor: '#C4A265',
        ad: false,
        remainSeconds: 65083,
        specialCardCoupon: {
          value: 10,
          unit: 'RATE',
          backgroundColor: '#BE8D36',
          displayMaxDiscountValue: false,
        },
      },
      themeKeywords: [
        {
          promotionId: 1047,
          themeKeyword: '금호/켄싱턴',
          hotThemeKeyword: true,
          useFixedOrder: true,
          sortType: 'HIGHEST',
          period: { from: '20210708170000', to: '20210711235959' },
          new: true,
        },
        {
          promotionId: 1046,
          themeKeyword: '초복준비',
          hotThemeKeyword: false,
          useFixedOrder: false,
          period: { from: '20210705170000', to: '20210708235959' },
          new: false,
        },
        {
          promotionId: 997,
          themeKeyword: '트렌드픽',
          hotThemeKeyword: false,
          useFixedOrder: true,
          sortType: 'LOWEST',
          period: { from: '20210628000000', to: '20210727235959' },
          new: false,
        },
      ],
      sortType: 'LATEST',
      reopens: [
        {
          productId: 69951446,
          productName: '엘르 14K 인기 쥬얼리 모음전\n목걸이/귀걸이/팔찌/반지',
          storeDomain: 'trendj',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628164554_82b419f4569041faa72d77692a007c49.png',
          landingUrl:
            'https://store.kakao.com/trendj/products/69951446?_=1625752500127&area=gdtr',
          userCount: 2959,
          alarm: false,
          reviewContent: '진주가 깜찍하고 편하게 잘 사용합니다',
          nickname: '의소********',
          createdAt: '20210708113043',
          updatedAt: '20210708113043',
        },
        {
          productId: 73731051,
          productName: '델포유 파운드케이크 20개\n진한 풍미와 촉촉한 식감',
          storeDomain: 'delforu',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210623162309_d34044662de044a39238a4cb6c922e93.png',
          landingUrl:
            'https://store.kakao.com/delforu/products/73731051?_=1625752500127&area=gdtr',
          userCount: 7463,
          alarm: false,
          reviewContent: '맛있어서 재구매했어요.',
          nickname: '김성*',
          createdAt: '20210708142101',
          updatedAt: '20210708142101',
        },
        {
          productId: 98571859,
          productName: '완주 보우짱 미니 밤호박 2kg\n달콤하고 포슬포슬한 과육',
          storeDomain: 'wjlocalfood',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210623162040_0a237cefdbbe42ffb046cf5b3e35de4c.png',
          landingUrl:
            'https://store.kakao.com/wjlocalfood/products/98571859?_=1625752500127&area=gdtr',
          userCount: 5345,
          alarm: false,
          reviewContent: '너무 맛있어요\r\n대 만족입니다\r\n감사합니다~♡',
          nickname: '박병*',
          createdAt: '20210708164507',
          updatedAt: '20210708164507',
        },
        {
          productId: 58407679,
          productName: '바사삭 치킨 시리즈 3봉\n닭다리/한마리/순살/양념 외',
          storeDomain: 'mssfood2',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210623161940_3f7f06bfc8014bb7946a18ca8e72e270.png',
          landingUrl:
            'https://store.kakao.com/mssfood2/products/58407679?_=1625752500127&area=gdtr',
          userCount: 2590,
          alarm: false,
          reviewContent: '딜할때마다 쟁여놓고 먹어요',
          nickname: '느리*',
          createdAt: '20210708152657',
          updatedAt: '20210708152657',
        },
        {
          productId: 96155342,
          productName: '일양약품 모기약 3종\n볼타입 물리지마+물렸을때 외',
          storeDomain: 'ohshow',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628164939_bd954f62a96a4364a1442aa8b3dbcd3e.png',
          landingUrl:
            'https://store.kakao.com/ohshow/products/96155342?_=1625752500127&area=gdtr',
          userCount: 6922,
          alarm: false,
          reviewContent: '싸게 잘 샀어요~',
          nickname: '준며******',
          createdAt: '20210708164448',
          updatedAt: '20210708164448',
        },
        {
          productId: 10973198,
          productName: '산과들에 원데이 견과 110봉\n담백하고 고소한 6종 구성',
          storeDomain: 'sandl',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625165726_e4f74cbab4cc4993839e75ce0a40c7ed.png',
          landingUrl:
            'https://store.kakao.com/sandl/products/10973198?_=1625752500127&area=gdtr',
          userCount: 3305,
          alarm: false,
          reviewContent:
            '견과류 사려고 계속 알아보고 있었는데 마침 톡딜이 떠서 저럼하게 구매해서 잘 먹고 있어요',
          nickname: '상*',
          createdAt: '20210708083147',
          updatedAt: '20210708083147',
        },
        {
          productId: 96373325,
          productName: '완주 무농약 블루베리500g 2팩\n당일수확 & 산지직송',
          storeDomain: 'wjlocalfood',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210623171457_a77de8d5c148414883deca2f5d9118d0.png',
          landingUrl:
            'https://store.kakao.com/wjlocalfood/products/96373325?_=1625752500127&area=gdtr',
          userCount: 2089,
          alarm: false,
          reviewContent: '배송은 오래걸렸지만 크기도 크고 싱싱하고 좋네요',
          nickname: '주정*',
          createdAt: '20210708161648',
          updatedAt: '20210708161648',
        },
        {
          productId: 51528466,
          productName: '글래드 베스트셀러 6종\n프레스앤씰 매직랩 3개 외',
          storeDomain: 'glad',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625171728_3d9a797bc24842bc8ba350c32359b3cd.png',
          landingUrl:
            'https://store.kakao.com/glad/products/51528466?_=1625752500127&area=gdtr',
          userCount: 8706,
          alarm: false,
          reviewContent: '저렴하게   잘구입했네요.\r\n잘 쓸께요.',
          nickname: '아ᆞ**',
          createdAt: '20210708164209',
          updatedAt: '20210708164209',
        },
        {
          productId: 98620246,
          productName: '장흥 상등급 새청무 쌀 10kg\n+햅 찰보리쌀 500g',
          storeDomain: 'jnproducer',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628165748_11e59e982c78459da21e50af3f75d293.png',
          landingUrl:
            'https://store.kakao.com/jnproducer/products/98620246?_=1625752500127&area=gdtr',
          userCount: 1825,
          alarm: false,
          reviewContent: '밥맛이 좋아요~~*^^*',
          nickname: '주향***********',
          createdAt: '20210708134954',
          updatedAt: '20210708134954',
        },
        {
          productId: 70284432,
          productName: '이디야 탄산수 500ml 20개\n퓨레어 자몽/라임/레몬향',
          storeDomain: 'ediya',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625165402_67d42e7f185c42bdbd4cc052b4587ac1.png',
          landingUrl:
            'https://store.kakao.com/ediya/products/70284432?_=1625752500127&area=gdtr',
          userCount: 8707,
          alarm: false,
          reviewContent: '잘 받았습니다',
          nickname: '이종*',
          createdAt: '20210708125934',
          updatedAt: '20210708125934',
        },
        {
          productId: 93605820,
          productName: '미닉스 4in1프리미엄 미니건조기\n빠른 건조 & 항균케어',
          storeDomain: 'minix',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628165332_7231df9d9e7c499299cd4d9b196dc060.png',
          landingUrl:
            'https://store.kakao.com/minix/products/93605820?_=1625752500127&area=gdtr',
          userCount: 783,
          alarm: false,
          reviewContent:
            '장마도 곧 다가오고 건조기 필요했는데 너무 저렴하게 잘 샀어요~^^상품평이 좋아서 망설임 없이 구매했는데 역시 사용해본 결과 진짜 최고에요^^',
          nickname: '투준**',
          createdAt: '20210708165222',
          updatedAt: '20210708165222',
        },
        {
          productId: 76717384,
          productName: '통3중 스텐 주방용품 모음전\n후라이팬/가마솥/믹싱볼 외',
          storeDomain: 'simpleicon',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210624164856_245134b508764d3f8e6e36f9d4261d1e.png',
          landingUrl:
            'https://store.kakao.com/simpleicon/products/76717384?_=1625752500127&area=gdtr',
          userCount: 3795,
          alarm: false,
          reviewContent: '처음에는붙어서좀.하지만 사용할수록 정이가는펜이예요.깔끔합니다',
          nickname: '만리*',
          createdAt: '20210708121741',
          updatedAt: '20210708121741',
        },
        {
          productId: 55985428,
          productName: '만능 프라이캡 50매\n기름 튐 차단, 냄새/연기 감소',
          storeDomain: 'traveleasy',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625165814_06f23f0084fe4a8ab3b899828319e2c3.png',
          landingUrl:
            'https://store.kakao.com/traveleasy/products/55985428?_=1625752500127&area=gdtr',
          userCount: 3139,
          alarm: false,
          reviewContent:
            '집에서 가끔 팬에 삼겹살 구워먹을때마다 기름은 사방팔방 마구마구 튀고...연기는 뿜뿜해서 고생했는데 이거 끼구 광명찾았어요ㅠㅠㅠㅠㅠㅠ살땐 비싸다 생각했는데 쓰고나니 넘 만족스럽습니다!!',
          nickname: '은*',
          createdAt: '20210707232628',
          updatedAt: '20210707232628',
        },
        {
          productId: 11006026,
          productName: '훈훈수산 깐새우장 300g\n매콤한 양념/짭조름한 간장',
          storeDomain: 'hunhunsusan',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628163950_346e79b317b74857b88decb3e7ba19f0.png',
          landingUrl:
            'https://store.kakao.com/hunhunsusan/products/11006026?_=1625752500127&area=gdtr',
          userCount: 9175,
          alarm: false,
          reviewContent: '배송도 빠르고 제품도 좋아요',
          nickname: '영*',
          createdAt: '20210708101843',
          updatedAt: '20210708101843',
        },
        {
          productId: 64585397,
          productName: '들기름/참기름 대용량350ml\n100%통깨 그대로 저온압착',
          storeDomain: 'misic',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625162353_6fecd9f79087412ca00dc194c64d4447.png',
          landingUrl:
            'https://store.kakao.com/misic/products/64585397?_=1625752500127&area=gdtr',
          userCount: 3236,
          alarm: false,
          reviewContent: '포장도 안전하게왔고\r\n넘고소하고 맛있어요~',
          nickname: '정귀*',
          createdAt: '20210708105842',
          updatedAt: '20210708105842',
        },
        {
          productId: 10194786,
          productName: '스파클 생수 2종 균일가\n2L 24개 / 500ml 60개',
          storeDomain: 'sparklemart',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628163943_99961f412299487ab42cdbbcda00aeb0.png',
          landingUrl:
            'https://store.kakao.com/sparklemart/products/10194786?_=1625752500127&area=gdtr',
          userCount: 8357,
          alarm: false,
          reviewContent: '굿 조아요',
          nickname: 'SK*',
          createdAt: '20210708165834',
          updatedAt: '20210708165834',
        },
        {
          productId: 61417696,
          productName: '풀무원 건강을 제면한 두부면 6개\n얇은면/넓은면 선택',
          storeDomain: 'pulmuoneshop',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210624160653_73fb0f41de684b73a83181ad77b3e5ea.png',
          landingUrl:
            'https://store.kakao.com/pulmuoneshop/products/61417696?_=1625752500127&area=gdtr',
          userCount: 2784,
          alarm: false,
          reviewContent:
            '후기에 터져서 오는게 있다고 해서 걱정했는데 터진것 없이 잘 받았습니다~밀가루보다 건강하고 맛있게 먹을 수 있어 너무 좋아요~',
          nickname: '박보*',
          createdAt: '20210708091846',
          updatedAt: '20210708091846',
        },
        {
          productId: 58335435,
          productName: 'Dole 후룻볼12개입+스푼\n100%과즙에 담은 진짜 과일',
          storeDomain: 'dolekorea',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625165548_ed9ceb8bee2c4a58b7dcc136ec1612fd.png',
          landingUrl:
            'https://store.kakao.com/dolekorea/products/58335435?_=1625752500127&area=gdtr',
          userCount: 3823,
          alarm: false,
          reviewContent:
            '정말맛있어요^^ 항상 구매하는 제품이예요^^ 문의내역도 친절하게 응대해주셔서 감사해요^^ 번창하세요^^',
          nickname: 'he*',
          createdAt: '20210708131652',
          updatedAt: '20210708131652',
        },
        {
          productId: 36205391,
          productName: '셀리맥스 지우개패드 60매\n각질제거에 효과적인 어성초 성분',
          storeDomain: 'celimax',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625162209_9a3919fb0b504bf39e400ecfb9fbab29.png',
          landingUrl:
            'https://store.kakao.com/celimax/products/36205391?_=1625752500127&area=gdtr',
          userCount: 3673,
          alarm: false,
          reviewContent: '화장전후 사용하고잇어요',
          nickname: '밤.*',
          createdAt: '20210708143157',
          updatedAt: '20210708143157',
        },
        {
          productId: 92786589,
          productName: '보랄 아이스 제빙기\n2.2L 대용량 & 8분 급속제빙',
          storeDomain: 'homnizone',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625162058_6465f04894d34c6e9ab1af0265df1d72.png',
          landingUrl:
            'https://store.kakao.com/homnizone/products/92786589?_=1625752500127&area=gdtr',
          userCount: 448,
          alarm: false,
          reviewContent:
            '진짜로 너무 좋아요.\r\n빠르게 얼음이생기고 물이 없으면 깜빡 깜빡 요즘 요녁석 홀릭 냉동고 냄새도 안나고 좋아요.',
          nickname: '연*',
          createdAt: '20210707220050',
          updatedAt: '20210707220050',
        },
        {
          productId: 61875194,
          productName: '천하일미 찹쌀탕수육 3팩+수제소스\n홍석천&이원일 비법레시피',
          storeDomain: 'ggn',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625165230_86bfb66162ad4f2aa6b5ff9e89aa9887.png',
          landingUrl:
            'https://store.kakao.com/ggn/products/61875194?_=1625752500127&area=gdtr',
          userCount: 6422,
          alarm: false,
          reviewContent: '넘 맛있네요 남편도 아이들도 탕수육 계속찾아요 ㅎㅎ',
          nickname: '최은*',
          createdAt: '20210708105638',
          updatedAt: '20210708105638',
        },
        {
          productId: 55774366,
          productName: '전통방식 청국장 150g 4팩\n국산 콩으로 만든 구수한 맛',
          storeDomain: 'fruitsmall',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210624160515_e81471c47d0a42209d8e605af36f349a.png',
          landingUrl:
            'https://store.kakao.com/fruitsmall/products/55774366?_=1625752500127&area=gdtr',
          userCount: 4600,
          alarm: false,
          reviewContent:
            '일인분씩 소포장 되어있어요\r\n냉동보관해놓구 1인분씩 해먹으면 좋을거같아요\r\n배송은 조금 느렸지만 친절하게 안내해주시고 배송상태도 아주 좋아요\r\n맛은 아봤지만 재구매 의사 있어요',
          nickname: '최예*',
          createdAt: '20210708162057',
          updatedAt: '20210708162057',
        },
        {
          productId: 75359570,
          productName: '애플 아이폰SE 2세대 128GB\n생활방수 & 자급제폰',
          storeDomain: 'applestore0718',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625171916_0a12ac817e094e88a0604fb6551e85b1.png',
          landingUrl:
            'https://store.kakao.com/applestore0718/products/75359570?_=1625752500127&area=gdtr',
          userCount: 91,
          alarm: false,
          reviewContent:
            '깨끗하고 좋네요 \uD83D\uDC4D 새박스 뜯는 기분 오랜만에 느껴봐서 좋았어요 ㅋㅋㅋ',
          nickname: '장하*',
          createdAt: '20210706163022',
          updatedAt: '20210706163022',
        },
        {
          productId: 74047737,
          productName: '층간소음 방지 남녀슬리퍼 1+1\n부드럽고 가벼운 EVA소재',
          storeDomain: 'ssueim',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210628165008_00826739b5d44e839b8b6626d57c8e9f.png',
          landingUrl:
            'https://store.kakao.com/ssueim/products/74047737?_=1625752500127&area=gdtr',
          userCount: 2690,
          alarm: false,
          reviewContent:
            '배송은 늦었지만 주문한대로 배송 되었고 슬리퍼 자체도 문제 없습니다',
          nickname: '김선*',
          createdAt: '20210708145903',
          updatedAt: '20210708145903',
        },
        {
          productId: 90799948,
          productName: '오모떼 노와이어 브라&팬티세트  \n쾌적한 소재, 군살 보정',
          storeDomain: 'omothe',
          imageUrl:
            'https://st.kakaocdn.net/shoppingstore/home/group_discount_product/20210625163102_f2e536003f04485ba0bd5923680489ad.png',
          landingUrl:
            'https://store.kakao.com/omothe/products/90799948?_=1625752500127&area=gdtr',
          userCount: 1278,
          alarm: false,
          reviewContent: '아주 좋아요\r\n딜하면 또 살 겁니다',
          nickname: '느리*',
          createdAt: '20210708152614',
          updatedAt: '20210708152614',
        },
      ],
      recommendStores: {
        name: '주목할 만한 스토어',
        stores: [
          {
            id: 702,
            name: '푸드장',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20180308100540_d55822a687b34505a787576fb2b75443.jpeg',
            landingUrl: 'https://store.kakao.com/foodjang?area=tdtrs',
          },
          {
            id: 966,
            name: '푸릇푸릇',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20180809191422_fd9a05d4a8174dae87621165323f6345.jpg',
            landingUrl: 'https://store.kakao.com/1?area=tdtrs',
          },
          {
            id: 4959,
            name: '대한민국농수산',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20191028132951_58d4533fc2374c86b5a4adabade112c9.jpg',
            landingUrl: 'https://store.kakao.com/koreasusan?area=tdtrs',
          },
          {
            id: 1093,
            name: '장보남',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20180426144927_597f8be368b34c089c202ee1ce216193.jpeg',
            landingUrl: 'https://store.kakao.com/jangbonam?area=tdtrs',
          },
          {
            id: 1010,
            name: '맛군',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20190613164538_f9b0ecc2bd1e4e15a53d4ab03944975d.jpg',
            landingUrl: 'https://store.kakao.com/matgoon?area=tdtrs',
          },
          {
            id: 1373,
            name: '얌테이블',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20190228103650_1d4e6e871a9d433fa34ef647db2298c5.jpg',
            landingUrl: 'https://store.kakao.com/yamtable?area=tdtrs',
          },
          {
            id: 4535,
            name: '세모수',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20190321074843_5caf7362eb9c4bf5a9fc95b7220e7163.jpg',
            landingUrl: 'https://store.kakao.com/semosu?area=tdtrs',
          },
          {
            id: 1289,
            name: '감동몰',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20190830152851_255bbf72516e4592a398f448f816d831.jpg',
            landingUrl: 'https://store.kakao.com/gamdongmall?area=tdtrs',
          },
          {
            id: 2095,
            name: '훈훈수산',
            imageUrl:
              'https://st.kakaocdn.net/thumb/B350x350cw/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fstore%2F20180719184603_fc507600fe9046e09d8a8110a3db4496.jpeg',
            landingUrl: 'https://store.kakao.com/hunhunsusan?area=tdtrs',
          },
        ],
      },
      countWaitGiftCard: 0,
      countActivatedGiftCard: 0,
      defaultSortType: 'OLDEST',
      timestamp: 1625752500000,
    },
  });
};

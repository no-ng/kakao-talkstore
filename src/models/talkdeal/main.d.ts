declare namespace Talkdeal {
  interface Period {
    from: string;
    to: string;
  }

  interface ThemeKeyword {
    promotionId: number;
    themeKeyword: string;
    hotThemeKeyword: boolean;
    useFixedOrder: boolean;
    sortType: string;
    period: Period;
    new: boolean;
  }

  interface SpecialCardCoupon {
    value: number;
    unit: string;
    backgroundColor: string;
    displayMaxDiscountValue: boolean;
  }

  interface SpecialCard {
    id: number;
    name: string;
    firstImageUrl: string;
    landingType: string;
    landingUrl: string;
    specialCardTitle: string;
    specialCardDescription: string;
    specialCardSlot1: string;
    specialCardSlot2: string;
    specialCardPrimaryColor: string;
    specialCardSecondaryColor: string;
    specialCardBackgroundColor: string;
    ad: boolean;
    remainSeconds: number;
    specialCardCoupon: SpecialCardCoupon;
  }

  interface Data {
    themeKeywords: ThemeKeyword[];
    specialCard: SpecialCard;
  }

  interface Main {
    result: boolean;
    data: Data;
  }
}

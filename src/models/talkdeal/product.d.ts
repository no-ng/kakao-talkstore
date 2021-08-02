declare namespace Talkdeal {
  interface Product {
    storeId: number;
    storeName: string;
    storeDomain: string;
    productId: number;
    productName: string;
    categoryId: string;
    categoryName: string;
    discountId: number;
    landingUrl: string;
    originalPrice: number;
    discountedPrice: number;
    discountRate: number;
    deliveryFeeType: string;
    mainCopy: string;
    subCopy: string;
    label: string;
    imageUrl: string;
    sharingImageUrl: string;
    logoImageUrl: string;
    remainSeconds: number;
    remainDays: number;
    status: string;
    groupSize: number;
    userCount: number;
    ongoingRoomCount: number;
    successRoomCount: number;
    profiles: string[];
    contentOpenDt: string;
    contentCloseDt: string;
    contentRemainDays: number;
    hasAdditionalOptionPrice: boolean;
    freeDelivery: boolean;
  }
}

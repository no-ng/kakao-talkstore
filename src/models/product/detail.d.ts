declare namespace Product {
  interface Price {
    standardPrice: number;
    discountedPrice: number;
    discountRate: string;
    minDiscountedPrice: number;
    maxDiscountedPrice: number;
  }

  interface TopReview {
    id: string;
    content: string;
    productRating: number;
    deliveryRating: number;
    productStarRating: number;
    deliveryStarRating: number;
    best: boolean;
    writer: string;
    imageUrl: string;
    backgroundColor: string;
  }

  interface Review {
    topReviews: TopReview[];
    qnaCount: number;
    reviewCount: number;
    averageRating: number;
    totalProductStarRating: number;
    totalDeliveryStarRating: number;
    productPositivePercentage: number;
    deliveryPositivePercentage: number;
    productStar1Percentage: number;
    productStar2Percentage: number;
    productStar3Percentage: number;
    productStar4Percentage: number;
  }

  interface Delivery {
    deliveryMethodType: string;
    optionalDeliveries: any[];
    deliveryFeeType: string;
    deliveryFeePaymentType: string;
    deliveryFee: number;
    freeConditionalAmount: number;
    repeatQuantity: number;
    bundleGroupAvailable: boolean;
    isolatedAreaNotice: string;
  }

  interface Quantity {
    maxPurchase: number;
    maxPurchaseOfBuyer: number;
  }

  interface Store {
    id: number;
    name: string;
    domain: string;
    farmer: boolean;
    coverImage: string;
    profileImage: string;
    introduce: string;
    channelName: string;
    channelUrl: string;
    fresh: boolean;
  }

  interface Banner {
    id: number;
    name: string;
    firstImageUrl: string;
    landingType: string;
    landingUrl: string;
    remainSeconds: number;
  }

  interface Notice {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }

  interface Category {
    id: string;
    name: string;
  }

  interface Data {
    gift: string;
    benefits: string[];
    booked: boolean;
    description: string;
    previewImages: string[];
    optionType: string;
    certTypeFood: boolean;
    price: Price;
    review: Review;
    id: number;
    reviewCreatable: boolean;
    events: any[];
    delivery: Delivery;
    images: string[];
    quantity: Quantity;
    coupon: boolean;
    reviewUnexposed: boolean;
    store: Store;
    taxDeduction: boolean;
    banners: Banner[];
    notices: Notice[];
    imageRatio: string;
    adultOnly: boolean;
    name: string;
    category: Category;
    favorite: boolean;
    sharingImageUrl: string;
    status: string;
  }

  interface Detail {
    result: boolean;
    data: Data;
  }
}

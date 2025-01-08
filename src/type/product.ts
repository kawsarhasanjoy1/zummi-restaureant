

export type Ingredient = {
  name: string;
  quantity: string;
};

export type AdditionalInfo = {
  calories: number;
  protein: string;
  totalFat: string;
  size: string;
};

export type TProduct = {
  _id: string
  name: string;
  title: string;
  stock: number;
  category: string;
  userId: string;
  price: number;
  priceOff: number;
  ingredients: Ingredient[];
  description: string;
  image: string;
  additionalInfo: AdditionalInfo;
  ratingAverage: number;
  ratingQuantity: number;
};

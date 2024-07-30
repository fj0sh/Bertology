interface ProductCategory {}

interface ProductType {
  id: number;
  productName: string;
  description: string;
  price: number;
  stocks: number;
  category: string;
}

export type { ProductCategory, ProductType };

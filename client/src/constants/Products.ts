interface ProductCategory {}

interface ProductType {
  productId: number;
  productName: string;
  description: string;
  price: number;
  stocks: number;
  type: string;
  productImage: string;
}

export type { ProductCategory, ProductType };

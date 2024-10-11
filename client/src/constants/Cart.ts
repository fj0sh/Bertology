import { User } from "next-auth";
import { ProductType } from "./Products";

interface CartType {
  user: User;
  product: ProductType;
}

export type { CartType };

import { IProduct } from "../product/product.model";
export interface IAPIAvoResponse {
  length: number;
  data: IProduct;
  error?: string | undefined;
}

import { Product } from "../product/product";
import { Estimate } from "./estimate";

export interface EstimateLine {
    id: number;
    product: Product;
    discount: number;
    estimateLineQuantity: number;
 
}
    


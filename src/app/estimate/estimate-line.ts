import { Product } from "../product/product";
import { Estimate } from "./estimate";

export interface EstimateLine {
    id: number;
    product: Product;
    estimate: Estimate;
    discount: number;
    quantity: number;
 
}
    


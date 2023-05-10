import { Category } from "../category/category";

export interface Product {

    id: number,
    name: string,
    description : string,
    tax: number;
    price: number,
    unitsInStock: number,
    category: Category

}

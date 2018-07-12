import { Product } from "../models/product";

export class AppState{

    //AppState = Store  (saved by the store)
    public constructor(public products?:Product[])
    {

    }
}
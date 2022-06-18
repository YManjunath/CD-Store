export interface products {
    id:string;
    name:string;
    price:number;
    discountPrice:number | null;
    rating:number;
    imageURL:string;
    isOutOfStock:boolean;
}
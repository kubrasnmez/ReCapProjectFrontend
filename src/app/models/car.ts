import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    colorId:number;
    brandId:number;
    brandName:string;
    colorName : string;
    modelYear : number;
    dailyPrice : number;
    description : string;
    imagePath:string;
    carImages : CarImage[];
}

import { CarImage } from "./carImage";
export interface Car{
    carId:number;
    brandName:string;
    colorName : string;
    modelYear : number;
    dailyPrice : number;
    description : string;
    brandId:number;
    colorId:number;
    imagePath:string;
    status:boolean;
    carImages : CarImage[];
}

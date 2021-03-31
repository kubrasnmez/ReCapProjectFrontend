import { Car } from "./car";

export interface CarDetail extends Car{
    brandId:number;
    colorId:number;
}
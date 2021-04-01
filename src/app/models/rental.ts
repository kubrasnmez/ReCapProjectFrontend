export interface Rental{
    rentalId?:number;
    carId:number;
    brandName : string;
    colorName:string;
    carDailyPrice : number;
    carDescription : string;
    customerId : number;
    rentDate : Date;
    returnDate:Date;
}
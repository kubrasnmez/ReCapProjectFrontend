export interface Rental{
    rentalId:number;
    carId:number;
    brandName : string;
    colorName:string;
    carDailyPrice : number;
    carDescription : string;
    customerId : number;
    customerName : string;
    rentDate : Date;
    returnDate:Date;
}
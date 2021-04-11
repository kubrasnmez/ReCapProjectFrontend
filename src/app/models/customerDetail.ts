export interface CustomerDetails {
    customerId: number;
    userId: number;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    status:boolean;
    passwordHash: string;
    passwordSalt: string;
    customerFindex:number;
}
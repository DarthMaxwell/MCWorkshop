export interface Storage {
    Id?: number;
    Name: string;
    Phone: string;
    Plate: string;
    Pickup: boolean;
    Year?: string;
}

export interface Item {
    Id: number;
    Picture: string;
    Name: string;
    ItemId: string;
    Stock: number;
}

export interface Bike {
    Id: number;
    Picture: string;
    Model: string;
    Brand: string;
    Km: number;
    Des: string;
    Price: number;
}

export interface Booking {
    Id?: number;
    Name: string;
    Email: string;
    Phone: string;
    Bike: string;
    Km: string;
    Details: string;
    Date?: Date;
}
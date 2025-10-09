export interface Storage {
    id?: number;
    name: string;
    phone: string;
    plate: string;
    pickup: boolean;
    year?: string;
}

export interface Item {
    id: number;
    picture: string;
    name: string;
    itemId: string;
    stock: number;
}

export interface Bike {
    id: number;
    picture: string;
    model: string;
    brand: string;
    km: number;
    des: string;
    price: number;
}

export interface Booking {
    id?: number;
    name: string;
    email: string;
    phone: string;
    bike: string;
    km: string;
    details: string;
    date?: Date;
}
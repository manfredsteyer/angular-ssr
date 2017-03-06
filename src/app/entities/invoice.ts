import { Flight } from './flight';

export interface Invoice {
    invoiceId: number;
    date: string;
    from: string;
    to: string;
    price: number;
    paid: boolean;
}

import { ICustomer } from '../interface';
import { RetrieveInfo } from '../model';

export interface IPayload {
    customer: ICustomer;
    info: RetrieveInfo;
    items: IRetrieveItem[];
    configuration: Record<string, any>;
}

export interface IRetrieveItem {
    id: string;
    'menu-item-name': string;
    quantity: string;
    price: string;
    'special-instructions': string;
    'menu-choices': string;
    'menu-choices-hash': IMenuChoice;
    'customer-name': string | null;
}

interface IChoice {
    name: string;
    price: number;
}

export type IMenuChoice = Record<string, IChoice[]>;

export interface IGetOrder {
    order: IRetrieveOrder;
}

export interface IRetrieveOrder {
    guid: string;
    payload: IPayload;
    external_id: string;
    created_at: string;
    completed_at: string | null;
    error_at: string | null;
    error_string: string | null;
    ticket_payload: string | null;
}

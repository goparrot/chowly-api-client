import { IGetOrder, IPayload, IRetrieveItem, IRetrieveOrder, IMenuChoice } from '../interface';
import { ServiceTypeEnum, PaymentTypeEnum } from '../enum';
import { Customer } from './create-order.model';

export class ReadOrder implements IGetOrder {
    order: RetrieveOrder;
}
class RetrieveOrder implements IRetrieveOrder {
    guid: string;
    payload: Payload;
    external_id: string;
    created_at: string;
    completed_at: string | null;
    error_at: string | null;
    error_string: string | null;
    ticket_payload: string | null;
}

export class Payload implements IPayload {
    customer: Customer;
    info: RetrieveInfo;
    items: RetrieveItems[];
    configuration: Record<string, any>;
}

export class RetrieveInfo {
    'order-id': string;
    'special-notes2': string;
    'service-type': ServiceTypeEnum;
    'payment-is-cash': string;
    'tip-payment-is-cash': string;
    'payment-type': PaymentTypeEnum;
    'tip-payment-type': PaymentTypeEnum;
    subtotal: number;
    'delivery-charge': number;
    'sales-tax': number;
    tax_exempt: null;
    tip: number;
    total: number;
    is_future: string;
    future_at: string;
    placed_at: string;
    'coupon-description': string;
    'coupon-amount': number;
}

export class RetrieveItems implements IRetrieveItem {
    id: string;
    'menu-item-name': string;
    quantity: string;
    price: string;
    'special-instructions': string;
    'menu-choices': string;
    'menu-choices-hash': IMenuChoice;
    'customer-name': string | null;
}

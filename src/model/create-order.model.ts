import { IOrderInfo, ICustomer, IOrderItem, IScheduledTime, IMod, ICreateOrder } from '../interface';
import { ServiceTypeEnum, PaymentTypeEnum } from '../enum';

export class Order implements ICreateOrder {
    customer: Customer;
    info: Info;
    items: ItemOrder[];
    id: string;
}

export class Customer implements ICustomer {
    id: string;
    name: string;
    phone: string;
    email: string | null;
    address1?: string;
    address2: string | null;
    city?: string;
    state?: string;
    zip?: string;
    cross_street: string | null;
    special_instructions: string | null;
}

export class Info implements IOrderInfo {
    id: string;
    scheduled_time: IScheduledTime[] | null;
    pickup_code: string | null;
    service_type: ServiceTypeEnum;
    payment_is_cash: boolean;
    payment_type: PaymentTypeEnum;
    tip_payment_is_cash: boolean;
    tip_payment_type: PaymentTypeEnum;
    subtotal: string;
    delivery_charge: string;
    sales_tax: string;
    tip: string;
    total: string;
    coupon_description: string | null;
    coupon_amount?: string;
}

export class ItemOrder implements IOrderItem {
    id: string;
    name: string;
    external_id: string | null;
    price: string;
    quantity: string;
    notes: string | null;
    mods: Mods[];
}

export class Mods implements IMod {
    id: string;
    name: string;
    category: string | null;
    external_id: string | null;
    price: string;
    quantity: string;
}

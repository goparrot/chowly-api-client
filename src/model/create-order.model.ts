import { IOrderInfo, ICustomer, IOrderItem, IScheduledTime, IMod, ICreateOrder } from '../interface';
import { ServiceTypeEnum, PaymentTypeEnum } from '../enum';

export class Order implements ICreateOrder {
    customer: Customer;
    info: Info;
    items: ItemOrder[];
    id?: string;
}

export class Customer implements ICustomer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    cross_street?: string;
    special_instructions?: string;
}

export class Info implements IOrderInfo {
    id: string;
    scheduled_time?: IScheduledTime[];
    pickup_code?: string;
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
    coupon_description?: string;
    coupon_amount?: string;
}

export class ItemOrder implements IOrderItem {
    id: string;
    name: string;
    external_id?: string;
    price: string;
    quantity: string;
    notes?: string;
    mods: Mod[];
}

export class Mod implements IMod {
    id: string;
    name: string;
    category?: string;
    external_id?: string;
    price: string;
    quantity: string;
}

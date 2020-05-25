import { DayOfWeekEnum, ServiceTypeEnum, PaymentTypeEnum } from '../enum';
import { ITimePeriod } from './chowly.interface';

export interface ICustomer {
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

export interface IOrderInfo {
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

export interface IOrderItem {
    id: string;
    name: string;
    external_id?: string;
    price: string;
    quantity: string;
    notes?: string;
    mods: IMod[];
}

export interface IMod {
    id: string;
    name: string;
    category?: string;
    external_id?: string;
    price: string;
    quantity: string;
}

export interface ICreateOrder {
    customer: ICustomer;
    info: IOrderInfo;
    items: IOrderItem[];
    id?: string;
}

export interface IScheduledTime {
    time_periods: ITimePeriod[];
    enabled: boolean;
    day_of_week: DayOfWeekEnum;
}

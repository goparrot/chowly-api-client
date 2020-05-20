import { DayOfWeekEnum, ServiceTypeEnum, PaymentTypeEnum } from '../enum';
import { ITimePeriod } from './chowly.interface';

export interface ICustomer {
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

export interface IOrderInfo {
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

export interface IOrderItem {
    id: string;
    name: string;
    external_id: string | null;
    price: string;
    quantity: string;
    notes: string | null;
    mods: IMod[];
}

export interface IMod {
    id: string;
    name: string;
    category: string | null;
    external_id: string | null;
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

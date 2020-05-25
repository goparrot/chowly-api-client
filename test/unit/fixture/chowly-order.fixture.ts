import { plainToClass } from 'class-transformer';
import { Order } from '../../../src/index';
import { IOrderInfo, ICustomer, IMod, IOrderItem, ICreateOrder } from '../../../src/interface';
import { ServiceTypeEnum, PaymentTypeEnum } from '../../.././src/enum';

export const Customer: ICustomer = {
    id: 'e',
    name: 'w',
    phone: '5555555555',
    address1: '1234 S Main Street',
    address2: 'Suite 180',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    cross_street: 'Rodeo Drive',
    special_instructions: 'Doorman will let you up.',
};

const Info: IOrderInfo = {
    id: '4f20a834-d67b-4c76-bb04-2d79fb4c71f172e71qe7',
    pickup_code: 'AZ45jd9pQckJf078',
    service_type: ServiceTypeEnum.DELIVERY,
    payment_is_cash: false,
    payment_type: PaymentTypeEnum.CREDIT,
    tip_payment_is_cash: true,
    tip_payment_type: PaymentTypeEnum.CASH,
    subtotal: '28.75',
    delivery_charge: '3.75',
    sales_tax: '2.87',
    tip: '4.59',
    total: '38.21',
    coupon_description: 'New York Restaurant Coupons - neighborhood discount',
    coupon_amount: '10000000000.75',
};

const Mod: IMod = {
    id: 'bc06e801-17f5-4350-a914-6a10bc0192f1',
    name: 'Pepperoni - Slices',
    category: 'Toppings - MEATS',
    external_id: 'A8271711',
    price: '2.33',
    quantity: '1',
};

const Item: IOrderItem = {
    id: '586240980',
    name: 'Large - Brooklyn Style Pizza',
    external_id: 'A8271710',
    price: '26.42',
    quantity: '1',
    notes: 'Please do not include the default Ranch dip.',
    mods: [Mod],
};

export const chowlyOrder: ICreateOrder = {
    customer: Customer,
    info: Info,
    items: [Item],
};

export const expectedChowlyOrder = plainToClass(Order, chowlyOrder);

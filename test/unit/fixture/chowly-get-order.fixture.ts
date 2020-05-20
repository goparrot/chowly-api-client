import { plainToClass } from 'class-transformer';
import { ReadOrder, RetrieveInfo } from '../../../src/index';
import { IRetrieveItem, IGetOrder } from '../../../src/interface';
import { ServiceTypeEnum, PaymentTypeEnum } from '../../.././src/enum';
import { Customer } from './chowly-order.fixture';

const Info: RetrieveInfo = {
    'order-id': '4f20a834-d67b-4c76-bb04-2d79fb4c71f172e7we1e',
    'special-notes2': 'AZ45jd9pQckJf078',
    'service-type': ServiceTypeEnum.DELIVERY,
    'payment-is-cash': 'false',
    'tip-payment-is-cash': 'true',
    'payment-type': PaymentTypeEnum.CREDIT,
    'tip-payment-type': PaymentTypeEnum.CASH,
    subtotal: 28.75,
    'delivery-charge': 3.75,
    'sales-tax': 2.87,
    tax_exempt: null,
    tip: 4.59,
    total: 38.21,
    is_future: 'false',
    future_at: '',
    placed_at: '2020-05-19 13:43:09 UTC',
    'coupon-description': 'New York Restaurant Coupons - neighborhood discount',
    'coupon-amount': 10000000000.75,
};

export const Item: IRetrieveItem = {
    id: '586240980',
    'menu-item-name': 'Large - Brooklyn Style Pizza',
    quantity: '1',
    price: '26.42',
    'special-instructions': 'Please do not include the default Ranch dip.',
    'menu-choices': 'Pepperoni - Slices',
    'menu-choices-hash': {
        'Toppings - MEATS': [
            {
                name: 'Pepperoni - Slices',
                price: 2.33,
            },
        ],
    },
    'customer-name': null,
};

export const chowlyRetrieveOrder: IGetOrder = {
    order: {
        guid: 'AE97510D-1283-4752-9FFA-00BC99D40AFD',
        payload: {
            customer: Customer,
            info: Info,
            items: [Item],
            configuration: {},
        },
        external_id: '4f20a834-d67b-4c76-bb04-2d79fb4c71f172e7we1e',
        created_at: '2020-05-19T13:43:09Z',
        completed_at: null,
        error_at: null,
        error_string: null,
        ticket_payload: null,
    },
};

export const expectedChowlyRetrieveOrder = plainToClass(ReadOrder, chowlyRetrieveOrder);

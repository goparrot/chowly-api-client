import { Item } from '../../../src/model/chowly.model';
import { chowlyCustomization } from './chowly-customization.fixture';
import { chowlyItemId } from './chowly-menu.fixture';

export const chowlyItem: Item = {
    nutritional_info: {},
    customizations: [chowlyCustomization],
    item_id: 'bb6aa926-c3ae-44f7-b694-5916ad2b27bd',
    title: 'Quesadillas',
    image_url: undefined,
    suspend_until: 0,
    price: 7,
    currency_code: 'USD',
    tax_rate: 15.75,
    vat_rate_percentage: 0,
    external_id: chowlyItemId,
    item_description: 'Quesadilla with your choice of PROTEIN.',
    is_alcohol: false,
};

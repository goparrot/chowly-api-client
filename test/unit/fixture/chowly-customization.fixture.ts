import { Customization } from '../../../src/model/chowly.model';
import { chowlyCustomizationOption } from './chowly-customization-option.fixture';
import { chowlyCustomizationId } from './chowly-menu.fixture';

export const chowlyCustomization: Customization = {
    customization_options: [chowlyCustomizationOption],
    customization_id: chowlyCustomizationId,
    title: 'Extra Additions',
    max_permitted: 6,
    min_permitted: 0,
    external_id: 'A8271711',
};

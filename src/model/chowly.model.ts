import { ICustomization, ICustomizationOption, IItem, INutritionalInfo, ISection, ISections, IServiceAvailability, ISubsection } from '../interface';

export class Sections implements ISections {
    sections: Section[];
}

export class Subsection implements ISubsection {
    items: Item[];
    subsection_id: string;
    title: string;
}

export class Section implements ISection {
    section_id: string;
    service_availability: IServiceAvailability[];
    subsections: Subsection[];
    subtitle: string;
    title: string;
}

export class Item implements IItem {
    currency_code: string;
    customizations: Customization[];
    external_id: string;
    image_url?: string;
    is_alcohol: boolean;
    item_description: string;
    item_id: string;
    nutritional_info: INutritionalInfo;
    price: number;
    suspend_until: number;
    tax_rate: number;
    title: string;
    vat_rate_percentage: number;
}

export class Customization implements ICustomization {
    customization_id: string;
    customization_options: CustomizationOption[];
    max_permitted: number;
    min_permitted: number;
    title: string;
}

export class CustomizationOption implements ICustomizationOption {
    customization_option_id: string;
    external_id: string;
    price: number;
    suspend_until: number;
    title: string;
}

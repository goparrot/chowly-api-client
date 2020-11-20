export interface ISections {
    sections: ISection[];
}

export interface ISection {
    service_availability: IServiceAvailability[];
    subsections: ISubsection[];
    section_id: string;
    title: string;
    subtitle: string;
    external_id: string;
}

export interface IServiceAvailability {
    time_periods: ITimePeriod[];
    enabled: boolean;
    day_of_week: string;
}

export interface ITimePeriod {
    start_time: string;
    end_time: string;
}

export interface ISubsection {
    items: IItem[];
    subsection_id: string;
    title: string;
    external_id: string;
}

export interface IItem {
    nutritional_info: INutritionalInfo;
    customizations: ICustomization[];
    item_id: string;
    title: string;
    image_url?: string;
    suspend_until: number;
    price: number;
    currency_code: string;
    tax_rate: number;
    vat_rate_percentage: number;
    external_id: string;
    item_description: string;
    is_alcohol: boolean;
}

export interface ICustomization {
    customization_options: ICustomizationOption[];
    customization_id: string;
    title: string;
    max_permitted: number;
    min_permitted: number;
    external_id: string;
}

export interface ICustomizationOption {
    customization_option_id: string;
    title: string;
    price: number;
    suspend_until: number;
    external_id: string;
}

export interface INutritionalInfo {}

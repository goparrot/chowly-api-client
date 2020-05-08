import { plainToClass } from 'class-transformer';
import { IServiceAvailability } from '../../../src/interface';
import { Section, Sections } from '../../../src/model/chowly.model';
import { chowlySubsection } from './chowly-subsection.fixture';
import { sectionId } from './chowly-menu.fixture';

export const serviceAvailability: IServiceAvailability = {
    time_periods: [
        {
            start_time: '11:00',
            end_time: '23:59',
        },
        {
            start_time: '00:00',
            end_time: '03:30',
        },
    ],
    enabled: true,
    day_of_week: 'monday',
};

export const chowlySection: Section = {
    service_availability: [serviceAvailability],
    subsections: [chowlySubsection, chowlySubsection],
    section_id: sectionId,
    title: 'Big Wig Tacos & Burritos',
    subtitle: 'Menu',
};

export const expectedChowlySection = plainToClass(Sections, chowlySection);

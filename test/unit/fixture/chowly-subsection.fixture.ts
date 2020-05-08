import { Subsection } from '../../../src/model/chowly.model';
import { chowlyItem } from './chowly-item.fixture';
import { subsectionId } from './chowly-menu.fixture';

export const chowlySubsection: Subsection = {
    items: [chowlyItem],
    subsection_id: subsectionId,
    title: 'Pick a Vessel',
};

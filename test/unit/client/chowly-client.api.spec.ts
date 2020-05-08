import MockAdapter from 'axios-mock-adapter';
import { ChowlyApiClient } from '../../../src/client';
import { chowlySection, expectedChowlySection } from '../fixture/chowly-section.fixture';
import { Sections } from '../../../src/model';

describe('ChowlyClient (unit)', () => {
    const basePath: string = `https://api.chowlyinc.com`;
    let client: ChowlyApiClient;
    let mock: MockAdapter;

    beforeEach(() => {
        client = new ChowlyApiClient({
            apiKey: 'test',
            baseUrl: basePath,
            maxRetries: 3,
        });

        mock = new MockAdapter(client.client);
    });

    describe('#list', () => {
        it('should return plain to class data', async () => {
            mock.onGet('/api/toos/v2/menus').reply(200, chowlySection);
            const data = await client.list();
            expect(JSON.parse(JSON.stringify(expectedChowlySection))).toEqual(data);
            expect(data instanceof Sections).toBe(true);
        });
    });
});

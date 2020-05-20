import MockAdapter from 'axios-mock-adapter';
import { ChowlyApiClient } from '../../../src/client';
import { chowlySection, expectedChowlySection } from '../fixture/chowly-section.fixture';
import { chowlyOrder } from '../fixture/chowly-order.fixture';
import { chowlyRetrieveOrder } from '../fixture/chowly-get-order.fixture';
import { ReadOrder, Sections, Order } from '../../../src/model';

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
            const data = await client.getMenu();
            expect(JSON.parse(JSON.stringify(expectedChowlySection))).toEqual(data);
            expect(data instanceof Sections).toBe(true);
        });
    });

    describe('#create', () => {
        it('should return plain to class data', async () => {
            mock.onPost('/api/toos/v2/orders', chowlyOrder).reply(200, chowlyOrder);
            const data = await client.createOrder(chowlyOrder);
            expect(JSON.parse(JSON.stringify(chowlyOrder))).toEqual(data);
            expect(data instanceof Order).toBe(true);
        });
    });

    describe('#get', () => {
        it('should return plain to class data', async () => {
            const orderId = 'AE97510D-1283-4752-9FFA-00BC99D40AFD';
            mock.onGet(`/api/toos/v2/orders/${orderId}`).reply(200, chowlyRetrieveOrder);
            const data = await client.getOrder(orderId);
            expect(JSON.parse(JSON.stringify(chowlyRetrieveOrder))).toEqual(data);
            expect(data instanceof ReadOrder).toBe(true);
        });
    });
});

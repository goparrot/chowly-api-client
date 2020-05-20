import MockAdapter from 'axios-mock-adapter';
import { ChowlyApiClient } from '../../../src/client';
import { chowlyOrder } from '../../unit/fixture/chowly-order.fixture';

describe('ChowlyClient (e2e)', (): void => {
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

    it('should do 3 retries with status 501', async (): Promise<any> => {
        mock.onGet().reply(501);
        await client.getMenu().catch((e) => {
            expect(e.response.status).toBe(501);
            expect(e.config['axios-retry'].retryCount).toBe(3);
        });
    });

    it('should not retry with status 400', async (): Promise<any> => {
        mock.onGet().reply(400);
        await client.getMenu().catch((e) => {
            expect(e.response.status).toBe(400);
            expect(e.config['axios-retry'].retryCount).toBe(0);
        });
    });

    it('should not retry with status 501', async (): Promise<any> => {
        const client = new ChowlyApiClient({
            apiKey: 'test',
            baseUrl: basePath,
            maxRetries: undefined,
        });
        mock = new MockAdapter(client.client);
        mock.onGet().reply(501);

        await client.getMenu().catch((e) => {
            expect(e.response.status).toBe(501);
            expect(e.config['axios-retry'].retryCount).toBe(6);
        });
    }, 20000);

    describe('#create', () => {
        it('should not retry with status 501', async (): Promise<any> => {
            const client = new ChowlyApiClient({
                apiKey: 'test',
                baseUrl: basePath,
                maxRetries: undefined,
            });
            mock = new MockAdapter(client.client);
            mock.onPost('/api/toos/v2/orders', chowlyOrder).reply(501);
            await client.createOrder(chowlyOrder).catch((e) => {
                expect(e.response.status).toBe(501);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        }, 20000);

        it('Should return 503', async () => {
            const msg: string = 'This platform is currently disabled.';
            mock.onPost('/api/toos/v2/orders', chowlyOrder).reply(503, { msg });
            await client.createOrder(chowlyOrder).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.msg).toBe(msg);
            });
        });

        it('Should return 422', async () => {
            const msg: string = "The property '#/info/coupon_amount' value 'abcd' did not match the regex '^[0-9]*\\.[0-9]{2}$'";
            mock.onPost('/api/toos/v2/orders', chowlyOrder).reply(422, { msg });
            await client.createOrder(chowlyOrder).catch((e) => {
                expect(e.response.status).toBe(422);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.msg).toBe(msg);
            });
        });

        it('Should return 401', async () => {
            const errors: string = 'Invalid Credentials';
            mock.onPost('/api/toos/v2/orders', chowlyOrder).reply(401, { errors });
            await client.createOrder(chowlyOrder).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.errors).toBe(errors);
            });
        });
    });

    describe('#get', () => {
        it('should not retry with status 501', async (): Promise<any> => {
            const orderId: string = 'xxxxxx';
            const client = new ChowlyApiClient({
                apiKey: 'test',
                baseUrl: basePath,
                maxRetries: undefined,
            });
            mock = new MockAdapter(client.client);
            mock.onGet(`/api/toos/v2/orders/${orderId}`).reply(501);
            await client.getOrder(orderId).catch((e) => {
                expect(e.response.status).toBe(501);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20000);

        it('Should return 503', async () => {
            const orderId: string = 'xxxxxx';
            const msg: string = 'This platform is currently disabled.';
            mock.onGet(`/api/toos/v2/orders/${orderId}`).reply(503, { msg });
            await client.getOrder(orderId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
                expect(e.response.data.msg).toBe(msg);
            });
        });
        it('Should return 404', async () => {
            const orderId: string = 'xxxxxx';
            const msg: string = 'Order not found';
            mock.onGet(`/api/toos/v2/orders/${orderId}`).reply(404, { msg });
            await client.getOrder(orderId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.msg).toBe(msg);
            });
        });
        it('Should return 401', async () => {
            const orderId: string = 'xxxxxx';
            const errors: string = 'Invalid Credentials';
            mock.onGet(`/api/toos/v2/orders/${orderId}`).reply(401, { errors });
            await client.getOrder(orderId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.errors).toBe(errors);
            });
        });
    });
});

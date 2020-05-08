import MockAdapter from 'axios-mock-adapter';
import { ChowlyApiClient } from '../../../src/client';

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
        await client.list().catch((e) => {
            expect(e.response.status).toBe(501);
            expect(e.config['axios-retry'].retryCount).toBe(3);
        });
    });

    it('should not retry with status 400', async (): Promise<any> => {
        mock.onGet().reply(400);
        await client.list().catch((e) => {
            expect(e.response.status).toBe(400);
            expect(e.config['axios-retry'].retryCount).toBe(0);
        });
    });

    it('should not retry with status 400', async (): Promise<any> => {
        mock.onGet().reply(400);
        await client.list().catch((e) => {
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

        await client.list().catch((e) => {
            expect(e.response.status).toBe(501);
            expect(e.config['axios-retry'].retryCount).toBe(6);
        });
    }, 20000);
});

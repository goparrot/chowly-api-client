import { AxiosInstance, AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { IClientConfig, ISections } from '../interface';
import { Sections } from '../model';
import { createAxiosInstance } from '../utils';

export class ChowlyApiClient {
    readonly client: AxiosInstance;
    private readonly config: IClientConfig;
    private basePrefix: string = '/api/toos/v2';

    constructor(config: IClientConfig) {
        this.config = {
            baseUrl: 'https://api.chowlyinc.com',
            ...config,
        };

        this.client = createAxiosInstance({
            axiosConfig: {
                baseURL: this.config.baseUrl,
            },
            apiKey: this.config.apiKey,
            maxRetries: this.config.maxRetries,
        });
    }

    async list(): Promise<Sections> {
        const response: AxiosResponse<ISections> = await this.client.get<ISections>(`${this.basePrefix}/menus`);

        return plainToClass(Sections, response.data);
    }
}

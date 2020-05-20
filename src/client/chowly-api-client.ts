import { AxiosInstance, AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { IClientConfig, ISections, IGetOrder, ICreateOrder } from '../interface';
import { Sections, ReadOrder, Order } from '../model';
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

    async getMenu(): Promise<Sections> {
        const response: AxiosResponse<ISections> = await this.client.get<ISections>(`${this.basePrefix}/menus`);

        return plainToClass(Sections, response.data);
    }

    async createOrder(order: ICreateOrder): Promise<Order> {
        const response: AxiosResponse<ICreateOrder> = await this.client.post<ICreateOrder>(`${this.basePrefix}/orders`, order, {
            headers: { 'Content-Type': 'application/json' },
        });

        return plainToClass(Order, response.data);
    }

    async getOrder(orderId: string): Promise<ReadOrder> {
        const response: AxiosResponse<IGetOrder> = await this.client.get<IGetOrder>(`${this.basePrefix}/orders/${orderId}`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return plainToClass(ReadOrder, response.data);
    }
}

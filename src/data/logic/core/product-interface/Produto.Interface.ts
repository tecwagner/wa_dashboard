import {StatusType} from '../status-type/status.type';

export default interface IProduct {
	id?: string;
	ean?: string;
	name: string;
	description?: string;
	priceOrder: number;
	priceCustom?: number;
	quantity: number;
	status: StatusType;
}

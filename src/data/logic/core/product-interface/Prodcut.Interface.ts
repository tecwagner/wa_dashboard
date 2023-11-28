import {StatusType} from '../status-type/status.type';

export default interface IProduct {
	id?: string;
	ean?: string;
	name: string;
	description?: string;
	priceOrder: number;
	priceCustom: number;
	quantity: number;
	status: StatusType;
}

export const newProductInit: IProduct = {
	name: '',
	ean: '',
	description: '',
	priceOrder: 0,
	priceCustom: 0,
	quantity: 0,
	status: StatusType.ATIVO,
};

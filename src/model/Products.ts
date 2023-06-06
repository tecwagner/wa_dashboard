export default interface Product {
	id: number;
	ean: string;
	name: string;
	priceCustom: number;
	priceOrder: number;
	quantity: number;
	status: string;
	groupId: number;
}

import prisma from '../prisma';

type Products = {
	id?: number;
	ean: string;
	name: string;
	priceCustom: number;
	priceOrder: number;
	quantity: number;
	status: boolean;
	groupId: number;
};

export async function createProduct(products: Products): Promise<Products> {
	const product = await prisma.product.create({
		data: products,
	});

	return product;
}

export async function getProductById(id: number) {
	const productId = await prisma.product.findFirst({
		where: {
			id,
		},
	});

	return productId;
}

import prisma from './prisma';

export interface IGroups {
	name: string;
	status: boolean;
}

export async function createGroup(name: string, status: boolean) {
	await prisma.groupProduct.create({
		data: {
			name,
			status,
		},
	});
}

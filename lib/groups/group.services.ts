// import {Groups} from '@/components/Group/GroupList';
import {GroupProduct} from '@prisma/client';
import {IGroups} from '../db';
import prisma from '../prisma';

type Groups = {
	id?: number;
	name: string;
	status: boolean;
};

export async function createGroup(groups: Groups): Promise<Groups> {
	const group = await prisma.groupProduct.create({data: groups});

	return group;
}

export async function getGroup() {
	const data = await prisma.groupProduct.findMany({
		where: {
			status: true,
		},
	});

	return data;
}

// export async function getGroupById(id: number): Promise<Groups | null> {
// 	const groupById = await prisma.groupProduct.findFirst({
// 		where: {
// 			id,
// 		},
// 	});
// 	return groupById;
// }

// export async function updateToGroup(
// 	id: number,
// 	groups: Groups
// ): Promise<Groups> {
// 	const groupId = await prisma.groupProduct.update({
// 		where: {id},
// 		data: {...groups},
// 	});
// 	return groupId;
// }

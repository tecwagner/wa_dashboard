import {PrismaClient} from '@prisma/client';
import {NextApiRequest, NextApiResponse} from 'next';
import {createGroup, getGroup} from '../../../../lib/groups/group.services';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {method, body, query} = req;
	const {group, search} = query;

	switch (method) {
		case 'POST':
			const existingGroup = await prisma.groupProduct.findFirst({
				where: {
					name: body.name,
				},
			});
			if (existingGroup) {
				res.status(400).json({message: 'Grupo já existe'});
				return;
			}

			const group = {...body};
			await createGroup(group);

			res.status(201).json({message: 'Grupo criado com sucesso'});
			break;

		case 'GET':
			const listGroup = await getGroup();

			if (listGroup.length < 0) {
				res.status(400).json({message: 'Lista de Grupos vázia'});
			}

			res.status(200).json(listGroup);
			break;
	}
}

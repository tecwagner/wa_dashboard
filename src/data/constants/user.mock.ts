import IUser from '../logic/core/user-interface/User.Interface';
import Id from '../logic/core/comum/id.random/Id';
import { StatusType } from '../logic/core/status-type/status.type';

const usersMock: IUser[] = [
	{
		id: Id.novo(),
		name: 'Igor Faleiros',
		email: 'igor.faleiros@gmail.com',
		document: '216.874.394-00',
		// imagemUrl: null,
		status: StatusType.ATIVO
	},
	{
		id: Id.novo(),
		name: 'Wagner Oliveira',
		email: 'wagner.oliveira@gmail.com',
		document: '232.534.725-74',
		// imagemUrl: null,
		status: StatusType.INATIVO
	} ,
	{
		id: Id.novo(),
		name: 'Amanda Daniele',
		email: 'amanda.daniele@gmail.com',
		document: '45.309.057/0001-05',
		// imagemUrl: null,
		status: StatusType.ATIVO
	} 
]

export default usersMock
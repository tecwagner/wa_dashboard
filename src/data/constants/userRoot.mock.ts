import IUser from '../logic/core/user-interface/User.Interface';
import Id from '../logic/core/comum/id.random/Id';
import { StatusType } from '../logic/core/status-type/status.type';

export default  {
	id: Id.novo(),
	name: 'Igor Faleiros',
	email: 'igor.faleiros@gmail.com',
	imagemUrl: null,
	status: StatusType.ATIVO
} as IUser;

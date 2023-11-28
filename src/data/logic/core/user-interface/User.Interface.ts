import { StatusType } from "../status-type/status.type";

export default interface IUser {
	id?: string;
	name: string;
	email: string;
	imageUrl?: string | null;
	document?: string;
	telephone?: string;
	status: StatusType;
}
export const newUsuario: IUser = {
	name: '',
	email: '',
	document: '',
	imageUrl: '',
	telephone: '',
	status: StatusType.ATIVO
}

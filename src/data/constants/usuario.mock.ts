import IUsuario from '../logic/core/usuarios-interface/Usuario.Interface';
import Id from '../logic/core/comum/id.random/Id';

export default {
	id: Id.novo(),
	name: 'Igor Faleiros',
	email: 'igor.faleiros@gmail.com',
	imagemUrl: null,
} as IUsuario;

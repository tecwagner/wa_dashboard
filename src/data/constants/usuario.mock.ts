import IUsuario from '../logic/core/usuarios-interface/Usuario.Interface';
import Id from '../logic/core/comum/id.random/Id';

export default {
	id: Id.novo(),
	name: 'João da Silva',
	email: 'joaosiva@gmail.com',
	imagemUrl: null,
} as IUsuario;

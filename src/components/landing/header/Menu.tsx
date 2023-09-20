// import {useContext} from 'react';
import MenuItem from './MenuItem';
import {IconBrandGoogle} from '@tabler/icons-react';
// import AutenticacaoContext from '@/src/data/contexts/AutenticacaoContext';

export default function Menu() {
	// const {loginGoogle} = useContext(AutenticacaoContext);

	function loginGoogle() {
		alert('Login com o Google');
	}

	return (
		<div className="flex gap-2">
			{/* <MenuItem url="#start" className="hidden sm:flex">
				Início
			</MenuItem>
			<MenuItem url="#advantage" className="hidden sm:flex">
				Vantagens
			</MenuItem>
			<MenuItem url="#highlights" className="hidden sm:flex">
				Destaques
			</MenuItem> */}
			<MenuItem
				onClick={loginGoogle}
				className="bg-gradient-to-r from-red-600 to-red-500"
			>
				<div className="flex items-center gap-2">
					<IconBrandGoogle size={15} />
					<span>Login</span>
				</div>
			</MenuItem>
		</div>
	);
}

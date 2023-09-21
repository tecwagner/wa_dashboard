// https://unicode-table.com/en/1F44B/
import usuario from '@/src/data/constants/usuario.mock';

export default function Welcome() {
	function renderizarNome() {
		return (
			<span className="hidden sm:inline-block">
				{usuario?.name?.split(' ')[0]}
			</span>
		);
	}

	return <div className={`text-3xl font-black`}>Olá {renderizarNome()} 👋</div>;
}

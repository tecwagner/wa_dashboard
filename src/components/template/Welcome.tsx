// https://unicode-table.com/en/1F44B/
import userRoot from '@/src/data/constants/userRoot.mock';

export default function Welcome() {
	function renderizarNome() {
		return (
			<span className="hidden sm:inline-block">
				{userRoot?.name?.split(' ')[0]}
			</span>
		);
	}

	return <div className={`text-3xl font-black`}>Olá {renderizarNome()} 👋</div>;
}

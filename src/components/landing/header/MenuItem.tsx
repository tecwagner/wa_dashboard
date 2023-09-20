import Link from 'next/link';

interface MenuItemProps {
	children: any;
	url?: string; // Opçao para adicionar uma url de navegação
	onClick?: () => void; //Opção para criar um function com metodo de click
	className?: string;
}
export default function MenuItem(props: MenuItemProps) {
	function renderizarBotao() {
		return (
			<div
				className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 rounded-md h-9
                ${props.className ?? ''}
            `}
				onClick={props.onClick}
			>
				{props.children}
			</div>
		);
	}

	// Caso tenha passado uma url ele rederiza se não ele rederiza pelo metodo do onClick
	return props.url ? (
		<Link href={props.url}>{renderizarBotao()}</Link>
	) : (
		renderizarBotao()
	);
}

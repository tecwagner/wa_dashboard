import {IconArrowRight, IconVideo} from '@tabler/icons-react';

export default function Slogan() {
	function renderizarFraze() {
		return (
			<div
				className={`
                 flex flex-col item-center md:items-start text-4xl lg:text-6xl
                 text-white font-light
                `}
			>
				<div className="flex gap-2.5">
					<div className={`relative`}>
						<span
							className={`
                            absolute bottom-1 left-0 w-full
                            border-b-8 border-green-500
                            -rotate-2
                        `}
						></span>
						<span className="relative">Melhor</span>
					</div>
					<div>maneira</div>
				</div>
				<div className="flex gap-2.5">
					<span>de</span>
					<span>organizar</span>
				</div>
				<div className="flex gap-2.5">
					<span>sua</span>
					<span
						className={`
                        flex items-center p-1
                        relative text-black
                    `}
					>
						<span className="absolute -rotate-1 top-0.5 left-0 w-full h-5/6 bg-yellow-300 rounded-sm"></span>
						<span className="relative rotate-2 z-20">empresa</span>
					</span>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-center gap-5 ">
			{renderizarFraze()}
			<div className="text-sm lg:text-lg font-thin text-zinc-300 text-center sm:text-left">
				Plataforma administrativa que simplifica sua vida!
			</div>
		</div>
	);
}

import Area from '../comum/Area';
import Logo from '../comum/Logo';
import SocialMedia from './SocialMedia';

export default function Footer() {
	return (
		<Area className="bg-black  fixed bottom-0 left-0 right-0">
			<div className="flex flex-row md:flex-row md:justify-between items-center p-6">
				<SocialMedia />
				<p className="text-zinc-100 mt-2 md:mt-0 text-center">
					<span className="font-bold">Wagner Rodrigues</span> ®
					{new Date().getFullYear()} - Todos os direitos reservados
				</p>
			</div>
		</Area>
	);
}

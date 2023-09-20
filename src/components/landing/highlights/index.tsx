import ImagemResponsiva from '../comum/ImagemResponsiva';
import principal from '@/public/highlights.jpg';
import Slogan from './Slogan';
import Area from '../comum/Area';

export default function Highlights() {
	return (
		<Area id="start" className="pt-20">
			<div
				className={`
				flex items-center
				justify-around
				h-[500px]
			`}
			>
				<Slogan />
				<ImagemResponsiva
					imagem={principal}
					className="rotate-3 hidden md:inline"
				/>
			</div>
		</Area>
	);
}

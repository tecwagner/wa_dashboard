import Logo from '../comum/Logo';
import Menu from './Menu';
import Area from '../comum/Area';

export default function Header() {
	return (
		<Area className={`bg-black fixed z-50`}>
			<div className="flex items-center justify-between h-20">
				<Logo />
				<Menu />
			</div>
		</Area>
	);
}

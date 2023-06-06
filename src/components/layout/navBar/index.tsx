import Link from 'next/link';
import classes from './NavBar.module.scss';

export default function NavBar() {
	return (
		<nav
			className={`navbar navbar-expand-lg ${classes.nav} ${classes.bank001}`}
		>
			<div className={`container-fluid ${classes.navbarBody}`}>
				<Link className={`navbar-brand ${classes.navbarBrand}`} href="/welcome">
					<div className={classes.logoName}>
						<h2>Solles</h2>
					</div>
				</Link>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link " aria-current="page" href="/product">
								Produtos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/group">
								Grupo de Produtos
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" href="/orders">
								Vendas
							</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link" href="/users">
								Usuários
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

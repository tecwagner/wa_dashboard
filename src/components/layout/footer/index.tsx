import classes from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={classes.footer}>
			Copyright &copy; {new Date().getFullYear()}
			<a target="_blank" rel="noopener noreferrer">
				Wagner Rodrigues
			</a>
			.
		</footer>
	);
}

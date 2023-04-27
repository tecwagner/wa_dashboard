import classes from './Footer.module.scss';

const Footer: React.FunctionComponent = (props) => {
	return (
		<footer className={classes.footer}>
			Copyright &copy; {new Date().getFullYear()}
			<a target="_blank" rel="noopener noreferrer">
				Wagner Rodrigues
			</a>
			.
		</footer>
	);
};

export default Footer;

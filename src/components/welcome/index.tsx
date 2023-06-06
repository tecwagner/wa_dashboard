import classes from './Welcome.module.scss';

interface WelcomeProps {
	children: React.ReactNode;
}

export default function Welcome(props: WelcomeProps) {
	return <main className={classes.welcome}>{props.children}</main>;
}

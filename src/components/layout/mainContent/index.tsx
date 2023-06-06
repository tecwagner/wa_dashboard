import classes from './MainContent.module.scss';

interface MainContentProps {
	children: React.ReactNode;
}

export default function MainContent(props: MainContentProps) {
	return (
		<main className={classes.main}>
			<div className="container">{props.children}</div>
		</main>
	);
}

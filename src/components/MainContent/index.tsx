import classes from './MainContent.module.scss';

interface MainContentProps {
	children: React.ReactNode;
}

const MainContent: React.FunctionComponent<MainContentProps> = (props) => {
	return (
		<main className={classes.main}>
			<div className="container">{props.children}</div>
		</main>
	);
};

export default MainContent;

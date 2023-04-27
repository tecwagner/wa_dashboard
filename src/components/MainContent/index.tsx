import classes from './MainContent.module.scss';

const MainContent: React.FunctionComponent = (props: any) => {
	return (
		<main className={classes.main}>
			<div className="container">{props.children}</div>
		</main>
	);
};

export default MainContent;

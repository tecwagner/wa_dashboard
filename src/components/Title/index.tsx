import classes from './Title.module.scss';

type Props = {
	children: string;
};

const Title = (props: Props) => {
	return <h1 className={classes.title}>{props.children}</h1>;
};

export default Title;

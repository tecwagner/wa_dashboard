import classes from './Title.module.scss';

interface TitleProps {
	children: string;
}

export default function Title(props: TitleProps) {
	return <h1 className={classes.title}>{props.children}</h1>;
}

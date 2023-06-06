import classes from './Page.module.scss';

interface PageProps {
	externa?: boolean;
	children: any;
}

export default function Page(props: PageProps) {
	return <div className={classes.page}>{props.children}</div>;
}

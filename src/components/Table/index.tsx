import classes from './Table.module.scss';

type TableProps = {
	th: string[];
	td: string[];
};
export const Table: React.FunctionComponent<TableProps> = (props) => {
	const columsHeader: any[] = [];

	// for (let i = 0; i < props.th.length; ++i) {
	// 	columsHeader.push(<th key={props.th[i]}>{props.th[i]}</th>);
	// }

	const rows = props.th.map((th) => {
		return <td key={th}>{columsHeader}</td>;
	});

	return (
		<div className={classes.TableComponent}>
			<table border={1}>
				<thead>
					<tr>{rows}</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
};

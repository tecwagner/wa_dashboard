import Groups from '@/model/Group';
import Layout from '../layout';
import Title from '../title';

interface ListGroupsProps {
	groups: Groups[];
}

const ListGroup = (props: ListGroupsProps) => {
	return (
		<Layout>
			<Title>Lista de Grupo de Produtos</Title>

			<div>
				<table
					border={1}
					className={`table table-striped table-bordered table-ligth table-hover`}
				>
					<thead className={`table `}>
						<tr className={`text-center table-dark`}>
							<th scope="col">ID</th>
							<th scope="col">GRUPO</th>
							<th scope="col">STATUS</th>
							<th scope="col">AÇÕES</th>
						</tr>
					</thead>
					<tbody>
						{props.groups.map(
							(g: any, index: number) => (
								console.log(g.status),
								(
									<tr
										key={g.name}
										className={`text-center
                            ${index % 2 === 0 ? 'grew' : 'white'}`}
									>
										<td>{g.id}</td>
										<td>{g.name}</td>
										<td>{(g.status = 'Ativo')}</td>
										<td>option</td>
									</tr>
								)
							)
						)}
					</tbody>
				</table>
			</div>
		</Layout>
	);
};

export default ListGroup;

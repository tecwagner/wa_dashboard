import Layout from '@/components/Layout';
import Title from '@/components/Title';

const Groups: React.FunctionComponent = (props) => {
	return (
		<Layout>
			<Title>Grupo de Produtos</Title>

			<form className="row g-3">
				<div className="col-md-6">
					<label htmlFor="nameGroup" className="form-label">
						Nome
					</label>
					<input type="text" className="form-control" id="nameGroup" />
				</div>

				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="gridCheck"
						/>
						<label className="form-check-label" htmlFor="gridCheck">
							Status Grupo
						</label>
					</div>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">
						Salvar
					</button>
				</div>
			</form>
		</Layout>
	);
};

export default Groups;

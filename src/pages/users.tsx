import Layout from '@/components/Layout';
import Title from '@/components/Title';
import React from 'react';

const Users: React.FunctionComponent = (props) => {
	return (
		<Layout>
			<Title>Usuários</Title>

			<form className="row g-3">
				<div className="col-md-6">
					<label htmlFor="nameUser" className="form-label">
						Nome
					</label>
					<input type="text" className="form-control" id="nameUser" />
				</div>

				<div className="col-md-6">
					<label htmlFor="inputEmail4" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
				<div className="col-md-6">
					<label htmlFor="inputPassword4" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" id="inputPassword4" />
				</div>

				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="gridCheck"
						/>
						<label className="form-check-label" htmlFor="gridCheck">
							Status Usuário
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

export default Users;

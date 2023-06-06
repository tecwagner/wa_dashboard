import Layout from '@/components/layout';
import Title from '@/components/title';
import {useState} from 'react';

export default function Groups() {
	const [name, setName] = useState(' ');
	const [status, setStatus] = useState(false);

	const handleSumit = async (event: any) => {
		event.preventDefault();

		const response = await fetch('/api/group/groups', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({name, status}),
		});

		if (!response.ok) {
			// throw new Error(`Grupo já existe: ${response.statusText}`);
			alert('Grupo já existe');
		}

		const {message} = await response.json();
		alert('Grupo criado com sucesso');
		return message;
	};

	return (
		<Layout>
			<Title>Grupo de Produtos</Title>

			<form className="row g-3" onSubmit={handleSumit}>
				<div className="col-md-6">
					<label htmlFor="nameGroup" className="form-label">
						Nome
					</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						className="form-control"
						id="nameGroup"
					/>
				</div>

				<div className="col-12">
					<div className="form-check">
						<input
							checked={status}
							onChange={(e) => setStatus(e.target.checked)}
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
}

import Layout from '@/components/layout';
import Title from '@/components/title';

const Products: React.FunctionComponent = (props) => {
	return (
		<Layout>
			<Title>Produtos</Title>

			<form className="row g-3">
				<div className="col-md-3">
					<label htmlFor="eanProduct" className="form-label">
						Cod. Barras
					</label>
					<input type="text" className="form-control" id="eanProduct" />
				</div>
				<div className="col-md-6">
					<label htmlFor="nameProduct" className="form-label">
						Nome
					</label>
					<input type="text" className="form-control" id="nameProduct" />
				</div>
				<div className="col-md-3">
					<label htmlFor="productGroup" className="form-label">
						Grupo
					</label>
					<select id="productGroup" className="form-select">
						<option selected>Selecione Grupo</option>
						<option>...</option>
					</select>
				</div>
				<div className="col-md-3">
					<label htmlFor="quantity" className="form-label">
						Quantidade
					</label>
					<input type="number" className="form-control" id="quantity" />
				</div>
				<div className="col-md-3">
					<label htmlFor="priceCustom" className="form-label">
						Valor de Compra
					</label>
					<input type="text" className="form-control" id="priceCustom" />
				</div>
				<div className="col-md-3">
					<label htmlFor="priceCustom" className="form-label">
						Valor de Venda
					</label>
					<input type="text" className="form-control" id="priceCustom" />
				</div>

				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="gridCheck"
						/>
						<label className="form-check-label" htmlFor="gridCheck">
							Status Produto
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

export default Products;

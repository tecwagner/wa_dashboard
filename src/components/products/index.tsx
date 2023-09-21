import {useState} from 'react';
import Body from '../template/Body';
import Header from '../template/Header';
import Page from '../template/Page';
import productsMock from '@/src/data/constants/product.mock';
import List from './List';
import IProduct from '@/src/data/logic/core/product-interface/Produto.Interface';

export default function Products() {
	const [product, setProduct] = useState<IProduct[]>(productsMock);

	return (
		<Page>
			<Header />
			<Body className="gap-5">
				Produtos
				<List products={product} />
			</Body>
		</Page>
	);
}

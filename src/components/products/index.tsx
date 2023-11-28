import {useEffect, useState} from 'react';
import Body from '../template/Body';
import Header from '../template/Header';
import Page from '../template/Page';
import productsMock from '@/src/data/constants/product.mock';
import List from './List';
import IProduct, {
	newProductInit,
} from '@/src/data/logic/core/product-interface/Prodcut.Interface';
import Forms from './Form';
import NotFound from '../template/NotFound';
import Id from '@/src/data/logic/core/comum/id.random/Id';
import {Autocomplete, Button} from '@mantine/core';
import {IconForms, IconPlus, IconSearch} from '@tabler/icons-react';
import TitlePage from '../template/TitlePage';

export default function Products() {
	const [initialProducts, setInitialProducts] =
		useState<IProduct[]>(productsMock);
	const [products, setProducts] = useState<IProduct[]>(initialProducts);
	const [product, setProduct] = useState<IProduct | null>(null);
	const [searchTerm, setSearchTerm] = useState('');

	function update(product: IProduct) {
		const showProduct = products.filter((p) => p.id !== product.id);
		setProducts([...showProduct, {...product, id: product.id ?? Id.novo()}]);
		setProduct(null);
	}

	function remove(product: IProduct) {
		const showProduct = products.filter((p) => p.id !== product.id);
		setProducts(showProduct);
		setProduct(null);
	}

	const searchProduct = () => {
		const result = products.filter(
			(p) =>
				p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				p.id?.toLowerCase() === searchTerm.toLowerCase()
		);
		setProducts(result);
		setProduct(null);
	};

	useEffect(() => {
		if (searchTerm) {
			searchProduct();
		} else {
			setProducts(initialProducts);
		}
	}, [searchTerm, initialProducts]);

	return (
		<Page>
			<Header />
			<TitlePage
				className="flex justify-center items-center py-4"
				icone={<IconForms />}
				mainTitle="Dados Cadastrais de Produtos"
				subTitle={''}
			/>
			<Body className="gap-5">
				<div className="flex justify-between gap-4">
					<div
						className={`flex border border-zinc-800 justify-between gap-4 rounded-xl `}
					>
						<IconSearch size={35} />
						<Autocomplete
							placeholder="Digite sua pesquisa..."
							onChange={(value) => setSearchTerm(value)}
							value={searchTerm}
							data={[]}
						/>
					</div>
					<Button
						className="bg-blue-500"
						leftIcon={<IconPlus />}
						onClick={() => setProduct(newProductInit)}
					>
						Adicionar Produtos
					</Button>
				</div>
				{product ? (
					<Forms
						product={product}
						save={update}
						cancel={() => setProduct(null)}
						delete={remove}
					/>
				) : products.length ? (
					<List products={products} selectProduct={setProduct} />
				) : (
					<NotFound>Nenhum produto encontrado</NotFound>
				)}
			</Body>
		</Page>
	);
}

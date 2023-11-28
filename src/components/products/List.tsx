import IProduct from '@/src/data/logic/core/product-interface/Prodcut.Interface';
import Money from '@/src/data/logic/utils/Money';
import {IconTrendingDown, IconTrendingUp} from '@tabler/icons-react';

interface IListProduct {
	products: IProduct[];
	selectProduct?: (product: IProduct) => void;
}

export default function List(props: IListProduct) {
	function renderType(product: IProduct) {
		return (
			<span
				className={`
            flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
            ${product.status === 'ativo' ? 'bg-green-500' : 'bg-red-500'}
            `}
			>
				{product.status === 'ativo' ? <IconTrendingUp /> : <IconTrendingDown />}
			</span>
		);
	}

	function renderList(product: IProduct, indice: number) {
		return (
			<div
				key={product.id}
				className={`
            flex items-center gap-3 p-3 cursor-pointer
            ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `}
				onClick={() => props.selectProduct?.(product)}
			>
				{renderType(product)}
				<span className="w-full md:w-1/2">{product.name}</span>
				<span className="hidden md:inline flex-1">{product.quantity}</span>
				<span>{Money.format(product.priceOrder)}</span>
			</div>
		);
	}

	return (
		<div
			className={`
            flex flex-col border border-zinc-700 rounded-xl overflow-hidden
        `}
		>
			{props.products.map(renderList)}
		</div>
	);
}

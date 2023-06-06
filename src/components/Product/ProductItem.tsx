import Product from '@/model/Products';

interface ProductItemProps {
	product: Product;
}
const Products = (props: ProductItemProps) => {
	const {product} = props;

	return <div></div>;
};

export default Products;

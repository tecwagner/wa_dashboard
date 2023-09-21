import Id from '../logic/core/comum/id.random/Id';
import IProduct from '../logic/core/product-interface/Produto.Interface';
import {StatusType} from '../logic/core/status-type/status.type';

const productsMock: IProduct[] = [
	{
		id: Id.novo(),
		ean: '13564796561654564',
		name: 'Bom Box JBL',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 900.8,
		priceCustom: 523.34,
		quantity: 5,
		status: StatusType.ATIVO,
	},
	{
		id: Id.novo(),
		ean: '13564796561654646',
		name: 'Boombox bomba',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 600.8,
		priceCustom: 123.34,
		quantity: 0,
		status: StatusType.INATIVO,
	},
	{
		id: Id.novo(),
		ean: '13564796561452187',
		name: 'Bom Box Camuflada',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 800.8,
		priceCustom: 123.34,
		quantity: 10,
		status: StatusType.ATIVO,
	},
	{
		id: Id.novo(),
		ean: '1356479656162546',
		name: 'Bom Box  Silk3 Branca',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 750.8,
		priceCustom: 83.34,
		quantity: 22,
		status: StatusType.ATIVO,
	},
	{
		id: Id.novo(),
		ean: '1356479656165475',
		name: 'Bom Box New',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 900.8,
		priceCustom: 523.34,
		quantity: 7,
		status: StatusType.ATIVO,
	},
	{
		id: Id.novo(),
		ean: '135647965616952175',
		name: 'Bom Box New Camuflada',
		description: 'Caixa de som mais vendida no momento',
		priceOrder: 600.8,
		priceCustom: 213.34,
		quantity: 0,
		status: StatusType.INATIVO,
	},
];

export default productsMock;

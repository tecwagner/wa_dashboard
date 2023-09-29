import useStateForm from '@/src/data/hooks/useForm';
import IProduct from '@/src/data/logic/core/product-interface/Produto.Interface';
import {StatusType} from '@/src/data/logic/core/status-type/status.type';
import Money from '@/src/data/logic/utils/Money';
import {Button, Group, Radio, TextInput} from '@mantine/core';

interface IFormsProps {
	product: IProduct;
	save: (product: IProduct) => void;
	delete: (product: IProduct) => void;
	cancel: () => void;
}

export default function Forms(props: IFormsProps) {
	const {data, changeAttributes} = useStateForm<IProduct>(props.product);

	return (
		<div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
			<div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
			<div className=" flex flex-col gap-4 p-4 sm:p-7">
				<TextInput
					label="Nome"
					value={data.name}
					onChange={changeAttributes('name')}
				></TextInput>
				<TextInput
					label="Descrição"
					value={data.description ?? ' N/A'}
					onChange={changeAttributes('description')}
				></TextInput>
				<TextInput
					label="Estoque"
					value={data.quantity}
					onChange={changeAttributes('quantity')}
				></TextInput>
				<TextInput
					label="Valor Venda"
					value={Money.format(data.priceOrder) ?? ' N/A'}
					onChange={changeAttributes('priceOrder', Money.desformat)}
				></TextInput>
				<TextInput
					label="Valor Custo"
					value={Money.format(data.priceCustom) ?? ' N/A'}
					onChange={changeAttributes('priceCustom', Money.desformat)}
				></TextInput>
				<Radio.Group value={data.status} onChange={changeAttributes('status')}>
					<Group>
						<Radio value={StatusType.ATIVO} label="Ativo" />
						<Radio value={StatusType.INATIVO} label="Inativo" />
					</Group>
				</Radio.Group>
			</div>
			<div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
				<Button
					className="bg-green-500"
					color="greee"
					onClick={() => props.save?.(data)}
				>
					Salvar
				</Button>
				<Button className="bg-zinc-500" color="gray" onClick={props.cancel}>
					Voltar
				</Button>
				<div className="flex-1"> </div>
				{data.id && (
					<Button
						className="bg-red-500"
						color="red"
						onClick={() => props.delete?.(data)}
					>
						Excluir
					</Button>
				)}
			</div>
		</div>
	);
}

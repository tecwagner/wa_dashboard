import useStateForm from '@/src/data/hooks/useForm';
import {StatusType} from '@/src/data/logic/core/status-type/status.type';
import IUser from '@/src/data/logic/core/user-interface/User.Interface';

import {Button, Group, Radio, TextInput} from '@mantine/core';

interface IFormsProps {
	usuario: IUser;
	save: (usuario: IUser) => void;
	delete: (usuario: IUser) => void;
	cancel: () => void;
}

export default function Forms(props: IFormsProps) {
	const {data, changeAttributes} = useStateForm<IUser>(props.usuario);

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
					label="E-mail"
					value={data.email }
					onChange={changeAttributes('email')}
				></TextInput>
				<TextInput
					label="CPF/CNPJ"
					value={data.document}
					onChange={changeAttributes('document')}
				></TextInput>
				<TextInput
					label="TELEFONE"
					value={data.telephone}
					onChange={changeAttributes('telephone')}
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

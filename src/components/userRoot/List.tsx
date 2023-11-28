

import IUser from '@/src/data/logic/core/user-interface/User.Interface';
import {IconUserOff, IconUser} from '@tabler/icons-react';

interface IListUsers {
	users: IUser[];
	selectUser?: (user: IUser) => void;
}

export default function List(props: IListUsers) {
	function renderType(user: IUser) {
		return (
			<span
				className={`
            flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full
            ${user.status === 'ativo' ? 'bg-green-500' : 'bg-red-500'}
            `}
			>
				{user.status === 'ativo' ? <IconUser /> : <IconUserOff />}
			</span>
		);
	}

	function renderList(user: IUser, indice: number) {
		return (
			<div
				key={user.id}
				className={`
            flex items-center gap-3 p-3 cursor-pointer
            ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}
            `}
				onClick={() => props.selectUser?.(user)}
			>
				{renderType(user)}
				<span className="w-full md:w-1/2">{user.name}</span>
				<span className="hidden md:inline flex-1">{user.email}</span>
				<span>{user.document}</span>
			</div>
		);
	}

	return (
		<div
			className={`
            flex flex-col border border-zinc-700 rounded-xl overflow-hidden
        `}
		>
			{props.users.map(renderList)}
		</div>
	);
}

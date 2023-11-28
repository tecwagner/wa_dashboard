import {Avatar, Menu} from '@mantine/core';
import {IconLogout, IconShirt, IconUser} from '@tabler/icons-react';
import userRoot from '@/src/data/constants/userRoot.mock';
import user from '@/src/data/constants/user.mock';
import Link from 'next/link';

export default function MenuUser() {
	function logout() {
		console.log('logged out');
	}

	return (
		<Menu>
			<Menu.Target>
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="hidden md:flex flex-col select-none">
						<span className="text-sm font-bold text-zinc-200">
							{userRoot?.name}
						</span>
						<span className="text-xs text-zinc-400">{userRoot?.email}</span>
					</div>
					<Avatar
						size={40}
						radius="xl"
						src={
							userRoot?.imageUrl ??
							'https://source.unsplash.com/random/100x100/?abstract'
						}
					/>
				</div>
			</Menu.Target>
			<Menu.Dropdown>
				<Link href="/">
					<Menu.Label>Usuário</Menu.Label>
				</Link>
				<Link href="/user-root">
					<Menu.Item icon={<IconUser size={14} />}>Meus Dados</Menu.Item>
				</Link>
				<Link href="/user">
					<Menu.Item icon={<IconUser size={14} />}>Usuários</Menu.Item>
				</Link>
				<Link href="/product">
					<Menu.Item icon={<IconShirt size={14} />}>Produtos</Menu.Item>
				</Link>
				<Menu.Divider />
				<Menu.Item color="red" icon={<IconLogout size={14} />} onClick={logout}>
					Sair
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}

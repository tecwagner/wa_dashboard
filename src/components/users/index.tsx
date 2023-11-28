
import { IconForms } from "@tabler/icons-react";

import TitlePage from "../template/TitlePage";
import Body from "../template/Body";
import Page from "../template/Page";
import Header from "../template/Header";
import { useState } from "react";
import IUser from "@/src/data/logic/core/user-interface/User.Interface";
import userMock from "../../data/constants/user.mock";
import Forms from "../userRoot/Form";
import Id from "@/src/data/logic/core/comum/id.random/Id";
import List from "./List";
import NotFound from "../template/NotFound";



export default function Users() {
	const [initUsers, setInitUser] = useState<IUser[]>(userMock);
	const [users, setUsers] = useState<IUser[]>(initUsers);
	const [user, setUser] = useState<IUser | null>(null)


	function update(user: IUser) {
		const showUser = users.filter((u) => u.id !== user.id);
		setUsers([...showUser, {...user, id: user.id ?? Id.novo()}]);
		setUser(null);
	}

	function remove(user: IUser) {
		const showUser = users.filter((u) => u.id !== user.id);
		setUsers(showUser);
		setUser(null);
	}

    return (
		<Page>
			<Header />
			<TitlePage    
				className="flex justify-center items-center py-4"            
				icone={<IconForms />}
				mainTitle="Dados Cadastrais de usuário"
				subTitle={``}
			/>
			<Body className="gap-5">
				<div className="flex justify-between gap-4">
					<div className={`flex border border-zinc-800 justify-between gap-4 rounded-xl `}></div>
				</div>
				{user  ? (
				<Forms
					user={user}
					save={update}
					cancel={()=> setUser(null)}
					delete={remove}
				/>
				) : users.length ? (
					<List  users={users} selectUser={setUser}/>
				) : (
					<NotFound>Nenhum produto encontrado</NotFound>
				)		
			}

			</Body>
		</Page>
	)
}
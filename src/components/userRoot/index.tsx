
import { IconForms } from "@tabler/icons-react";

import TitlePage from "../template/TitlePage";
import Body from "../template/Body";
import Page from "../template/Page";
import Header from "../template/Header";
import { useState } from "react";
import IUser from "@/src/data/logic/core/user-interface/User.Interface";
import userMock from "../../data/constants/user.mock";


export default function Users() {
	const [initUsers, setInitUser] = useState<IUser[]>(userMock);
	const [user, setUser] = useState<IUser | null>(null)
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
				
			</Body>
		</Page>
	)
}
import {IconForms} from '@tabler/icons-react';
import Header from '../components/template/Header';
import Page from '../components/template/Page';
import usuario from '../data/constants/usuario.mock';
import TitlePage from '../components/template/TitlePage';
import Body from '../components/template/Body';

export default function PageProduct() {
	return (
		<Page>
			<Header />
			<TitlePage
				icone={<IconForms />}
				mainTitle="Dados Cadastrais de Produtos"
				subTitle={`Informações de ${usuario?.email}`}
			/>
			<Body>Produto Page</Body>
		</Page>
	);
}

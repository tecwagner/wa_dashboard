import Page from '../template/Page';
import Footer from './footer';
import Main from './mainContent';
import NavBar from './navBar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
	return (
		<Page>
			<NavBar />
			<Main>{props.children}</Main>
			<Footer />
		</Page>
	);
}

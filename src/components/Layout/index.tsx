import Footer from '../Footer';
import Main from '../MainContent';
import NavBar from '../NavBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
	return (
		<>
			<NavBar />
			<Main>{props.children}</Main>
			<Footer />
		</>
	);
};

export default Layout;

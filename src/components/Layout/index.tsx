import Footer from '../Footer';
import Main from '../MainContent';
import NavBar from '../NavBar';

const Layout: React.FunctionComponent = (props: any) => {
	return (
		<>
			<NavBar />
			<Main>{props.children}</Main>
			<Footer />
		</>
	);
};

export default Layout;

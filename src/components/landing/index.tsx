import Page from '../template/Page';
import Footer from './footer';
import Header from './header';
import Highlights from './highlights';

export default function Landing() {
	return (
		<Page external>
			<Header />
			<Highlights />
			<Footer />
		</Page>
	);
}

import Layout from '@/components/layout';
import Welcome from '@/components/welcome';

const welcome = () => {
	return (
		<Layout>
			<Welcome>
				<h2>Sejam bem vindos!</h2>
			</Welcome>
		</Layout>
	);
};

export default welcome;

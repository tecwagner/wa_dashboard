import '@/src/styles/globals.css';
import type {AppProps} from 'next/app';
import {MantineProvider} from '@mantine/core';

export default function App({Component, pageProps}: AppProps) {
	return (
		<MantineProvider
			theme={{
				colorScheme: 'dark',
			}}
		>
			<Component {...pageProps} />
		</MantineProvider>
	);
}

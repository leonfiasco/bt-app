import { StateProvider } from '../components/contextApi/StateProvider';
import reducer, { initialState } from '../components/contextApi/reducer';
import Header from '../components/Header/Header';

import './globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<Header />
			<Component {...pageProps} />
		</StateProvider>
	);
}

import './global.css';

import App from './App.svelte';
import { applyPolyfills, defineCustomElements } from '@shriramethiraj/spacex-web-components/loader';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

applyPolyfills().then(() => {
	defineCustomElements();
  });
  
export default app;

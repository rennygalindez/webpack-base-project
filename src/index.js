import './assets/css/component-styles.css';
import './global_style.css';
import { saludar } from './js/modules/functions';

const h2EL = document.createElement('h2');
h2EL.innerText = saludar();

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import our custom CSS
import './scss/app.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import loading from './components/icons/loading.vue'
import rocket from './components/rocket.vue'
createApp(rocket).mount('#rocket');
createApp(loading).mount('#loading');

const app = createApp(App)



app.mount('#app')

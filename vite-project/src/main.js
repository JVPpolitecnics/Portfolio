import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import our custom CSS
import './scss/app.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import loading from './components/icons/loading.vue'
import rocket from './components/rocket.vue'
import cv from './components/cv.vue'
import projects from './components/projects.vue'
createApp(rocket).mount('#rocket');
createApp(loading).mount('#loading');
createApp(projects).mount('#projects');
createApp(cv).mount('#cv');

const app = createApp(App)



app.mount('#app')

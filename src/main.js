
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify' // Импортируем конфигурацию Vuetify

const app = createApp(App)

// Подключаем Pinia
app.use(createPinia())

// Подключаем Vuetify
app.use(vuetify)

app.mount('#app')

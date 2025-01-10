import 'vuetify/styles'  // Импортируем стили Vuetify
import { createVuetify } from 'vuetify'

// Создаем и настраиваем Vuetify
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', // Устанавливаем тему по умолчанию
  },
})

export default vuetify
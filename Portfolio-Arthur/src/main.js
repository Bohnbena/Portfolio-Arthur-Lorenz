import { createApp, h } from 'vue'
import App from './App.vue'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import naive from 'naive-ui'
import router from './router'
import { NConfigProvider } from 'naive-ui'

const app = createApp({
    render: () =>
        h(NConfigProvider, {
            themeOverrides: {
                Anchor: {
                    linkFontSize: '16px',
                    linkPadding: '5px 10px',
                    linkTextColor: 'gray',       // Gelb
                    linkTextColorActive: 'black', // Weiß
                    linkTextColorHover: 'black',  // Schwarz
                    linkTextColorPressed: 'black',// Schwarz
                    linkTextColorFocus: '#8fd3f2',  // Schwarz
                    linkColor: '#b0dff5',
                    railColorActive : 'black',
                }
            }
        }, { default: () => h(App) })
})

app.use(router)
app.use(naive)

AOS.init()
app.mount('#app')

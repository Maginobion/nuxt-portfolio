// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'


export default defineNuxtConfig({
    app:{
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    typescript:{
        shim: false
    },
    modules: [
        '@unocss/nuxt',
        '@nuxt/image-edge',
    ],
    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ],
            })
        ],      
    },
    unocss:{
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        // core options
        shortcuts: [],
        rules:[],
    },
    runtimeConfig:{
        nodemaileruser: process.env.MAILTRAP_USERNAME,
        nodemailerpass: process.env.MAILTRAP_PASSWORD
    },
    css: ['@/assets/css/styles.css'],
    
})

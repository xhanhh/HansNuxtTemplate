import type { Pinia } from 'pinia'
import { useThemeStore } from '~/stores/theme'

export default defineNuxtPlugin({
    name: 'theme',
    setup(nuxtApp) {
        const themeStore = useThemeStore(nuxtApp.$pinia as Pinia)
        const applyTheme = (theme: 'light' | 'dark') => {
            const html = document.documentElement
            html.classList.remove('dark', 'light')
            html.classList.add(theme)
            html.dataset.theme = theme
            html.style.colorScheme = theme
        }

        themeStore.initTheme()

        watch(
            () => themeStore.actualTheme,
            (theme) => {
                applyTheme(theme)
            },
            { immediate: true }
        )
    },
})
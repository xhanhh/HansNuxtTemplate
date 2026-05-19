import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

type ThemeMode = 'light' | 'dark' | 'auto'

export const useThemeStore = defineStore('theme', () => {
    const colorMode = useColorMode()
    const themeName = ref<ThemeMode>('auto')
    const prefersDark = ref(false)
    const hasInitialized = ref(false)
    let mediaQuery: MediaQueryList | null = null

    const syncColorMode = () => {
        colorMode.preference = themeName.value === 'auto' ? 'system' : themeName.value
        colorMode.value = actualTheme.value
    }

    const setupSystemThemeListener = () => {
        if (!import.meta.client || !window.matchMedia || mediaQuery) {
            return
        }

        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        prefersDark.value = mediaQuery.matches

        const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
            prefersDark.value = event.matches
        }

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleChange)
        }
    }

    const actualTheme = computed(() => {
        if (themeName.value === 'auto') {
            return prefersDark.value ? 'dark' : 'light'
        }
        return themeName.value
    })

    const initTheme = () => {
        if (!import.meta.client || hasInitialized.value) {
            return
        }

        setupSystemThemeListener()
        syncColorMode()
        hasInitialized.value = true
    }

    const toggleTheme = () => {
        themeName.value =
            themeName.value === 'light'
                ? 'dark'
                : themeName.value === 'dark'
                    ? 'auto'
                    : 'light'
    }

    watch(actualTheme, () => {
        syncColorMode()
    })

    return {
        themeName,
        actualTheme,
        toggleTheme,
        initTheme,
    }
}, {
    persist: {
        pick: ['themeName'],
    },
})
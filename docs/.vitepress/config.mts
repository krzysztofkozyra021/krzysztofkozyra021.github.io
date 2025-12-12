import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "ŁapGo",
    description: "Dokumentacja projektu ŁapGo",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Dokumentacja', link: '/opis-projektu' }
        ],

        sidebar: [
            {
                text: 'Spis treści',
                items: [
                    { text: 'Opis projektu, grupa, podział ról', link: '/opis-projektu' },
                    { text: 'Założenia funkcjonalne i technikalia', link: '/zalozenia' },
                    { text: 'Instrukcja uruchomienia', link: '/instrukcja' },
                    { text: 'Sesja Event Storming / User Stories', link: '/event-storming' },
                    { text: 'Backlog', link: '/backlog' },
                    { text: 'Estymacja', link: '/estymacja' },
                    { text: 'Zarządzanie projektem / Podział zadań w sprintach', link: '/sprinty' },
                    { text: 'Dokumentacja Użytkownika', link: '/dokumentacja-uzytkownika' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/blumilksoftware/interns2025c' }
        ]
    }
})

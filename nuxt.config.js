module.exports = {
    css: [
        '@/assets/css/style.scss'
    ],
    modules: [
        '@nuxtjs/markdownit'
    ],
    head: {
        title: 'Josee Wouters - Front-end developer',
        titleTemplate: '%s - JoseeWouters.nl',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Josee Wouters is een front-end developer in Nijmegen, momenteel beschikbaar voor freelance front-end projecten. Uurtarief: € 55,-' },
            { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Josee Wouters - Front-end developer' },
            { hid: 'og:type', name: 'og:type', property:'og:type', content: 'Josee Wouters - Front-end developer' },
            { hid: 'og:description', name: 'og:description', property:'og:description', content: 'Josee Wouters is een front-end developer in Nijmegen, momenteel beschikbaar voor freelance front-end projecten. Uurtarief: € 55,-' },
            { hid: 'og:image', name: 'og:image', property:'og:image', content: '/media/images/toetsenbord.jpg' },
            { hid: 'og:url', name: 'og:url', property:'og:url', content: 'https://joseewouters.nl' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:site', name: 'twitter:site', content: '@codergirlnl' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Josee Wouters - Front-end developer' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Josee Wouters is een front-end developer in Nijmegen, momenteel beschikbaar voor freelance front-end projecten. Uurtarief: € 55,-' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    }
}

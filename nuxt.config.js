import axios from '@nuxtjs/axios'

export default {
    generate: {
        routes: function () {
            return axios.get('~/content/blog')
            .then((res) => {
                return res.data.map((post) => {
                    return '/blog/' + post.slug
                })
            })
        }
    },
}

module.exports = {
    css: [
        '@/assets/css/style.scss'
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        // proxyHeaders: false
    },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false
            }
        },
    },
    head: {
        title: 'Josee Wouters - Front-end developer',
        titleTemplate: '%s - JoseeWouters.nl',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Josee Wouters is een front-end developer in Nijmegen, momenteel beschikbaar voor freelance front-end projecten. Uurtarief: € 55,-' },
            { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Josee Wouters - Front-end developer' },
            { hid: 'og:type', name: 'og:type', property:'og:type', content: 'website' },
            { hid: 'og:description', name: 'og:description', property:'og:description', content: 'Josee Wouters is een front-end developer in Nijmegen, momenteel beschikbaar voor freelance front-end projecten. Uurtarief: € 55,-' },
            { hid: 'og:image', name: 'og:image', property:'og:image', content: 'https://joseewouters.nl/_nuxt/img/toetsenbord.27ab1e1.jpg' },
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

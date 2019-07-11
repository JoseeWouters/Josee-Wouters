import fs from 'fs'
import fm from 'front-matter'

function getContents() {
    const contents = {
        blog: [],
        games: [],
        study: [],
        work: [],
        books: [],
        all: [],
        routes: [],
    }

    const blogFiles = fs.readdirSync('./content/blog');
    
    blogFiles.forEach(fileName => {
        const file = fs.readFileSync(`./content/blog/${fileName}`, 'utf-8');
        const content = fm(file);

        const slug = fileName.replace(/\.md$/, '');

        contents.blog.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.all.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.routes.push(`/blog/${slug}`);
    });

    const gameFiles = fs.readdirSync('./content/games');
    
    gameFiles.forEach(fileName => {
        const file = fs.readFileSync(`./content/games/${fileName}`, 'utf-8');
        const content = fm(file);

        const slug = fileName.replace(/\.md$/, '');

        contents.games.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.all.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.routes.push(`/games/${slug}`);
    });

    const studyFiles = fs.readdirSync('./content/study');

    studyFiles.forEach(fileName => {
        const file = fs.readFileSync(`./content/study/${fileName}`, 'utf-8');
        const content = fm(file);

        const slug = fileName.replace(/\.md$/, '');

        contents.study.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.all.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.routes.push(`/study/${slug}`);
    });

    const workFiles = fs.readdirSync('./content/work');

    workFiles.forEach(fileName => {
        const file = fs.readFileSync(`./content/work/${fileName}`, 'utf-8');
        const content = fm(file);

        const slug = fileName.replace(/\.md$/, '');

        contents.work.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.all.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.routes.push(`/work/${slug}`);
    });

    const bookFiles = fs.readdirSync('./content/books');

    bookFiles.forEach(fileName => {
        const file = fs.readFileSync(`./content/books/${fileName}`, 'utf-8');
        const content = fm(file);

        const slug = fileName.replace(/\.md$/, '');

        contents.books.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.all.push({
            ...content.attributes,
            slug,
            body: content.body
        });

        contents.routes.push(`/books/${slug}`);
    });

    return contents;
}

const contents = getContents();

module.exports = {
    css: [
        '@/assets/css/style.scss'
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        debug: true
    },
    generate: {
        routes: [
          ...contents.routes
        ]
    },
    head: {
        titleTemplate: '%s - JoseeWouters.nl',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'og:type', name: 'og:type', property:'og:type', content: 'website' },
            { hid: 'og:image', name: 'og:image', property:'og:image', content: 'https://joseewouters.nl/_nuxt/img/toetsenbord.27ab1e1.jpg' },
            { hid: 'og:url', name: 'og:url', property:'og:url', content: 'https://joseewouters.nl' },
            { hid: 'og:description', name: 'og:description', property:'og:description', content: '' },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:site', name: 'twitter:site', content: '@codergirlnl' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: '/js/minimal-analytics.js' }
        ],
    },
    env: {
        contents
    }
}

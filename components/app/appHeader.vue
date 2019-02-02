<template>
    <header class=" header">
        <h1 class="title" itemprop="name"><nuxt-link to="/">Josee Wouters</nuxt-link></h1>
        <h2 class="subtitle" itemprop="hasOccupation">Front-end developer</h2>
        <div class="latest">
            <div v-for="item in firstBlog" :key="item.title">
                <h3>Schrijft nu:</h3>
                <nuxt-link :to="/blog/ + item.slug">{{item.title}}</nuxt-link>
            </div>
            <div v-for="item in firstGame" :key="item.title">
                <h3>Speelt nu:</h3>
                {{item.title}}
            </div>
            <div v-for="item in firstStudy" :key="item.title">
                <h3>Leert nu:</h3>
                {{item.title}}
            </div>
            <div v-for="item in firstWork" :key="item.title">
                <h3>Werkt aan:</h3>
                {{item.title}}
            </div>
            <div v-for="item in firstBook" :key="item.title">
                <h3>Leest nu:</h3>
                {{item.title}}
            </div>
        </div>
    </header>
</template>

<script>
import _ from 'lodash';

export default {
    data () {
        return {
            blog: process.env.contents.blog,
            games: process.env.contents.games,
            study: process.env.contents.study,
            work: process.env.contents.work,
            books: process.env.contents.books
        }
    },
    computed: {
        firstBlog: function() {
            let blogs = _.orderBy(this.blog, 'date', 'desc')
            return {
                firstblog: _.head(blogs)
            }
        },
        firstGame: function() {
            let games = _.orderBy(this.games, 'date', 'desc')
            return {
                firstgame: _.head(games)
            }
        },
        firstStudy: function() {
            let studies = _.orderBy(this.study, 'date', 'desc')
            return {
                firststudy: _.head(studies)
            }
        },
        firstWork: function() {
            let works = _.orderBy(this.work, 'date', 'desc')
            return {
                firstwork: _.head(works)
            }
        },
        firstBook: function() {
            let books = _.orderBy(this.books, 'date', 'desc')
            return {
                firststudy: _.head(books)
            }
        }
    }
}
</script>

<style lang="scss">
.title {

    a {
        text-decoration: none;
    }
}

.subtitle {
    margin-bottom: 1rem;
}

.latest {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>

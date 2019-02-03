<template>
    <section class="latest">
        <div v-for="item in latestBlog" :key="item.title" class="latest__item blog">
            <h3>Schrijft nu:</h3>
            <p>{{item.title}}</p>
        </div>
        <div v-for="item in latestGame" :key="item.title" class="latest__item game">
            <h3>Speelt nu:</h3>
            <p>{{item.title}}</p>
        </div>
        <div v-for="item in latestStudy" :key="item.title" class="latest__item study">
            <h3>Leert nu:</h3>
            <p>{{item.title}}</p>
        </div>
        <div v-for="item in latestWork" :key="item.title" class="latest__item work">
            <h3>Werkt aan:</h3>
            <p>{{item.title}}</p>
        </div>
        <div v-for="item in latestBook" :key="item.title" class="latest__item book">
            <h3>Leest nu:</h3>
            <p>{{item.title}}</p>
        </div>
    </section>
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
        latestBlog: function() {
            let blogs = _.orderBy(this.blog, 'date', 'desc')
            return {
                latestblog: _.head(blogs)
            }
        },
        latestGame: function() {
            let games = _.orderBy(this.games, 'date', 'desc')
            return {
                latestgame: _.head(games)
            }
        },
        latestStudy: function() {
            let studies = _.orderBy(this.study, 'date', 'desc')
            return {
                lateststudy: _.head(studies)
            }
        },
        latestWork: function() {
            let works = _.orderBy(this.work, 'date', 'desc')
            return {
                latestwork: _.head(works)
            }
        },
        latestBook: function() {
            let books = _.orderBy(this.books, 'date', 'desc')
            return {
                lateststudy: _.head(books)
            }
        }
    }
}
</script>

<style lang="scss">
.latest {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 25px;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black);
    margin-bottom: 2rem;
    .latest__item {
        position: relative;
        &::after {
            content: '';
            background-image: url('~static/media/icons/pen.svg');
            background-size: contain;
            display: block;
            width: 45px;
            height: 45px;
            opacity: .1;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
        }
        &.game::after {
            background-image: url('~static/media/icons/game.svg');
        }
        &.study::after {
            background-image: url('~static/media/icons/study.svg');
        }
        &.work::after {
            background-image: url('~static/media/icons/work.svg');
        }
        &.book::after {
            background-image: url('~static/media/icons/book.svg');
        }
    }
}
</style>

<template>
    <main class="resume">
        <article v-for="item in allItems" :key="item.title" class="article">
            <div v-if="item.layout === 'work'" class="work">
                <p class="date">
                    {{item.displayDate}}
                </p>
                <h2 class="title">
                    {{item.title}}
                </h2>
                <p class="client">
                    {{item.client}}
                </p>
                <div class="intro">
                    {{item.intro}}
                </div>
                <a v-if="item.url" :href="item.url">Bekijk {{item.title}}</a>
            </div>
            <div v-if="item.layout === 'game'" class="game">
                <h2 class="title">
                    {{item.title}} - {{item.console}}
                </h2>
            </div>
            <div v-if="item.layout === 'blog'" class="blog">
                <p class="date">
                    {{item.displayDate}}
                </p>
                <h2 class="title">
                    {{item.title}}
                </h2>
                <div class="intro">
                    {{item.intro}}
                </div>
                <a v-if="item.url" :href="item.url">Lees {{item.title}}</a>
                <nuxt-link v-else :to="/blog/ + item.slug">Lees {{item.title}}</nuxt-link>
            </div>
            <div v-if="item.layout === 'book'" class="book">
                <h2 class="title">
                    {{item.title}} - {{item.author}}
                </h2>
            </div>
            <div v-if="item.layout === 'study'" class="study">
                <p class="date">
                    {{item.displayDate}}
                </p>
                <h2 class="title">
                    {{item.title}}
                </h2>
            </div>
        </article>
    </main>
</template>

<script>
import _ from 'lodash';

export default {
    layout: 'home',
    data () {

        return {
            all: process.env.contents.all
        }
    },
    computed: {
        allItems: function () {
            console.log(process.env.contents.all)
            return _.orderBy(this.all, 'date', 'desc')
        },
    }
}

</script>

<style lang="scss">
.resume {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.article {
    position: relative;
    margin-bottom: 1rem;
    > div {
        margin-left: 50px;
        &::before {
            content: '';
            background-image: url('~static/media/icons/pen.svg');
            background-size: contain;
            display: block;
            width: 25px;
            height: 25px;
            position: absolute;
            left: 0;
            top: 0;
        }
        &.game::before {
            background-image: url('~static/media/icons/game.svg');
        }
        &.study::before {
            background-image: url('~static/media/icons/study.svg');
        }
        &.work::before {
            background-image: url('~static/media/icons/work.svg');
        }
        &.book::before {
            background-image: url('~static/media/icons/book.svg');
        }
    }
    .date {
        font-size: .9rem;
        font-style: italic;
    }
    .client {
        font-weight: bold;
        margin-top: .2rem;
    }
    .intro {
        margin-top: .2rem;
        margin-bottom: .2rem;
    }
} 
</style>
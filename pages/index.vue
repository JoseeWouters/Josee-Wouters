<template>
    <main>
        <h2>
            Blogs
        </h2>
        <ul>
            <li v-for="item in blogsByDate" :key="item.title">
                <nuxt-link :to="/blog/ + item.slug">{{item.title}}</nuxt-link>
            </li>
        </ul>
    </main>
</template>

<script>
import _ from 'lodash';

export default {
    layout: 'home',
    data () {
        return {
            blog: process.env.contents.blog
        }
    },
    computed: {
        blogsByDate: function () {
            return _.orderBy(this.blog, 'date', 'desc')
        }
    }
}

</script>

<style lang="scss">
ul {
    list-style: none;
}

main {
    margin-top: 2rem;
}
</style>
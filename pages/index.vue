<template>
    <main>
        <h2>
            CV
        </h2>
        <ul>
            <li v-for="item in allItems" :key="item.title">
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
            all: process.env.contents.all
        }
    },
    computed: {
        allItems: function () {
            return _.orderBy(this.all, 'date', 'desc')
        }
    }
}

</script>

<style lang="scss">
ul {
    list-style: none;
}
</style>
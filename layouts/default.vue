<template>
    <div class="wrapper">
        <app-header/>
        <app-latest/>
        <nuxt/>
    </div>
</template>

<script>

import appHeader from '@/components/app/appHeader.vue'
import appLatest from '@/components/app/appLatest.vue'

export default {
    components: {
        appHeader,
        appLatest
    }
}
</script>

<style lang="scss">
    .content {
        max-width: 70ch;
        margin-left: auto;
        margin-right: auto;

        .title {
            margin-bottom: .5em;
        }

        .intro {
            font-weight: bold;
            font-size: 1.1rem;
        }

        p {
            margin-bottom: 1em;
        }
    }
</style>

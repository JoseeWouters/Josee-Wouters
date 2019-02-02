<template>
    <div class="wrapper">
        <app-header/>
        <app-article/>
        <app-footer/>
    </div>
</template>

<script>

import appHeader from '@/components/app/appHeader.vue'
import appFooter from '@/components/app/appFooter.vue'
import appArticle from '@/components/app/appArticle.vue'

export default {
    components: {
            appHeader,
            appFooter,
            appArticle
    }
}
</script>
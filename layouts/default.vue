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
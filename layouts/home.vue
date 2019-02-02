<template>
    <div class="wrapper">
        <app-header/>
        <nuxt/>
        <app-footer/>
    </div>
</template>

<script>

import appHeader from '@/components/app/appHeader.vue'
import appFooter from '@/components/app/appFooter.vue'

export default {
    components: {
            appHeader,
            appFooter
    }
}
</script>
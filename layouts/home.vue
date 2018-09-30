<template>
    <div class="wrapper">
        <app-header/>
        <app-settings/>
        <nuxt/>
        <app-footer/>
    </div>
</template>

<script>

import appHeader from '@/components/app/appHeader.vue'
import appSettings from '@/components/app/appSettings.vue'
import appFooter from '@/components/app/appFooter.vue'

export default {
    components: {
            appHeader,
            appSettings,
            appFooter
    }
}
</script>
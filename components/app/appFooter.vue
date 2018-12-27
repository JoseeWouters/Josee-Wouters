<template>
    <footer class="block">
        <div class="footer">
            <h2 class="subtitle">Contact</h2>
            <p><iconPhoneSquare/> <span itemprop="telephone"><a href="tel:0623161080">06 - 23 16 10 80</a></span></p>
            <p><iconMailSquare/> <span itemprop="email"><a href="mailto:mail@joseewouters.nl">mail@joseewouters.nl</a></span></p>
            <p><iconGithubSquare/> <span><a href="https://github.com/JoseeWouters">GitHub</a></span></p>
            <p><iconLinkedin/> <span><a href="https://www.linkedin.com/in/joseewouters/">LinkedIn</a></span></p>
        </div>
    </footer>
</template>

<script>

import iconGithubSquare from '@/components/icons/iconGithubSquare.vue'
import iconLinkedin from '@/components/icons/iconLinkedin.vue'
import iconMailSquare from '@/components/icons/iconMailSquare.vue'
import iconPhoneSquare from '@/components/icons/iconPhoneSquare.vue'

export default {
    components: { 
            iconGithubSquare,
            iconLinkedin,
            iconMailSquare,
            iconPhoneSquare
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/base/_variables.scss";
.footer {
    @include background(var(--primary, #88C2DD));
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .subtitle {
        flex: 1 1 100%;
    }
    p {
        display: flex;
        align-items: center;
        svg {
            height: 24px;
            margin-right: 5px;
        }
    }
}
</style>

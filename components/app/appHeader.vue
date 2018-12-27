<template>
    <header class="block header">
        <div class="top">
            <div class="heading">
                <h2 class="title" itemprop="name"><nuxt-link to="/">Josee Wouters</nuxt-link></h2>
                <div class="social">
                    <a href="https://github.com/JoseeWouters" aria-label="Github"><iconGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/joseewouters/" aria-label="LinkedIn"><iconLinkedin/></a>
                    <a href="mailto:mail@joseewouters.nl" aria-label="Mail"><iconMailSquare/></a>
                </div>
            </div>
        </div>
        <div class="right">
        </div>
        <div class="bottom-right">
            <h2 class="subtitle" itemprop="hasOccupation">Front-end developer</h2>
        </div>
    </header>
</template>

<script>

import iconGithubSquare from '@/components/icons/iconGithubSquare.vue'
import iconLinkedin from '@/components/icons/iconLinkedin.vue'
import iconMailSquare from '@/components/icons/iconMailSquare.vue'

export default {
    components: { 
            iconGithubSquare,
            iconLinkedin,
            iconMailSquare
    }
}
</script>

<style lang="scss">
@import "@/assets/css/base/_variables.scss";
.header {
    display: grid;
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
    }
    .top {
        @include verticalCenter();
        background: url('/static/media/images/header.jpg') no-repeat center center / cover;
        padding: 3rem 0;
        grid-row: 1/3;
        .heading {
            @include background(#ffffff);
            @include background(var(--white));
            .social {
                font-size: 1.5em;
            }
            a {
                color: #01385D;
                color: var(--text);
                transition: .25s ease;
                margin: 0 5px 0 0;
                text-decoration: none;
                &:hover {
                    color: #88C2DD;
                    color: var(--primary);
                }
                svg {
                    height: 24px;
                }
            }
        }
    }
    .right {
        background: url('/static/media/images/toetsenbord.jpg') no-repeat top center / cover;
        min-height: 4rem;
    }
    .bottom-right {
        @include verticalCenter();
        @include background(#88C2DD);
        @include background(var(--primary));
        grid-row: 3;
        @media (min-width: 768px) {
            grid-row: 2;
        }
    }
}
</style>

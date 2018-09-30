<template>
    <main class="block about">
        <section class="skills">
            <h2 class="subtitle">Freelance beschikbaar</h2>
            <h3 class="price">€ 55 p/u</h3>
            <p>Ik ben beschikbaar als freelance front-end developer voor websites, web apps en mobile apps voor iOS en Android.</p>
            <p>Ik heb ervaring met onder andere: </p>
            <ul class="list">
                <li class="list__item">Vue.JS</li>
                <li class="list__item">Angular</li>
                <li class="list__item">Cordova</li>
                <li class="list__item">Ionic</li>
                <li class="list__item">HTML5</li>
                <li class="list__item">CSS3</li>
                <li class="list__item">JavaScript</li>
                <li class="list__item">jQuery</li>
                <li class="list__item">Wordpress</li>
                <li class="list__item">Umbraco</li>
            </ul>
        </section>
        <section class="news">
            <h2 class="subtitle">Nieuws</h2>
            <article class="article">
                <h3><nuxt-link to="/blog/what-dinner-nu-te-downloaden">What Dinner? nu te downloaden in de App Store</nuxt-link></h3>
            </article>
        </section>
    </main>
</template>

<script>

export default {
    layout: 'home'
}
</script>

<style lang="scss">
@import "@/assets/css/base/_variables.scss";
.about {
    display: grid;
    grid-gap: 1em;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    .skills {
        @include background(var(--secondary));
    }
    .price {
        color: var(--text);
    }
    .list {
        list-style: none;
        padding: 0;
        &__item {
            padding: 0.5em 0 0 0;
            
        }
    }
    .news {
        @include background(var(--tertiary));
        .article {
            margin: 1rem 0;
            h3 {
                font-size: 1.5rem;
                a:hover {
                    color: var(--primary);
                }
            }
        }
    }
}
</style>
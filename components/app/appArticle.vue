<template>
    <main class="block blog">
        <aside></aside>
        <article class="article">
            <nuxt/>
        </article>
        <aside></aside>
    </main>
</template>

<style lang="scss">
@import "@/assets/css/base/_variables.scss";
.blog {
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: 1fr minmax(75ch, 1fr) 1fr;
        grid-gap: 1em;
    }
    aside {
        @include background(var(--tertiary, #F3D6EC));
        padding: 0;
    }
    .article {
        @include background(var(--secondary, rgba(136,194,221,0.27)));
        h1 {
            font-size: 2.2rem;
        }
        h2 {
            font-size: 2rem;
        }
        a:hover {
            color: var(--primary, #88C2DD);
        }
    }
}
</style>

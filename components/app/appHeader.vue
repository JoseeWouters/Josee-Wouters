<template>
    <header class=" header">
        <h1 class="chapeau" itemprop="hasOccupation">Front-end UI developer</h1>
        <h2 class="title" itemprop="name"><nuxt-link to="/">Josee Wouters</nuxt-link></h2>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.header {
    font-family: 'Cinzel', serif;
    margin-bottom: 1rem;
    .chapeau {
        font-size: 2rem;
        text-align: center;
        padding-bottom: .5rem;
        border-bottom: 3px solid var(--black);
    }
    .title {
        font-size: 3.4rem;
        text-align: center;
        padding-top: .5rem;
        padding-bottom: .5rem;
        border-bottom: 5px solid var(--black);
    }
    a {
        text-decoration: none;
    }
}
</style>

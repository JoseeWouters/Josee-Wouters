<template>
    <article class="article">
        <h1>{{ title }}</h1>
        <div v-html="body"></div>
    </article>
</template>

<script>

export default {
    layout: 'blog',
    
    async asyncData({ params }) {
        let post = await import('markdown-with-front-matter-loader!~/content/study/' + params.slug + '.md')
        return { 
                title: post.title,
                body: post.__content
            }
    }
}
</script>
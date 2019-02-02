<template>
    <article class="article">
        <h1>Blog</h1>
    </article>
</template>

<script>

export default {
    layout: 'blog',
    head: {
        title: 'Blogs',
        meta: [
            { hid: 'description', name: 'description', content: '' }
        ]
    },
    mounted () {
        console.log(process.env.contents) // {}
    }
}
</script>

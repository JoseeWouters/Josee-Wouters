<template lang="md">
    <h1>{{ title }}</h1>
    {{ body }}
</template>

<script>
export default {
    layout: 'blog',
    data (){
        return {
            title: '',
            body: '',
        }
    },
    async asyncData({ params }) {
        let post = await import('~/content/blog/' + params.slug + '.md');
        return post;
    }
}
</script>
<template>
  <main class="content">
    <h1 class="title">{{ title }}</h1>
    <p class="intro">{{ intro }}</p>
    <article v-html="body" class="blog-article"></article>
  </main>
</template>

<script>
export default {
  layout: "blog",

  async asyncData({ params }) {
    let post = await import(
      "markdown-with-front-matter-loader!~/content/blog/" + params.slug + ".md"
    );
    return {
      title: post.title,
      intro: post.intro,
      body: post.__content
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "description",
          name: "description",
          content: this.intro
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.intro
        }
      ]
    };
  }
};
</script>
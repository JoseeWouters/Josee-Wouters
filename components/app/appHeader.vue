<template>
  <header class="header">
    <div class="contact">
      <p class="availabilty">Beschikbaar</p>
      <p>€ 65,- excl. btw</p>
      <a href="mailto:info@joseewouters.nl">info@joseewouters.nl</a>
      <a href="tel:0623161080">06 23 16 10 80</a>
      <a href="https://github.com/JoseeWouters">GitHub</a>
      <a href="https://codepen.io/joseewouters/#">CodePen</a>
    </div>
    <h1 class="chapeau" itemprop="hasOccupation">Front-end UI developer</h1>
    <h2 class="title" itemprop="name">
      <nuxt-link to="/">Josee Wouters</nuxt-link>
    </h2>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  font-family: "Cinzel", serif;
  margin-bottom: 1rem;
  .chapeau {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--primary);
  }
  .title {
    font-size: 3.4rem;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 5px solid var(--primary);
  }
  a {
    text-decoration: none;
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-family: "Lora", serif;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--primary);
    margin-bottom: 1rem;
    a {
      text-decoration: underline;
    }
    * {
      margin-right: 1rem;
    }
  }
  .availabilty {
    &::before {
      content: "";
      display: inline-block;
      background-color: var(--available);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
}
</style>

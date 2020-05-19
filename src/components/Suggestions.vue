<template>
  <section class="suggestions">
    <h2>OMF | Recommande</h2>
    <nav class="suggestionsNav">
      <ul>
        <li>
          <ArticleCover/>
        </li>
        <li>
          <ArticleCover/>
        </li>
        <li>
          <ArticleCover/>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import ArticleCover from "@/components/ArticleCover.vue";

export default {
  name: 'Suggestions',
  components: {
    ArticleCover
  }
}
</script>

<style scoped>

.suggestions {
  padding: 1rem 4.5rem 0;
  border-top: 1px solid black;
}

.suggestions h2 {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
}

.suggestionsNav {
  margin-top: 5rem;
}

.suggestionsNav ul {
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

</style>
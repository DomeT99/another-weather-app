<script setup>
const props = defineProps({
  city: String,
  dataFetch: {
    type: Array,
  },
});
</script>
<template>
  <section class="section fade-in">
    <header class="column has-text-centered">
      <h1>{{ props.city ?? "" }}</h1>
    </header>
    <hr class="bg-white" />
    <div v-for="data in props.dataFetch">
      <div class="columns">
        <div class="column has-text-centered-mobile">
          <h2>{{ data.name }}</h2>
        </div>
        <div class="column has-text-centered-mobile">
          <p>{{ data.value }}</p>
        </div>
      </div>
      <hr class="bg-white" />
    </div>
  </section>
</template>
<style scoped>
.bg-white {
  opacity: 1;
  background-color: #fff !important;
}
</style>

<script setup>
import { useComponentStore } from "../store/componentStore";
const store = useComponentStore();
</script>
<template>
  <div class="notification is-secondary has-text-centered" style="border: 1px solid black;">
    <button class="delete"></button>
    <p>{{ store.notification }}</p>
  </div>
</template>

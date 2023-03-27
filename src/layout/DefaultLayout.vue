<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <section class="container">
    <slot></slot>
  </section>
</template>

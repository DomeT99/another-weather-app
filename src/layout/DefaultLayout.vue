<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar></Navbar>
  <section class="container min-h-100">
    <slot></slot>
  </section>
  <Footer></Footer>
</template>

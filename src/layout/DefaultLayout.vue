<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Notification from "../components/Notification.vue";
</script>

<template>
  <Navbar></Navbar>
  <section class="container min-h-100">
    <slot></slot>

    <div v-if="false" class="columns is-align-items-center min-h-30">
      <div class="column is-4 is-offset-4">
        <Notification></Notification>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

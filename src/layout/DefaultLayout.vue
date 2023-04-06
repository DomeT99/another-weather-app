<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Notification from "../components/Notification.vue";
import { useComponentStore } from "../store/componentStore";

const store = useComponentStore();
</script>

<template>
  <Navbar></Navbar>
  <section class="container min-h-100">
    <slot></slot>

    <div
      v-if="store.isShowNotification"
      class="columns is-align-items-center min-h-30"
    >
      <div class="column is-4 is-offset-4">
        <Notification></Notification>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

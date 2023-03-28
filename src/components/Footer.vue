<script setup>
import { computed } from "vue";

const dateNow = computed(() => new Date().getFullYear());

const openLinkTree = () => {
  window.open(import.meta.env.VITE_LINKTREE_URL);
};
</script>
<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <img
        src="../assets/images/bulma-badge.png"
        alt="Made with Bulma"
        width="256"
        height="48"
      />

      <hr class="opacity-0" />
      <p @click="openLinkTree" class="bold pointer">
        © Domenico Tenace {{ dateNow }}
      </p>
    </div>
  </footer>
</template>
<style scoped>
.bold {
  font-weight: bold;
}

.opacity-0 {
  opacity: 0;
}
.pointer {
  cursor: pointer;
}
</style>

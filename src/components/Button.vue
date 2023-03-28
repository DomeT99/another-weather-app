<script setup>
const props = defineProps({
  buttonFn: Function
});
</script>

<template>
  <button @click="props.buttonFn" class="button">
    <slot></slot>
  </button>
</template>

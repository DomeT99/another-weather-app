<script setup>
const props = defineProps({
  buttonFn: Function,
});
</script>

<template>
  <button @keyup="props.buttonFn" @click="props.buttonFn" class="button">
    <slot></slot>
  </button>
</template>

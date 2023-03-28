<script setup>
import Button from "../Button.vue";
import Input from "../Input.vue";
</script>

<template>
  <div class="columns mt-12">
    <div class="column is-10">
      <Input :type="'text'" :place-holder="'Search your city'" />
    </div>
    <div class="column is-2">
      <Button class="is-tertiary b-sixth w-100 is-large"
        >Search</Button
      >
    </div>
  </div>
</template>

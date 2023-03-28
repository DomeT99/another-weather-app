<script setup>
import Button from "../Button.vue";
import Input from "../Input.vue";
</script>

<template>
  <div class="has-text-centered mt-6">
    <h1>Search your city</h1>
  </div>
  <div class="columns">
    <div class="column is-10">
      <Input :type="'text'" :place-holder="'Ex: Berlin, Dublin...'" />
    </div>
    <div class="column is-2">
      <Button class="is-tertiary is-white-color b-sixth w-100 is-large"
        >Search</Button
      >
    </div>
  </div>
</template>

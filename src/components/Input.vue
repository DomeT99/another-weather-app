<script setup>
const props = defineProps({
  value: String,
  type: String,
  placeHolder: String
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="props.value"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="props.type ?? 'text'"
    class="input is-large"
    :placeholder="props.placeHolder ?? ''"
  />
</template>

<script setup>
import { useOnline } from "../../composable/useOffline";
import Box from "../../components/Errors/Box.vue";

useOnline();
</script>
<template>
  <Box>
    <template v-slot:title> You are offline! 🤬 </template>
    <template v-slot:subtitle>Please check your connection. </template>
  </Box>
</template>

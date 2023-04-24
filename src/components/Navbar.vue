<script setup>
import { onMounted, ref } from "vue";
import router from "../router/index";
import { EButton } from "easy-kit-component";

onMounted(() => openMenu());

const buttonsNavbar = [
  {
    text: "SEARCH",
    path: "/search",
  },
  {
    text: "AIR POLLUTION",
    path: "/airpollution",
  },
];
const isMenuActive = ref(false);

const openMenu = () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      el.classList.toggle("is-active");

      $target.classList.toggle("is-active");
    });
  });
};
const changeRoute = (path) => {
  router.push(path);
  closeMenu();
};
const closeMenu = () => {
  isBurgerActive.value = !isBurgerActive.value;
  isMenuActive.value = !isMenuActive.value;
};
</script>
<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a
        role="button"
        :class="{ 'is-active': isMenuActive }"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-id"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar-id"
      :class="{ 'is-active': isMenuActive }"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <div class="navbar-item" v-for="button in buttonsNavbar">
          <EButton
            @click="changeRoute(button.path)"
            class="button is-primary b-sixth w-100"
          >
            <strong>{{ button.text }}</strong></EButton
          >
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => openMenu());


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
const closeMenu = () => {
  document.querySelector(".navbar-burger").classList.toggle("is-active");
  document.getElementById("navbar-id").classList.toggle("is-active");
};
const changeRoute = (path) => {
  router.push(path);
  closeMenu();
};
</script>
<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a
        role="button"
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

    <div id="navbar-id" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <button class="button is-primary b-sixth w-100">
            <strong>SEARCH</strong>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-primary b-sixth w-100">
            <strong>AIR POLLUTION</strong>
          </button>
        </div>
      </div>
      <div class="navbar-end">

      </div>
    </div>
  </nav>
</template>

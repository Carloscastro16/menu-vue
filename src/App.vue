<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/menu/NavMenu.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <NavMenu></NavMenu>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 40px;
  width: 40px;
  display: block;
}
.wrapper{
  width: 100%;
}
</style>

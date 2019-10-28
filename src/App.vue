<template>
  <div class="container">
    <menu-principal/>
    <router-view/>
  </div>
</template>

<script>
  import Menu from './components/shared/Menu.vue'
  export default {
    components: {
      'menu-principal': Menu
    }
  }
</script>

<style lang="scss">
</style>

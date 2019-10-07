<template>
  <div>
    <table-produtos/>
  </div>
</template>

<script>
  import TableProdutos from '../../table/Produtos.vue'

  export default {
    components: {
      'table-produtos' : TableProdutos
    },
    data() {
      return {
      }
    },
    created() {
    }
  }
</script>

<style lang="scss">
</style>

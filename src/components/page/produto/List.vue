<template>
  <div>
    <table-produtos/>
    <complete-table/>
  </div>
</template>

<script>
  import TableProdutos from '../../table/Produtos.vue'
  import CompleteTable from '../../table/CompleteTable.vue'

  export default {
    components: {
      'table-produtos' : TableProdutos,
      'complete-table' : CompleteTable
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

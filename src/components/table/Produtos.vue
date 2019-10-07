<template>
  <b-table striped hover :items="produtos" :fields="fields">
    <template v-slot:cell(editar)="data">
      <b-button href="#" variant="primary">
        <font-awesome-icon icon="edit"/>
      </b-button>
    </template>
    <template v-slot:cell(deletar)="data">
      <b-button href="#" variant="primary">
        <font-awesome-icon icon="trash"/>
      </b-button>
    </template>
  </b-table>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["id", "descricao", "preco",
          {
            key: 'qtd',
            label: 'Quantidade'
          },
          "editar",
          "deletar"
        ],
        produtos: []
      }
    },
    created() {
      this.$http.get('http://localhost:9000/produtos') // this.$http depede de vue-resource
        .then(res => res.json())
        .then(produtos => this.produtos = produtos);
    }
  }
</script>

<style scoped lang="scss">
</style>

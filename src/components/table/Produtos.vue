<template>
  <b-table ref="table" striped hover :items="produtos" :fields="fields">
    <template v-slot:cell(editar)="data">
      <b-button :href="'produtos/edit/'+(data.index+1)" variant="primary">
        <font-awesome-icon icon="edit"/>
      </b-button>
    </template>
    <template v-slot:cell(deletar)="data">
      <b-button @click="deleta(data.index+1)" variant="primary">
        <font-awesome-icon icon="trash"/>
      </b-button>
    </template>
  </b-table>
</template>

<script>
  export default {
    methods:{
      atualiza:function(){
        this.$http.get('http://localhost:9000/produtos') // this.$http depede de vue-resource
          .then(res => res.json())
          .then(produtos => this.produtos = produtos)
          .then(this.$refs.table.refresh());
      },
      deleta: function(id){
        this.$http.delete('http://localhost:9000/produtos/'+id) // this.$http depede de vue-resource
          .then(this.atualiza());
      }
    },
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
      this.atualiza();
    }
  }
</script>

<style scoped lang="scss">
</style>

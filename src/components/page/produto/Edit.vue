<template>
  <div>
    <form-produto :produto="this.produto"></form-produto>
  </div>
</template>

<script>
  import FormProduto from '../../form/Produto.vue'
  export default {
    components:{
      'form-produto': FormProduto
    },
    data(){
      return{
        produto: '',
        id: this.$route.params.id
      }
    },
    created() {
      this.$http.get(`http://localhost:9000/produtos/${this.id}`) // this.$http depende de vue-resource
        .then(res => res.json())
        .then(produto => this.produto = produto);
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>

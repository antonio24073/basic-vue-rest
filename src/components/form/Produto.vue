<template>
  <div>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="input-group-1" label="Título:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.titulo"
        type="text"
        required
        placeholder="Título"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Descrição:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.descricao"
        type="text"
        required
        placeholder="Descrição"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Preço:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.preco"
        type="text"
        required
        placeholder="Preço"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Quantidade:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.qtd"
        type="text"
        required
        placeholder="Quantidade"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Enviar</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
    {{this.form}}
  </div>
</template>

<script>
  export default {
    props: ['produto'],
    data() {
      return {
        form: 'aqui',
        show: true
      }
    },
    created(){
      this.form = this.$props.produto;
    },
    updated(){
      this.form = this.$props.produto;
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$http.put('http://localhost:9000/produtos', JSON.stringify(this.produto))
          .then ((res)=> console.log (res.body))
          .catch ((error)=> console.log(error));

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.titulo = ''
        this.form.decricao = ''
        this.form.qtd = ''
        this.form.preco = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

</style>

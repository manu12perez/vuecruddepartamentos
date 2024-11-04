<template>
  <div>
    <h1>Actualizar Departamento</h1>
    <form v-on:submit.prevent="updateDepartamento()" v-if="departamento" style="width: 500px; margin: 0 auto">        
        <!-- <input type="hidden" v-model="departamento.idDepartamento" /><br /> -->
        <label>Id departamento</label>
        <input type="number" v-model="departamento.idDepartamento" class="form-control" disabled/><br />
        <label>Nombre</label>
        <input type="text" v-model="departamento.nombre" class="form-control"/><br />
        <label>Localidad</label>
        <input type="text" v-model="departamento.localidad" class="form-control"/><br />
        <button class="btn btn-success">Update</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "UpdateDepartamnto",
  data() {
    return {
      departamento: null,
    };
  },
  mounted() {
    //id --> viene del props de la ruta de router
    let id = this.$route.params.id

    service.findDepartamento(id).then(result => {
        this.departamento = result;
    })
  },
  methods: {
    updateDepartamento() {
        service.updateDepartamento(this.departamento).then(result => {
            console.log(result);
            this.$router.push("/")
        })
    }
  }
};
</script>
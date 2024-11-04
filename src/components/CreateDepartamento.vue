<template>
  <div>
    <h1>Nuevo Departamento</h1>
    <h2 style="color:blue">{{ mensaje }}</h2>
    <form v-on:submit.prevent="insertDepartamento()" style="width: 500px; margin: 0 auto">
        <label>Id departamento</label>
        <input type="number" v-model="departamento.idDepartamento" class="form-control"><br />
        <label>Nombre</label>
        <input type="text" v-model="departamento.nombre" class="form-control"><br />
        <label>Localidad</label>
        <input type="text" v-model="departamento.localidad" class="form-control"><br />
        <button class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "CreateDepartameto",
  data() {
    return {
      mensaje: "",
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: "",
      },
    }
  },
  methods: {
    insertDepartamento() {
      service.insertDepartamento(this.departamento).then((result) => {
        this.mensaje = "Insertado correctamente " + result;
        this.$router.push("/");
      })
    },
  },
};
</script>
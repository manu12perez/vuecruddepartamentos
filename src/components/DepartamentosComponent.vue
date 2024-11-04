<template>
  <div>
    <h1>Departamentos</h1>
    <img src="./../assets/images/Loading_icon.gif" v-if="status == false" />
    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <td>Id Departamento</td>
          <td>Nombre</td>
          <td>Localidad</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departamentos" :key="dep">
          <td>{{ dep.idDepartamento }}</td>
          <td>{{ dep.nombre }}</td>
          <td>{{ dep.localidad }}</td>
          <td>
            <router-link :to="'/datails/' + dep.idDepartamento + '/' + dep.nombre + '/' + dep.localidad" class="btn btn-info">
              Detalles
            </router-link>
            <router-link :to="'/update/' + dep.idDepartamento " class="btn btn-warning">
              Actualizar
            </router-link>
            <router-link :to="'/delete/' + dep.idDepartamento " class="btn btn-danger">
              Eliminar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "DepartamentosComponent",
  mounted() {
    service.getDepartamentos().then((result) => {
      this.status = true;
      this.departamentos = result;
    });
  },
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
};
</script>
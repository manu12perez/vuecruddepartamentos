<template>
    <div>
        <h1>Detalles Detapartamento</h1>
        <li class="list-group-item">
            Id: {{ $route.params.id }}
        </li>
        <li class="list-group-item">
            Nombre: {{ $route.params.nombre }}
        </li>
        <li class="list-group-item">
            Localidad: {{ $route.params.localidad }}
        </li>
    </div>
</template>

<script>
export default {
    name: "DetailsDepartamento"
}
</script>
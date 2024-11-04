import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue';
import CreateDepartamento from './components/CreateDepartamento.vue'
import DetailsDepartamento from './components/DetailsDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'
import DeleteDepartamento from './components/DeleteDepartamento.vue'

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: DepartamentosComponent },
    { path: "/create", component: CreateDepartamento },
    { path: "/datails/:id/:nombre/:localidad", component: DetailsDepartamento },
    { path: "/update/:id", component: UpdateDepartamento },
    { path: "/delete/:id", component: DeleteDepartamento },
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;
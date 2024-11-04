import Global from './../Global'
import axios from 'axios'

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let departamentos = [];

            let request = "api/departamentos"
            let url = Global.urlApiDepartamentos + request;

            axios.get(url).then(response => {
                console.log("Leyendo departamentos");
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }

    insertDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;

            axios.post(url, departamento).then(response => {
                resolve(response);
            })
        })
    }

    findDepartamento(idDepartamento) {
        return new Promise(function(resolve) {
            let departamento= {}; //objeto

            let request = "api/departamentos/" + idDepartamento;
            let url = Global.urlApiDepartamentos + request; 

            axios.get(url).then(response => {
                console.log("Buscando departamento")
                departamento = response.data;
                resolve(departamento);
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function(resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;

            axios.put(url, departamento).then(response => {
                console.log("Actualizando departamento");
                resolve(response);
            })

        })
    }

    deleteDepartamento(idDepartamento) {
        return new Promise(function(resolve) {
            let request = "api/departamentos/" + idDepartamento;
            let url = Global.urlApiDepartamentos + request; 

            axios.delete(url).then(response => {
                console.log("Eliminando departamento");
                resolve(response);
            })
        })
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // aqui tendra TODO el codigo de mi aplicacion
    const saveBtn = document.getElementById("saveBtn");
    const changeThemeBtn = document.getElementById("changeThemeBtn");
    const inputName = document.getElementById("inputName");
    const inputPuesto = document.getElementById("inputPuesto");
    let tableBody = document.getElementById("tableBody");

    function loadData() {
        console.log("Entro a load data.");
        // carge informacion por default de mi aplicacion
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.forEach((empleado, index) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${empleado.name}</td>
            <td>${empleado.puesto}</td>
            <td class="text-center">
              <button type="button" class="btn btn-warning btn-edit" data-index="${index}">Editar</button>
              <button type="button" class="btn btn-danger btn-delete" data-index="${index}">Eliminar</button>
            </td>
          `;
            tableBody.appendChild(tr);
        });
    }

    saveBtn.addEventListener("click", () => {
        loadData();
        // Este es el evento del boton guardar
        const name = inputName.value;
        const puesto = inputPuesto.value;
        console.log(name);
        console.log(puesto);
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.push({
            name: name,
            puesto: puesto
        });
        localStorage.setItem("data", JSON.stringify(data));
    });
    
    loadData();
});
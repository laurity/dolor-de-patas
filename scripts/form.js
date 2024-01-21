const id = (id) => { return document.getElementById(id)}

const validar = (e) =>{
    e.preventDefault();
    let mensajeError = [];

    id("name").value.trim().length === 0 ? mensajeError.push("Debe de insertar un nombre") : null

    !/^[A-Z]{1}[a-zA-Z]*$/.test(id("name").value.trim()) ? mensajeError.push("Debe de insertar mayúscula al principio y caracteres válidos") : null

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(id("email").value.trim()) ? mensajeError.push("Debe de insertar un correo electrónico correcto") : null

    !/[679][0-9]{8}$/.test(id("phone").value.trim()) ? mensajeError.push("Debe de insertar un teléfono correcto") : null

    !/^[a-zA-Z0-9\s,.'-]{3,}$/.test(id("address").value.trim()) ? mensajeError.push("Debe de insertar una dirección válida") : null

    id("animal").value.trim().length === 0 ? mensajeError.push("Debe de seleccionar un tipo de animal") : null

    id("age").value.trim().length === 0 ? mensajeError.push("Debe de insertar la edad del animal") : null

    id("comments").value.trim().length < 10 ? mensajeError.push("Debe de insertar al menos 10 caracteres en comentarios") : null

    if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")){
        id('formulario').submit();
    } else if (mensajeError.length > 0) {
        id("errores").textContent = "";
        mensajeError.forEach(function (error){
            let createLi = document.createElement("li")
            createLi.textContent = error
            id("errores").appendChild(createLi)
        })
    }
}

id('formulario').addEventListener("submit", validar)
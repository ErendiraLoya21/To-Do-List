const addBtn = document.querySelector("#añadir-bot");
const newTareaInput = document.querySelector("#env input");
const contenedorTarea = document.querySelector("#tareas");
const error = document.getElementById ("error");
const valor = document.querySelector(".valor");
let tareacont = 0;

const displayCount = (tareacont) => {
    valor.innerText = tareacont;
}

const añadirtarea = () =>{
    const tareaNom = newTareaInput.value.trim();
    error.style.display = "none";
    if(!tareaNom){
        setTimeout(() => {
            error.style.display = "block"
        }, 200);
        return;
    }

    const tarea = `<div class="tarea">
        <input type="checkbox" class="tarea-check">
        <span class="tareaNom">${tareaNom}</span>
        <button class="editar">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="eliminar">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>`;
    contenedorTarea.insertAdjacentHTML("beforeend", tarea);
    tareacont++;
    displayCount(tareacont);

    const botonEliminar = document.querySelectorAll(".eliminar");
    botonEliminar.forEach(button =>{
        button.onclick = () => {
            button.parentNode.remove();
            tareacont -=1;
            displayCount(tareacont);
        };
    });

    const editarBotones = document.querySelectorAll(".editar");
    editarBotones.forEach((editBtn) =>{
        editBtn.onclick = (e) =>{
            let targetElement = e.target;
            if(!(e.target.className == "editar")){
                targetElement = e.target.parentElement;
            }
            newTareaInput.value = targetElement.previousElementSibling.innerText;
            targetElement.parentNode.remove();
            tareacont = -1;
            displayCount(tareacont);
        };
    });

    const checarTareas = document.querySelectorAll(".tarea-check");
    checarTareas.forEach((checkBox) =>{
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("Completada");
            if(checkBox.checked){
                tareacont --;
            }else{
                tareacont ++;
            }
            displayCount(tareacont);
        };
    });
    tareacont ++;
    displayCount(tareacont);
    newTareaInput.value = "";
};

addBtn.addEventListener("click",añadirtarea);

window.onload = () =>{
    tareacont = 0;
    displayCount(tareacont);
    newTaskInput.value="";
}
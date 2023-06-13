const title = document.getElementById("title")
const textarea = document.getElementById("workdata");
const button = document.getElementById("submit");
const lista = document.getElementById("todoul");
let erasers = document.querySelectorAll('.erase');



button.onclick = function(){
    const tarea = document.createElement("li");
    tarea.classList.add("tarea")
    const titulo = document.createElement("p");
    titulo.textContent = title.value
    titulo.classList.add("title")
    const desc = document.createElement("p");
    const erase = document.createElement("button");
    erase.classList.add("erase");
    const trashcan = document.createElement("i");
    trashcan.classList.add("bi");
    trashcan.classList.add("bi-trash3");
    desc.textContent = textarea.value
    desc.classList.add("desc")
    tarea.appendChild(titulo);
    tarea.appendChild(desc);
    tarea.appendChild(erase);
    lista.appendChild(tarea);
    erase.appendChild(trashcan);
    erasers = document.querySelectorAll('.erase');
    erasers.forEach(function(eraser) {    
        eraser.addEventListener('click', function() {
        console.log("qaaa")
        this.parentNode.remove();
        });
    });

}

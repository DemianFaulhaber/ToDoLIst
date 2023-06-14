const title = document.getElementById("title")
const textarea = document.getElementById("workdata");
const button = document.getElementById("submit");
const lista = document.getElementById("todoul");
const search = document.getElementById("search")
const search_input = document.getElementById("search_input")
const info = document.getElementById("info")
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
        this.parentNode.remove();
        });
    });
    tarea.setAttribute("id", title.value)
}

let buscado = document.getElementById(search_input.value)

search.onclick = function(){
    let buscado = document.getElementById(search_input.value);
    // console.log(buscado.childNodes[0])
    const tarea = document.createElement("li");
    tarea.classList.add("tarea")
    const titulo = document.createElement("p");
    titulo.textContent = buscado.childNodes
    titulo.classList.add("title")
    const desc = document.createElement("p");
    tarea.textContent = buscado;
    // const ul = createElement("ul");
    console.log(buscado)
    tarea.appendChild(buscado);
    //tarea.appendChild(buscado.childNodes[1]);
    //tarea.appendChild(buscado.childNodes[2]);
    lista.remove();
    lista.appendChild(buscado);
}



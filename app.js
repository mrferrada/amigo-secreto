// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". Listo

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. Listo

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada. Listo

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo").value;
    if (input ==""){
        alert("Por favor ingresa un nombre válido");
        return;
    } else{
        amigos.push(document.getElementById("amigo").value);
        añadirLista(input);
    }
    return;
}

function añadirLista(input){
    let lista = document.getElementById("listaAmigos");
    lista.append(input+" ");
    return;
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Por favor ingresa al menos 2 amigos para comenzar a sortear"); 
        return;       
    }else {
        let sorteado = Math.floor(Math.random()*amigos.length);
        let amigo = amigos[sorteado];
        document.getElementById("resultado").innerText = amigo;
    }
    return;
}


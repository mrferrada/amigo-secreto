// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". Listo

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. Listo

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

let amigos = [];

function agregarAmigo(){
    if (document.getElementById("amigo").value ==""){
        alert("Por favor ingresa un nombre válido");
        return;
    } else{
        amigos.push(document.getElementById("amigo").value);
        console.log(amigos);
        añadirLista();
    }
    return;
}

function añadirLista(){
    document.getElementById("listaAmigos").value = document.getElementById("amigo").value;
}

function sortearAmigo(){
    alert("Esto está de la perra");
}


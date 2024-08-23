
const textArea = document.querySelector(".caja_texto");

/*function Caract_Especial(String_Especial){ 
    let Vector_alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (let j = 0; j < Vector_alfabet.length; j++){
        if(String_Especial.includes(Vector_alfabet[j])){
        } else{
            document.getElementById('Encriptar').setAttribute('disabled','true');
            document.getElementById('Desencriptar').setAttribute('disabled','true');
        } 
    }
    asignarTextoElemento(h6,'NO SE ACEPTAN CARACTERES ESPECIALES');
}*/

/*Caract_Especial(textArea.value)*/

/*function validartexto(Text_Valid){
    //solo letras, números y espacios
    const Text_Valid = document.getElementById(textArea.value)
    const pattern = /^[a-zA-Z\s]*$/; 
    const feedback = document.getElementById('feedback');

    if (pattern.test(Text_Valid.value)) {
        feedback.textContent = '¡El contenido es válido!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'El contenido no es válido. Asegúrate de seguir el patrón permitido.';
        feedback.style.color = 'red';
    }
}*/

function bot_limpiar(){
    textArea.value = ""
}

function bot_encriptar(){
    
    const Text_Encrip = encriptar(textArea.value);
    textArea.value = Text_Encrip;
}

function encriptar(String_Encrip){
    
    let feedback = document.getElementById('feedback');
    let pattern = /^[a-zA-Z\s]*$/;

    let Matriz_1 = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];
   
    String_Encrip = String_Encrip.toLowerCase();
    
    if (pattern.test(String_Encrip)) {
        feedback.textContent = '¡El contenido es válido!';
        feedback.style.color = 'green';
        
        for (let i = 0; i < Matriz_1.length; i++){
            if(String_Encrip.includes(Matriz_1[i][0])){
                String_Encrip=String_Encrip.replaceAll(Matriz_1[i][0],Matriz_1[i][1])
            }
        } 

    } else {
        feedback.textContent = 'El contenido no es válido. Asegúrate de seguir el patrón permitido.';
        feedback.style.color = 'red';
    }
    return String_Encrip;
}

function bot_desencriptar(){
    const Text_Desencrip = desencriptar(textArea.value);
    textArea.value = Text_Desencrip;
}

function desencriptar(String_Desencrip){
   
    let feedback = document.getElementById('feedback');
    let pattern = /^[a-zA-Z\s]*$/;
   
    let Matriz_1 = [
        ["enter","e"],
        ["imes","i"],
        ["ai","a"],
        ["ober","o"],
        ["ufat","u"]
    ];
    String_Desencrip = String_Desencrip.toLowerCase();
    
    if (pattern.test(String_Desencrip)) {
        feedback.textContent = '¡El contenido es válido!';
        feedback.style.color = 'green';
    
        for (let i = 0; i < Matriz_1.length; i++){
            if(String_Desencrip.includes(Matriz_1[i][0])){
                String_Desencrip = String_Desencrip.replaceAll(Matriz_1[i][0],Matriz_1[i][1])
            }
        }
    } else {
        feedback.textContent = 'El contenido no es válido. Asegúrate de seguir el patrón permitido.';
        feedback.style.color = 'red';
    }
    return String_Desencrip;
}
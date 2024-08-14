const rightTextContainer = document.querySelector('.copy__block');
const rightIcon = document.querySelector('.encript__icon');
const iconText = document.querySelector('.right__text');
const mensaje = document.querySelector('.mensaje');
const leftTextContainer = document.querySelector('.text__container');
const leftText = document.querySelector('.text');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const copiar = document.querySelector('#copiar');

mensaje.addEventListener('click', (event) => {
    event.stopPropagation();
    rightIcon.classList.add('display');
    iconText.classList.add('display');
    
});

document.addEventListener('click', () => {

    if (mensaje.value === '') {

        if (rightIcon.classList.contains('display') && iconText.classList.contains('display')) {
            rightIcon.classList.remove('display');
            iconText.classList.remove('display');
        }

    } 
   
});

document.addEventListener('click', () => {
    
    if (leftText.value === '') {
        
        leftText.value = 'Ingrese el texto aquí';

    }

})


leftText.addEventListener('click', (event) => {

    event.stopPropagation();

    if (leftText.value === 'Ingrese el texto aquí') {


        leftText.value = '';

    }

});

encriptar.addEventListener('click', encriptador);
desencriptar.addEventListener('click', desencriptador);
copiar.addEventListener('click', copy);

function encriptador() {
    mensaje.value = '';
    
    let texto = leftText.value.toLowerCase();

    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');

    mensaje.value = texto;
    leftText.value = '';
};

function desencriptador() {
    mensaje.value = '';

    let texto = leftText.value.toLowerCase();

    texto = texto.replace(/ufat/g, 'u')
                 .replace(/ober/g, 'o')
                 .replace(/ai/g, 'a')
                 .replace(/imes/g, 'i')
                 .replace(/enter/g, 'e');

    mensaje.value = texto;
    leftText.value = '';
};

function copy () {

 // Seleccionar el texto dentro del textarea
mensaje.select()
 mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

 // Copiar el texto al portapapeles
 document.execCommand('copy');

 // Confirmar la acción (opcional)
 mensaje.value = '';
    
}
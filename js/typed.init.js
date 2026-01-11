// js/typed.init.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: [
            `Hi, I'm Eduardo Coelho`
        ],
        typeSpeed: 50,    // Velocidade de digitação
        backSpeed: 50,    // Velocidade de deleção
        backDelay: 6000,  // Tempo de espera antes de apagar
        loop: true,       // Repetir infinitamente
        showCursor: true, // Garante que o cursor apareça
        cursorChar: '_',  // Caractere do cursor (É possível usar _ também)
    });
});


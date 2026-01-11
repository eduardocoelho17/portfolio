// ===== AOS GLOBAL CONFIG =====
AOS.init();

AOS.init({
  // Animação padrão
  duration: 900,            // duração padrão (ms)
  easing: 'ease-in-out',     // suavidade
  offset: 120,              // distância para iniciar
  delay: 10,                 // atraso padrão

  // Comportamento
  once: false,               // anima só uma vez
  mirror: true,            // não anima ao sair
  anchorPlacement: 'top-bottom',

  // Performance
  throttleDelay: 99,
  debounceDelay: 50,

  // Mobile
  disable: false            // true | 'mobile' | function
});



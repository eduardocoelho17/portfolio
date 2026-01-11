if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#66FFFF"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8
      },
      size: {
        value: 2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#66ffff",
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      }
    },
    retina_detect: true
  });
}

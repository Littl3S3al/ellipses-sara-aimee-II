tsParticles.load("tsparticles", {
    background: {},
    backgroundMask: {
      cover: { color: { value: { r: 0, g: 0, b: 0 } }, opacity: 1 },
      enable: false
    },
    detectRetina: false,
    fpsLimit: 30,
    infection: {
      cure: false,
      delay: 0,
      enable: false,
      infections: 0,
      stages: []
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: { enable: false, mode: "push" },
        onDiv: { elementId: "", enable: false, mode: [] },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 1, size: 150 },
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 40 },
        remove: { quantity: 20 },
        repulse: { distance: 150, duration: 0.3, speed: 0.5 },
        slow: { factor: 3, radius: 600 }
      }
    },
    particles: {
      collisions: { enable: false, mode: "bounce" },
      color: {
        value: "#4a4a4a",
        animation: { enable: false, speed: 1, sync: true }
      },
      links: {
        blink: false,
        color: { value: "#ffffff" },
        consent: false,
        distance: 150,
        enable: false,
        opacity: 1,
        shadow: { blur: 5, color: { value: "lime" }, enable: false },
        triangles: { enable: false },
        width: 1,
        warp: false
      },
      move: {
        attract: { enable: false, rotate: { x: 600, y: 1200 } },
        direction: "bottom",
        enable: true,
        noise: {
          delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
          enable: false,
          factor: {
            horizontal: { value: 50, offset: 0 },
            vertical: { value: 10, offset: 40000 }
          }
        },
        outMode: "out",
        random: false,
        speed: 0.5,
        straight: false,
        trail: { enable: false, length: 10, fillColor: { value: "#FFFFFF" } },
        vibrate: false,
        warp: false
      },
      number: {
        density: { enable: true, area: 700, factor: 1500 },
        limit: 0,
        value: 2000
      },
      opacity: {
        animation: { enable: true, minimumValue: 0.1, speed: 0.4, sync: false },
        random: { enable: false, minimumValue: 1 },
        value: 0.8
      },
      rotate: {
        animation: { enable: false, speed: 0, sync: false },
        direction: "clockwise",
        random: false,
        value: 0
      },
      shadow: {
        blur: 0,
        color: { value: "#000000" },
        enable: false,
        offset: { x: 0, y: 0 }
      },
      shape: {
        options: {
          character: {
            fill: true,
            close: true,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400"
          },
          char: {
            fill: true,
            close: true,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400"
          },
          image: {
            fill: true,
            close: true,
            height: 100,
            replaceColor: false,
            src: "https://cdn.matteobruni.it/images/particles/github.svg",
            width: 100
          },
          images: {
            fill: true,
            close: true,
            height: 100,
            replaceColor: false,
            src: "https://cdn.matteobruni.it/images/particles/github.svg",
            width: 100
          },
          polygon: { fill: true, close: true, sides: 5 },
          star: { fill: true, close: true, sides: 5 }
        },
        type: "circle"
      },
      size: {
        animation: {
          destroy: "none",
          enable: false,
          minimumValue: 0.1,
          speed: 20,
          startValue: "max",
          sync: false
        },
        random: { enable: true, minimumValue: 1 },
        value: 1
      },
      stroke: { color: { value: "#000000" }, width: 0, opacity: 1 },
      twinkle: {
        lines: { enable: false, frequency: 0.05, opacity: 1 },
        particles: { enable: false, frequency: 0.05, opacity: 1 }
      }
    },
    pauseOnBlur: true
  });
  
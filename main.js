const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('La ciudad que no duerme')
    .pauseFor(200)
    .start();
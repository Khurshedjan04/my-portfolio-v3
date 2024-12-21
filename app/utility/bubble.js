/**
 * Bubble Cursor Effect
 * Description: This script creates an interactive bubble effect that follows the cursor.
 *
 * Disclaimer: This function was not originally created but modified by me. Full credit goes to the original author.
 * Original Author: Tim Holman (https://github.com/tholman)
 * If you are the creator and would like this costumized usage to be removed, please let me know.
 *
 * Appreciation: Thank you to the author for providing such an amazing and fun effect for developers to use and customize.
 */

let hasWrapperEl = false;
let element = hasWrapperEl || document.body;

let width = window.innerWidth;
let height = window.innerHeight;
let cursor = { x: width / 2, y: width / 2 };
let particles = [];
let canvas, context;

let canvImages = [];

function startBubbling() {
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");

  canvas.style.top = "0px";
  canvas.style.left = "0px";
  canvas.style.pointerEvents = "none";

  if (hasWrapperEl) {
    canvas.style.position = "absolute";
    element.appendChild(canvas);
    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
  } else {
    canvas.style.position = "fixed";
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
  }

  bindEvents();
  loop();
}

// Bind events that are needed
function bindEvents() {
  element.addEventListener("mousemove", onMouseMove);
  element.addEventListener("touchmove", onTouchMove, { passive: true });
  element.addEventListener("touchstart", onTouchMove, { passive: true });
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize(e) {
  width = window.innerWidth;
  height = window.innerHeight;

  if (hasWrapperEl) {
    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;
  } else {
    canvas.width = width;
    canvas.height = height;
  }
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    for (let i = 0; i < e.touches.length; i++) {
      addParticle(
        e.touches[i].clientX,
        e.touches[i].clientY,
        canvImages[Math.floor(Math.random() * canvImages.length)]
      );
    }
  }
}

function onMouseMove(e) {
  if (hasWrapperEl) {
    const boundingRect = element.getBoundingClientRect();
    cursor.x = e.clientX - boundingRect.left;
    cursor.y = e.clientY - boundingRect.top;
  } else {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  }

  addParticle(cursor.x, cursor.y);
}

function addParticle(x, y, img) {
  particles.push(new Particle(x, y, img));
}

function updateParticles() {
  context.clearRect(0, 0, width, height);

  // Update
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(context);
  }

  // Remove dead particles
  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].lifeSpan < 0) {
      particles.splice(i, 1);
    }
  }
}

function loop() {
  updateParticles();
  requestAnimationFrame(loop);
}

function Particle(x, y, canvasItem) {
  const lifeSpan = Math.floor(Math.random() * 60 + 60);
  this.initialLifeSpan = lifeSpan;
  this.lifeSpan = lifeSpan;
  this.velocity = {
    x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
    y: -0.4 + Math.random() * -1,
  };
  this.position = { x: x, y: y };
  this.canv = canvasItem;

  this.baseDimension = 4;

  this.update = function (context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

    context.fillStyle = "transparent";
    context.strokeStyle = "#3a92c5";
    context.beginPath();
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI
    );

    context.stroke();
    context.fill();

    context.closePath();
  };
}

startBubbling();

export { startBubbling, onMouseMove, onTouchMove, onWindowResize };

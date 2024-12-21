export default function moveCircle(e) {
  const circle = document.querySelector(".cursor");
  if (!circle) return;
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
}

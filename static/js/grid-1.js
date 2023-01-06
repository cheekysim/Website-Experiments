const items = document.querySelectorAll('.item');

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

for (const item of items) {
  item.addEventListener('mouseenter', (event) => {
    let rect = item.getBoundingClientRect();
    let X = (rect.left + rect.right) / 2;
    let Y = (rect.top + rect.bottom) / 2;
    let x = Math.round((clamp(event.clientX - X, -5, 5) + Number.EPSILON) * 100) / 100;
    let y = Math.round((clamp(event.clientY - Y, -5, 5) + Number.EPSILON) * 100) / 100;
    item.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  });
  item.addEventListener('mousemove', (event) => {
    let rect = item.getBoundingClientRect();
    let X = (rect.left + rect.right) / 2;
    let Y = (rect.top + rect.bottom) / 2;
    let x = Math.round((clamp(event.clientX - X, -5, 5) + Number.EPSILON) * 100) / 100;
    let y = Math.round((clamp(event.clientY - Y, -5, 5) + Number.EPSILON) * 100) / 100;
    item.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translate(0, 0) scale(1)';
  });
}

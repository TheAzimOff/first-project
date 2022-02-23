// PRODUCTS Chosen color
let colors = document.querySelectorAll('.container__colors .color');
colors.forEach((color) => {
  color.addEventListener('click', () => {
    colors.forEach((color) => color.classList.remove('active'));
    color.classList.add('active');
  });
});
// PRODUCTS chosen color end

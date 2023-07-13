var wrapper = document.querySelector('.wrapper');
var item4 = document.querySelector('.item-4');

wrapper.addEventListener('mouseover', function() {
  item4.classList.remove('animation-off');
  item4.classList.add('animation-on');
});

wrapper.addEventListener('mouseout', function() {
  item4.classList.remove('animation-on');
  item4.classList.add('animation-off');
});

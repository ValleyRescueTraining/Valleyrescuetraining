const filters = document.querySelector('.category-filters');
if (filters) {
 filters.hidden = false;
 filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('.equipment-card').forEach(card => {
   card.hidden = category !== 'All products' && card.dataset.category !== category;
   if (!card.hidden) count++;
  });
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.getElementById('product-count').textContent = count + ' products shown';
 });
}
document.querySelectorAll('.equipment-gallery').forEach(gallery => {
 const main = gallery.querySelector('.gallery-main');
 const img = main.querySelector('img');
 const fallback = main.querySelector('.photo-fallback');
 const failed = () => { img.hidden = true; fallback.hidden = false; };
 img.addEventListener('error', failed);
 img.addEventListener('load', () => { img.hidden = false; fallback.hidden = true; });
 if (img.complete && !img.naturalWidth) failed();
 gallery.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', event => {
   event.preventDefault();
   img.hidden = false; fallback.hidden = true;
   img.src = thumb.href; img.alt = thumb.getAttribute('aria-label');
   gallery.querySelectorAll('.gallery-thumb').forEach(t => t.setAttribute('aria-current', String(t === thumb)));
   gallery.querySelector('.gallery-count').textContent = thumb.dataset.view + ' / ' + gallery.querySelectorAll('.gallery-thumb').length;
  });
 });
});
const catCard = document.getElementById('cat');
const catColor = document.getElementById('cat-color');
if (catCard && catColor) {
 const request = catCard.querySelector('.btn-primary');
 const applyColor = color => {
  catColor.value = color;
  document.getElementById('cat-use').textContent = color === 'Blue Training' ? 'Blue — training only. Not for patient care.' : color + ' — emergency use.';
  catCard.querySelector('.gallery-count').textContent = color;
  const name = 'C-A-T Tourniquet — ' + color;
  request.href = 'mailto:valleyrescuetraining@outlook.com?subject=' + encodeURIComponent('Equipment inquiry: ' + name) + '&body=' + encodeURIComponent('Hi Zack,\n\nI am interested in ' + name + ' ($35 each).\nQuantity:\nPickup or shipping:\nShipping ZIP code:\n\nPlease confirm availability and the total before payment.');
 };
 catColor.addEventListener('change', () => {
  const thumb = Array.from(catCard.querySelectorAll('.gallery-thumb')).find(t => t.dataset.color === catColor.value);
  thumb?.click();
 });
 catCard.querySelectorAll('.gallery-thumb').forEach(thumb => thumb.addEventListener('click', () => applyColor(thumb.dataset.color)));
 applyColor(catColor.value);
}

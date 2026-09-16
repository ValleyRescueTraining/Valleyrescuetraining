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
document.querySelectorAll('.equipment-photo img').forEach(img => {
 const failed = () => { img.hidden = true; img.parentElement.querySelector('.photo-fallback').hidden = false; };
 img.addEventListener('error', failed);
 if (img.complete && !img.naturalWidth) failed();
});
// Native links remain usable when JavaScript is unavailable.
const previewDialog = document.querySelector('.preview-dialog');
let previewTrigger;
if (previewDialog && typeof previewDialog.showModal === 'function') {
  const previewImage = document.querySelector('#preview-image');
  document.querySelectorAll('[data-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      previewTrigger = link;
      const title = link.dataset.title;
      document.querySelector('#preview-title').textContent = title;
      previewImage.src = link.href;
      previewImage.alt = title;
      document.querySelector('#preview-original').href = link.href;
      previewDialog.showModal();
      document.body.classList.add('modal-open');
    });
  });
  document.querySelector('.close-preview').addEventListener('click', () => previewDialog.close());
  previewDialog.addEventListener('click', event => {
    if (event.target === previewDialog) {
      const bounds = previewDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) previewDialog.close();
    }
  });
  previewDialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    previewTrigger?.focus();
  });
}

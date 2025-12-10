// Toast notification system
function showToast(title, message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastTitle = toast.querySelector('.toast-title');
  const toastMessage = toast.querySelector('.toast-message');
  
  toast.classList.remove('success', 'error', 'show');
  toast.classList.add(type);
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.remove('success', 'error');
    }, 300);
  }, 4000);
}
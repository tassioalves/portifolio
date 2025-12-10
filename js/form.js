// Wait for EmailJS to load before initializing
document.addEventListener('DOMContentLoaded', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("iHLxnFLPHAhy_xLaU");
  } else {
    showToast('Erro', 'Error ao enviar mensagem.', 'error');
    return;
  }

  const contatoForm = document.querySelector('.contato-form');
  if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitButton = contatoForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';

      const serviceID = 'service_port_tassio';
      const templateID = 'template_tvl8pvk';

      const templateParams = {
        name: contatoForm.querySelector('[name="nome"]').value,
        email: contatoForm.querySelector('[name="email"]').value,
        message: contatoForm.querySelector('[name="mensagem"]').value
      };

      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
          showToast('Sucesso!', 'Mensagem enviada com sucesso!', 'success');
          contatoForm.reset();
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
        .catch((error) => {
          showToast('Erro', 'Erro ao enviar mensagem. Tente novamente.', 'error');
          console.error('Error:', error);
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        });
    });
  }
});
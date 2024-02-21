document.getElementById('credit-card-form').addEventListener('submit', function(event) {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else if (!/^\d{16}$/.test(cardNumber)) {
        alert('O número do cartão deve conter 16 dígitos.');
        event.preventDefault();
    } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert('A data de validade deve estar no formato MM/AA.');
        event.preventDefault();
    } else if (!/^\d{3}$/.test(cvv)) {
        alert('O CVV deve conter 3 dígitos.');
        event.preventDefault();
    } else {
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'site.html';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const precoIngresso = 50; 
    const botaoCalcular = document.getElementById('calcular-valor');
    const botaoComprar = document.getElementById('comprar-ingresso');
    const quantidadeCompra = document.getElementById('quantidade-compra');
    const quantidadeIngressosSpan = document.getElementById('quantidade-ingressos');
    const valorTotalSpan = document.getElementById('valor-total');
    botaoCalcular.addEventListener('click', function() {
        const quantidade = parseInt(quantidadeCompra.value, 10);
        const valorTotal = quantidade * precoIngresso;
        valorTotalSpan.textContent = valorTotal.toFixed(2);
    });
    botaoComprar.addEventListener('click', function() {
        const quantidade = parseInt(quantidadeCompra.value, 10);
        if (quantidade > 0) {
            fetch('/comprar-ingresso', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantidade: quantidade }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.quantidade >= 0) {
                    quantidadeIngressosSpan.textContent = data.quantidade;
                    alert(`Compra realizada com sucesso! Quantidade restante de ingressos: ${data.quantidade}`);
                } else {
                    alert('Não foi possível completar a compra. Quantidade de ingressos insuficiente.');
                }
            })
            .catch(error => {
                console.error('Erro na compra:', error);
                alert('Erro ao realizar a compra. Tente novamente.');
            });
        } else {
            alert('Por favor, selecione ao menos 1 ingresso.');
        }
    });
});

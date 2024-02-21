document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('comprar-ingresso').addEventListener('click', function() {
        var quantidadeCompra = parseInt(document.getElementById('quantidade-compra').value);
        var quantidadeDisponivel = parseInt(document.getElementById('quantidade-ingressos').innerText);
        if (quantidadeCompra <= quantidadeDisponivel) {
            var novaQuantidade = quantidadeDisponivel - quantidadeCompra;
            document.getElementById('quantidade-ingressos').innerText = novaQuantidade;
            document.getElementById('quantidade-compra').max = novaQuantidade;
            alert('Compra realizada com sucesso!');
        } else {
            alert('Não há ingressos suficientes disponíveis.');
        }
    });
});
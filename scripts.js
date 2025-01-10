document.addEventListener("DOMContentLoaded", function() {
    const caminhaoForm = document.getElementById('caminhao-form');
    const mediaList = document.getElementById('media-list');
    const caminhoes = {};

    caminhaoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const id = document.getElementById('id').value;
        const combustivel = parseFloat(document.getElementById('combustivel').value);
        const distancia = parseFloat(document.getElementById('distancia').value);

        if (!caminhoes[id]) {
            caminhoes[id] = { combustivelTotal: 0, distanciaTotal: 0 };
        }

        caminhoes[id].combustivelTotal += combustivel;
        caminhoes[id].distanciaTotal += distancia;

        atualizarMediaList();
        caminhaoForm.reset();
    });

    function atualizarMediaList() {
        mediaList.innerHTML = '';

        for (const id in caminhoes) {
            const media = caminhoes[id].combustivelTotal / caminhoes[id].distanciaTotal;
            const listItem = document.createElement('li');
            listItem.textContent = `Caminhão ${id}: Média de consumo ${media.toFixed(2)} litros/km`;
            mediaList.appendChild(listItem);
        }
    }
});

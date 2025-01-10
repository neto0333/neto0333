document.addEventListener('DOMContentLoaded', () => {
    const fuelingForm = document.querySelector('#fueling-form');
    const reportsForm = document.querySelector('#reports-form');

    fuelingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const truck = document.querySelector('#truck').value;
        const route = document.querySelector('#route').value;
        const fuel = document.querySelector('#fuel').value;

        // Armazenar informações de abastecimento (você pode salvar em local storage ou enviar para o servidor)
        console.log(`Abastecimento registrado: Caminhão ${truck}, Rota ${route}, Litros ${fuel}`);
    });

    reportsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const truckSelect = document.querySelector('#truck-select').value;
        const period = document.querySelector('#period').value;

        // Lógica para calcular gastos e médias (você pode buscar do local storage ou do servidor)
        console.log(`Relatório gerado para: Caminhão ${truckSelect}, Período ${period}`);
    });
});

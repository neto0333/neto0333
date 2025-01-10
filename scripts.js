document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(item => item.classList.remove('current'));
            contents.forEach(content => content.classList.remove('current'));
            
            this.classList.add('current');
            document.getElementById(this.dataset.tab).classList.add('current');
        });
    });
});

function addMeasurement() {
    const measurement = document.getElementById('measurement').value;
    if (measurement) {
        const table = document.getElementById('measurement-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const newCell = newRow.insertCell(0);
        const newText = document.createTextNode(measurement);
        newCell.appendChild(newText);
        document.getElementById('measurement').value = '';
    }
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const selicRate = 10.50; // Taxa Selic atual
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const datasets = [];

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: datasets
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('bankForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
        const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
        const bankName = document.getElementById('bankName').value;
        const cdiRate = parseFloat(document.getElementById('cdiRate').value);

        if (!isNaN(initialDeposit) && !isNaN(monthlyDeposit) && bankName && !isNaN(cdiRate)) {
            const bankData = calculateRendimento(initialDeposit, monthlyDeposit, cdiRate);
            addBankToChart(bankName, bankData);
        }
    });

    function calculateRendimento(initialDeposit, monthlyDeposit, cdiRate) {
        const monthlyRate = Math.pow(1 + selicRate / 100, 1 / 12) - 1;
        const rendimento = [];
        let amount = initialDeposit;

        for (let i = 0; i < 12; i++) {
            amount += amount * (cdiRate / 100) * monthlyRate;
            amount += monthlyDeposit; // Adicionar depósito mensal
            rendimento.push(amount.toFixed(2));
        }

        return rendimento;
    }

    function addBankToChart(bankName, bankData) {
        const color = getRandomColor();
        const newDataset = {
            label: bankName,
            data: bankData,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 1
        };

        datasets.push(newDataset);
        myChart.update();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

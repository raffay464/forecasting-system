document.addEventListener('DOMContentLoaded', function () {
    const notebookSelect = document.getElementById('notebook-select');
    const viewNotebookBtn = document.getElementById('view-notebook-btn');
    const notebookContent = document.getElementById('notebook-content');

    const notebooks = {
        "Energy_consumption": `
            <h2>Energy Consumption Analysis</h2>
            <p>This notebook contains an analysis of energy consumption data.</p>
            <h3>Data Summary</h3>
            <ul>
                <li>Total energy consumption: 123,456 kWh</li>
                <li>Peak usage: 15,678 kWh</li>
                <li>Average usage: 8,910 kWh</li>
            </ul>
            <h3>Analysis Images</h3>
            <img src="images/Energy/ann.png" alt="ANN">
            <img src="images/Energy/ann1.png" alt="ANN 1">
            <img src="images/Energy/arima1.png" alt="ARIMA 1">
            <img src="images/Energy/arima11.png" alt="ARIMA 11">
            <img src="images/Energy/ets.png" alt="ETS">
            <img src="images/Energy/ets1.png" alt="ETS 1">
            <img src="images/Energy/hybrid.png" alt="Hybrid">
            <img src="images/Energy/lstm.png" alt="LSTM">
            <img src="images/Energy/prophet.png" alt="Prophet">
            <img src="images/Energy/prophet1.png" alt="Prophet 1">
            <img src="images/Energy/sarima.png" alt="Sarima">
            <img src="images/Energy/svr.png" alt="SVR">
        `,
        "Hourly_AEP": `
            <h2>Hourly AEP Data Analysis</h2>
            <p>This notebook contains an analysis of hourly AEP data.</p>
            <h3>Data Summary</h3>
            <ul>
                <li>Total hours recorded: 8760</li>
                <li>Peak AEP: 3500 MW</li>
                <li>Average AEP: 2900 MW</li>
            </ul>
            <h3>Analysis Images</h3>
            <img src="images/AEP/Arima.png" alt="ACF PCF ARIMA">
            <img src="images/AEP/ann.png" alt="ANN training">
            <img src="images/AEP/arima1.png" alt="ARIMA FORECAST">
            <img src="images/AEP/ets.png" alt="Exponential smoothing">
            <img src="images/AEP/ets1.png" alt="Forecast AEP">
            <img src="images/AEP/ets3.png" alt="Hourly AEP ARIMA">
            <img src="images/AEP/hybrid1.png" alt="Hourly AEP ARIMA 2">
            <img src="images/AEP/lstm.png" alt="Hybrid AEP">
            <img src="images/AEP/svr.png" alt="Predict AEP">
            <img src="images/AEP/prophet1.png" alt="Prophet AEP">
            <img src="images/AEP/Sarima.png" alt="Sarima">
        `,
        "sp500_Index": `
            <h2>S&P 500 Index Analysis</h2>
            <p>This notebook contains an analysis of the S&P 500 Index data.</p>
            <h3>Data Summary</h3>
            <ul>
                <li>Total trading days: 252</li>
                <li>Highest closing: 4500 points</li>
                <li>Average closing: 4200 points</li>
            </ul>
            <h3>Analysis Images</h3>
            <img src="images/SP/ann.png" alt="ANN">
            <img src="images/SP/arima.png" alt="ARIMA">
            <img src="images/SP/arima1.png" alt="ARIMA 1">
            <img src="images/SP/ets.png" alt="ETS">
            <img src="images/SP/ets1.png" alt="ETS 1">
            <img src="images/SP/ets3.png" alt="ETS 3">
            <img src="images/SP/hybrid.png" alt="Hybrid">
            <img src="images/SP/prophet.png" alt="Prophet">
            <img src="images/SP/prophet1.png" alt="Prophet 1">
            <img src="images/SP/sarima.png" alt="Sarima">
            <img src="images/SP/sarima1.png" alt="Sarima 1">
            <img src="images/SP/sarima2.png" alt="Sarima 2">
            <img src="images/SP/svr.png" alt="SVR">
        `
    };

    viewNotebookBtn.addEventListener('click', function () {
        const selectedNotebook = notebookSelect.value;
        if (selectedNotebook && notebooks[selectedNotebook]) {
            notebookContent.innerHTML = notebooks[selectedNotebook];
        } else {
            notebookContent.textContent = 'Please select a valid notebook.';
        }
    });
});

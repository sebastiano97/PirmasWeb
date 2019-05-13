var ctx = document.getElementById('myChart1').getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Smūgiai', 'Perdavimai', 'Greitis', 'Jėga', 'Ištvermė', 'Perėmimas',],
        datasets: [{
            label: 'Futbolo įgūdžiai',
               backgroundColor: 'rgba(0, 9, 186, 0.1)',
            borderColor: 'rgba(0, 0, 0, 0.1)',

            data: [95, 95, 80, 10, 60, 45,]
            
        }]
    },

    // Configuration options go here
    options: {}
});

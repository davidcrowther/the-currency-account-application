 

$(document).ready(function(){  
       
   
  //  Chart number one 
    $('#container1').highcharts({
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                 renderTo: 'container',
                plotShadow: false
            },
            title: {
                text: ''
            },
            credits : {
               enabled : false
             },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage}%</b>',
              percentageDecimals: 10
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: <br> '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['GBP',       5.0], 
                    ['DSIR',     20.0], 
                    ['DSIR',     15.0], 
                    ['EUR',   60.0] 
                ]
            }]
    });


 




});
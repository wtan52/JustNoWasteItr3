$(document).ready(function () {
    function TrendGraph(facility_id, year_dropdown) {

        console.log(year_dropdown);

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var JSONData = JSON.parse(this.responseText);


                console.log(JSONData);


                var years = [];

                for (var i = 0; i < JSONData.length; i++) {

                    var temp = JSONData[i].report_year;

                    temp = temp.substring(0, 4);

                    temp = parseInt(temp);
                    years.push(temp);

                }

                var timeList = years.map(function (obj) {
                    return obj;
                });

                if (year_dropdown == 0) {
                    for (var l = 0; l < timeList.length; l++) {

                        var select = document.getElementById('year');
                        var option = document.createElement("option");
                        option.text = timeList[l];
                        option.value = timeList[l];
                        select.appendChild(option);
                    }
                }


                var air_point_emission_list = JSONData.map(function (obj) {
                    return obj.air_point_emission_kg;
                });

                var air_fugitive_emission_list = JSONData.map(function (obj) {
                    return obj.air_fugitive_emission_kg;
                });

                var air_total_emission_list = JSONData.map(function (obj) {
                    return obj.air_total_emission_kg;
                });

                var water_emission_list = JSONData.map(function (obj) {
                    return obj.water_emission_kg;
                });

                var land_emission_list = JSONData.map(function (obj) {
                    return obj.land_emission_kg;
                });

                console.log(air_point_emission_list);
                console.log(air_fugitive_emission_list);
                console.log(air_total_emission_list);
                console.log(water_emission_list);
                console.log(land_emission_list);

                if (year_dropdown == 0) {

                } else {

                    var temp_year = parseInt(year_dropdown) + 1;

                    var year_build = year_dropdown + "/" + temp_year;

                    var year_record = JSONData.filter(function(obj){
                        
                           return obj.report_year === year_build; 
                    });
                    
                    console.log("year_record:", year_record);
                    
                    
                    var build_pie_data = [year_record[0].air_point_emission_kg,year_record[0].air_fugitive_emission_kg,year_record[0].air_total_emission_kg,year_record[0].water_emission_kg,year_record[0].land_emission_kg];
                    
                    console.log("pie_data:",build_pie_data);


                }

                var chartColors = {
                    red: 'rgb(255, 99, 132)',
                    orange: 'rgb(255, 159, 64)',
                    yellow: 'rgb(255, 205, 86)',
                    green: 'rgb(75, 192, 192)',
                    blue: 'rgb(54, 162, 235)',
                    purple: 'rgb(153, 102, 255)',
                    grey: 'rgb(231,233,237)'
                };

                var randomScalingFactor = function () {
                    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
                }
                var config = {
                    type: 'line',
                    data: {
                        labels: timeList,
                        datasets: [{
                            label: "Air Point Emission",
                            backgroundColor: chartColors.red,
                            borderColor: chartColors.red,
                            data: air_point_emission_list,
                            fill: false,
                        }, {
                            label: "Air Fugitive Emission",
                            fill: false,
                            backgroundColor: chartColors.blue,
                            borderColor: chartColors.blue,
                            data: air_fugitive_emission_list,
                        }, {
                            label: "Air Total Emission",
                            fill: false,
                            backgroundColor: chartColors.yellow,
                            borderColor: chartColors.yellow,
                            data: air_total_emission_list,
                        }, {
                            label: "Water Emission",
                            fill: false,
                            backgroundColor: chartColors.purple,
                            borderColor: chartColors.purple,
                            data: water_emission_list,
                        }, {
                            label: "Land Emission",
                            fill: false,
                            backgroundColor: chartColors.grey,
                            borderColor: chartColors.grey,
                            data: land_emission_list,
                        }]
                    },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Yearly Waste Emmision Chart'
                        },
                        tooltips: {
                            mode: 'label',
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Report Submitted (Years)'
                                }
      }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Amount (Kg)'
                                }
      }]
                        }
                    }
                };

                var configPie = {
                    type: 'pie',
                    data: {
                        labels: ["Air Point Emission", "Air Fugitive Emission", "Air Total Emission", "Water Emission", "Land Emission"],
                        datasets: [{
                            label: "Population (millions)",
                            backgroundColor: [chartColors.red, chartColors.blue, chartColors.green, chartColors.yellow, chartColors.grey],
                            data: build_pie_data
      }]
                    },
                    options: {
                        title: {
                            responsive: true,
                            display: true,
                            text: 'Predicted world population (millions) in 2050'
                        }
                    }
                };



                var ctx_pie = document.getElementById("pie-chart").getContext("2d");
                window.myLine = new Chart(ctx_pie, configPie);


                var ctx = document.getElementById("canvas").getContext("2d");
                window.myLine = new Chart(ctx, config);



            }

        }
        xhttp.open("GET", "/TrendGraph?facility_id=" + facility_id, true);
        xhttp.send();
    }


    var currentLocation = window.location;
    var url = new URL(currentLocation);
    var facility_id = url.searchParams.get("facility_id");

    var year_dropdown = 0;

    $('select').on('change', function () {
        year_dropdown = this.value;
        // alert(year_dropdown);
        TrendGraph(facility_id, year_dropdown);
    });

    TrendGraph(facility_id, year_dropdown);


});

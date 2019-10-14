$(document).ready(function () {
    function TrendGraph(facility_id, year_dropdown, change) {

        console.log(year_dropdown);

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var JSONDataValue = JSON.parse(this.responseText);

                console.log(JSONDataValue);

                var JSONData = JSONDataValue.emissions;
                var JSONReduction = JSONDataValue.reduction_techniques;
                var JSONMaxValue = JSONDataValue.max_values;

                document.getElementById("company-name").innerHTML = JSONData[0].facility_name;
                document.getElementById("box-1").innerHTML = JSONMaxValue[0].Substance;
                if (JSONMaxValue[0].Air == null) {

                    document.getElementById("box-2").innerHTML = 0+" Kg";
                } else {
                    document.getElementById("box-2").innerHTML = JSONMaxValue[0].Air +" Kg";
                }
                if (JSONMaxValue[0].Water == null) {

                    document.getElementById("box-3").innerHTML = 0+" Kg";
                } else {
                    document.getElementById("box-3").innerHTML = JSONMaxValue[0].Water +" Kg";
                }
                if (JSONMaxValue[0].Land == null) {

                    document.getElementById("box-4").innerHTML = 0+" Kg";
                } else {
                    document.getElementById("box-4").innerHTML = JSONMaxValue[0].Land +" Kg";
                }
                

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

                var first;

                if (year_dropdown == 0) {
                    for (var l = 0; l < timeList.length; l++) {

                        var select = document.getElementById('year');
                        var option = document.createElement("option");
                        option.text = timeList[l];
                        option.value = timeList[l];
                        select.appendChild(option);
                        if (l == 0) {
                            first = option.value;
                        }
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

                var substance_array = [];

                var substance_count = [];
                var substance_list = [],

                    sortedArr = [],
                    count = 1;

                for (var sub = 0; sub < JSONData.length; sub++) {
                    substance_list.push(JSONData[sub].substance_name);

                }

                var substance_unique_list = [...new Set(substance_list)];

                sortedArr = substance_list.sort();

                for (var i = 0; i < sortedArr.length; i = i + count) {
                    count = 1;
                    for (var j = i + 1; j < sortedArr.length; j++) {
                        if (sortedArr[i] === sortedArr[j])
                            count++;
                    }
                    substance_array.push(sortedArr[i]);
                    substance_count.push(count);
                }

                var reduction_array = [];

                var reduction_count = [];
                var reduction_list = [],

                    sortedReductionArr = [],
                    counts = 1;

                for (var red = 0; red < JSONReduction.length; red++) {
                    reduction_list.push(JSONReduction[red].reduction_technique_name);

                }

                var reduction_unique_list = [...new Set(reduction_list)];

                sortedReductionArr = reduction_list.sort();

                for (var i = 0; i < sortedReductionArr.length; i = i + counts) {
                    counts = 1;
                    for (var j = i + 1; j < sortedReductionArr.length; j++) {
                        if (sortedReductionArr[i] === sortedReductionArr[j])
                            counts++;
                    }
                    reduction_array.push(sortedReductionArr[i]);
                    reduction_count.push(counts);

                }

                for (var b = 0; b < reduction_array.length; b++) {

                    if (reduction_array[b].length > 20) {
                        reduction_array[b] = reduction_array[b].substring(0, 20);

                    }
                }

                if (year_dropdown == 0) {

                    document.getElementById("year").value = document.getElementById("year")[1].value;

                    var temp_year = parseInt(first) + 1;

                    var year_build = parseInt(first) + "/" + temp_year;

                    var year_record = JSONData.filter(function (obj) {

                        return obj.report_year === year_build;
                    });

                    var build_pie_data = [year_record[0].air_point_emission_kg, year_record[0].air_fugitive_emission_kg, year_record[0].air_total_emission_kg, year_record[0].water_emission_kg, year_record[0].land_emission_kg];


                } else {

                    var temp_year = parseInt(year_dropdown) + 1;

                    var year_build = year_dropdown + "/" + temp_year;

                    var year_record = JSONData.filter(function (obj) {

                        return obj.report_year === year_build;
                    });

                    var build_pie_data = [year_record[0].air_point_emission_kg, year_record[0].air_fugitive_emission_kg, year_record[0].air_total_emission_kg, year_record[0].water_emission_kg, year_record[0].land_emission_kg];

                }

                var chartColors = {
                    red: 'rgb(255, 99, 132)',
                    reds: 'rgb(255, 99, 132,0.4)',
                    orange: 'rgb(255, 159, 64)',
                    oranges: 'rgb(255, 159, 64,0.4)',
                    yellow: 'rgb(255, 205, 86)',
                    yellows: 'rgb(255, 205, 86,0.4)',
                    green: 'rgb(75, 192, 192,0.4)',
                    greens: 'rgb(75, 192, 192,0.4)',
                    blue: 'rgb(54, 162, 235)',
                    blues: 'rgb(54, 162, 235,0.4)',
                    purple: 'rgb(153, 102, 255)',
                    purples: 'rgb(153, 102, 255,0.4)',
                    grey: 'rgb(231,233,237)',
                    greys: 'rgb(231,233,237,0.4)'
                };

                var randomScalingFactor = function () {
                    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
                }
                var config = {
                    type: 'line',
                    data: {
                        labels: timeList,
                        datasets: [{
                            label: "Air Point",
                            fill: true,
                            backgroundColor: chartColors.reds,
                            borderColor: chartColors.red,
                            data: air_point_emission_list,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "white",
                            pointBackgroundColor: chartColors.red,
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: chartColors.red,
                            pointHoverBorderColor: "white",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: "Air Fugitive",
                            fill: true,
                            backgroundColor: chartColors.blues,
                            borderColor: chartColors.blue,
                            data: air_fugitive_emission_list,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "white",
                            pointBackgroundColor: chartColors.blue,
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: chartColors.blue,
                            pointHoverBorderColor: "white",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: "Air Total",
                            fill: true,
                            backgroundColor: chartColors.yellows,
                            borderColor: chartColors.yellow,
                            data: air_total_emission_list,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "white",
                            pointBackgroundColor: chartColors.yellow,
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: chartColors.yellow,
                            pointHoverBorderColor: "white",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: "Water",
                            fill: true,
                            backgroundColor: chartColors.purples,
                            borderColor: chartColors.purple,
                            data: water_emission_list,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "white",
                            pointBackgroundColor: chartColors.purple,
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: chartColors.purple,
                            pointHoverBorderColor: "white",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            spanGaps: true,
                        }, {
                            label: "Land",
                            fill: true,
                            backgroundColor: chartColors.greys,
                            borderColor: chartColors.grey,
                            data: land_emission_list,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'round',
                            pointBorderColor: "white",
                            pointBackgroundColor: chartColors.grey,
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: chartColors.grey,
                            pointHoverBorderColor: "white",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            spanGaps: true,
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
                        labels: ["Air Point", "Air Fugitive", "Air Total", "Water", "Land"],
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
                            text: 'Different type of Emissions by this Industry over years'
                        }
                    }
                };

                var configDoghnut = {
                    type: 'doughnut',
                    data: {
                        labels: substance_array,
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                                data: substance_count
        }
      ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Different type of substances emitted by this Industry'
                        }
                    }
                };

                var configBar = {
                    type: 'bar',
                    data: {
                        labels: reduction_array,
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue, chartColors.purple, chartColors.grey, "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue, chartColors.purple, chartColors.grey],
                                data: reduction_count
                            }
                          ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Strategies used by this facilites'
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: 'Strategies'
                                }
      }],
                            yAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Total No in counts'
                                }
      }]
                        }
                    }
                };

                var ctx_pie = document.getElementById("pie-chart").getContext("2d");
                window.myLine = new Chart(ctx_pie, configPie);

                var ctx = document.getElementById("canvas").getContext("2d");
                window.myLine = new Chart(ctx, config);

                var ctx_doughnut = document.getElementById("doughnut-chart").getContext("2d");
                window.myLine = new Chart(ctx_doughnut, configDoghnut);

                var ctx_bar = document.getElementById("bar-chart").getContext("2d");
                window.myLine = new Chart(ctx_bar, configBar);

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
        TrendGraph(facility_id, year_dropdown, 1);
    });

    TrendGraph(facility_id, year_dropdown, 0);


});

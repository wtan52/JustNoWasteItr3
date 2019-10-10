$(document).ready(function () {
    function TrendGraph(facility_id, year_dropdown, change) {

        console.log(year_dropdown);

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var JSONDataValue = JSON.parse(this.responseText);

                var JSONData = JSONDataValue.emissions;
                var JSONReduction = JSONDataValue.reduction_techniques;

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

                console.log(reduction_array);
                console.log(reduction_count);

                for (var b = 0; b < reduction_array.length; b++) {

                    if (reduction_array[b].length > 20) {
                        reduction_array[b] = reduction_array[b].substring(0, 20);

                    }
                }

                console.log("answer");
                console.log(reduction_array);



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
                                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
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

//var $modal = $('.modal');
//
//// Show loader & then get content when modal is shown
//$modal.on('show.bs.modal', function (e) {
//    var paragraphs = $(e.relatedTarget).data('paragraphs');
//
//    $(this)
//        .addClass('modal-scrollfix')
//        .find('.modal-body')
//        .html('loading...')
//        .load('https://baconipsum.com/api/?type=meat-and-filler&paras=' + paragraphs, function () {
//
//            $modal
//                .removeClass('modal-scrollfix')
//                .find('.modal-body').text('Sample');
//        });
//
//});

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function facilitySearch(facility_id) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var JSONData = JSON.parse(this.responseText);
            
            console.log(JSONData);

            var results = document.getElementById('results');

            var td = document.createElement('td');


            var land_waste_tr = document.createElement('tr');
            var air_point_waste_tr = document.createElement('tr');
            var air_fugitive_waste_tr = document.createElement('tr');
            var air_waste_tr = document.createElement('tr');
            var water_waste_tr = document.createElement('tr');


            var land_waste_name = document.createTextNode("Land Waste");
            var air_point_waste_name = document.createTextNode("Air Point Waste");
            var air_fugitive_waste_name = document.createTextNode("Air Fugitive Waste");
            var air_waste_name = document.createTextNode("Air Waste");
            var water_waste_name = document.createTextNode("Water Waste");


            land_waste_tr.appendChild(land_waste_name);
            air_point_waste_tr.appendChild(air_point_waste_name);
            air_fugitive_waste_tr.appendChild(air_fugitive_waste_name);
            air_waste_tr.appendChild(air_waste_name);
            water_waste_tr.appendChild(water_waste_name);


            td.appendChild(land_waste_tr);
            td.appendChild(air_point_waste_tr);
            td.appendChild(air_fugitive_waste_tr);
            td.appendChild(air_waste_tr);
            td.appendChild(water_waste_tr);


            results.appendChild(td);
            
            //-------------------------------------------------------

         document.getElementById("facility-name").innerHTML = JSONData[0].facility_name;
         document.getElementById("suburb-postcode").innerHTML = JSONData[0].suburb + " "  +JSONData[0].postcode;
         document.getElementById("main-activites").innerHTML = JSONData[0].main_activities;
         document.getElementById("anzsic-code").innerHTML = JSONData[0].primary_anzsic_class_code;
         document.getElementById("anzsic-name").innerHTML = JSONData[0].primary_anzsic_class_name;
         document.getElementById("reports-submitted").innerHTML = JSONData[0].reports;
         var a = document.getElementById("dashboard");
            a.href = "TrendGraph.html?facility_id=" + facility_id+"#CompanyInfoSection";
            
        var total_land_waste_amount = formatNumber(Math.round(JSONData[0].Total_Land_Waste_Amount)) + " Kg";
        var total_air_point_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Point_Waste_Amount)) + " Kg";
        var total_air_fugitive_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Fugitive_Waste_Amount)) + " Kg";
        var total_air_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Waste_Amount)) + " Kg";
        var total_water_waste_amount = formatNumber(Math.round(JSONData[0].Total_Water_Waste_Amount)) + " Kg";


        var results = document.getElementById('results');

        var td = document.createElement('td');


        var land_waste_tr = document.createElement('tr');
        var air_point_waste_tr = document.createElement('tr');
        var air_fugitive_waste_tr = document.createElement('tr');
        var air_waste_tr = document.createElement('tr');
        var water_waste_tr = document.createElement('tr');


        var land_waste_name = document.createTextNode(total_land_waste_amount);
        var air_point_waste_name = document.createTextNode(total_air_point_waste_amount);
        var air_fugitive_waste_name = document.createTextNode(total_air_fugitive_waste_amount);
        var air_waste_name = document.createTextNode(total_air_waste_amount);
        var water_waste_name = document.createTextNode(total_water_waste_amount);


        land_waste_tr.appendChild(land_waste_name);
        air_point_waste_tr.appendChild(air_point_waste_name);
        air_fugitive_waste_tr.appendChild(air_fugitive_waste_name);
        air_waste_tr.appendChild(air_waste_name);
        water_waste_tr.appendChild(water_waste_name);

        td.appendChild(land_waste_tr);
        td.appendChild(air_point_waste_tr);
        td.appendChild(air_fugitive_waste_tr);
        td.appendChild(air_waste_tr);
        td.appendChild(water_waste_tr);


        results.appendChild(td);


        }

    }
    xhttp.open("GET", "/facilitySearch?facility_id=" + facility_id, true);
    xhttp.send();
}

function ComapreNPI() {


    var currentLocation = window.location;

    var url = new URL(currentLocation);
    var facility_id = url.searchParams.get("facility_id");


    location.href = 'NPICompare.html?facility_id=' + facility_id;

}

var currentLocation = window.location;

var url = new URL(currentLocation);
var facility_id = url.searchParams.get("facility_id");
facilitySearch(facility_id);

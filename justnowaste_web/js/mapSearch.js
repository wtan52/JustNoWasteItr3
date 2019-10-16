var facility_id_global = 0;

function addResult(result, i) {
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function () {
        //google.maps.event.trigger(markers[i], 'click');
        //document.getElementById("emission_compare").visibility = "visible";
    };

    var subString_comp = result;
    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    nameTd.setAttribute("id", "comp-name");
    var buttonTd = document.createElement('td');
    var icon = document.createElement('img');
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Info";
    btn.id = i;
    btn.onclick = function (event) {
        facilitySearch(subString_comp.facility_id);
        console.log(result.facility_id);
        //        window.location.href = "#emission_compare";
        console.log(subString_comp.facility_id);
        //ComapreNPI(subString_comp.facility_id);
        //        var a = document.getElementById("CompareNPI");
        //        a.href = '/NPICompare.html?facility_id=' + subString_comp.facility_id;
        //        a.onclick="/NPICompare.html?facility_id=" + subString_comp.facility_id;

        facility_id_global = subString_comp.facility_id;
        
        $('html,body').animate({
                scrollTop: $("#emission_compare").offset().top
            },
            'slow');


    };
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    icon.setAttribute('className', 'placeIcon');
    var name = document.createTextNode(result.facility_name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    buttonTd.appendChild(btn);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    tr.appendChild(buttonTd);
    results.appendChild(tr);

}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function clearResults() {
    var results = document.getElementById('resultsNew');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

function ComapreNPI() {

    location.href = 'NPICompare.html?facility_id=' + facility_id_global;

}

function facilitySearch(facility_id) {

    section.style.display = "block";
    //Mapsection.style.display = "none";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var JSONData = JSON.parse(this.responseText);

            console.log(JSONData);

            clearResults();

            var resultsNew = document.getElementById('resultsNew');

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


            resultsNew.appendChild(td);

            //-------------------------------------------------------

            document.getElementById("facility-name").innerHTML = JSONData[0].facility_name;
            document.getElementById("suburb-postcode").innerHTML = JSONData[0].suburb + " " + JSONData[0].postcode;
            document.getElementById("main-activites").innerHTML = JSONData[0].main_activities;
            document.getElementById("anzsic-code").innerHTML = JSONData[0].primary_anzsic_class_code;
            document.getElementById("anzsic-name").innerHTML = JSONData[0].primary_anzsic_class_name;
            document.getElementById("reports-submitted").innerHTML = JSONData[0].reports;
            var a = document.getElementById("dashboard");
            a.href = "TrendGraph.html?facility_id=" + facility_id + "#CompanyInfoSection";

            var total_land_waste_amount = formatNumber(Math.round(JSONData[0].Total_Land_Waste_Amount)) + " Kg";
            var total_air_point_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Point_Waste_Amount)) + " Kg";
            var total_air_fugitive_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Fugitive_Waste_Amount)) + " Kg";
            var total_air_waste_amount = formatNumber(Math.round(JSONData[0].Total_Air_Waste_Amount)) + " Kg";
            var total_water_waste_amount = formatNumber(Math.round(JSONData[0].Total_Water_Waste_Amount)) + " Kg";


            var resultsNew = document.getElementById('resultsNew');

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


            resultsNew.appendChild(td);


        }

    }
    xhttp.open("GET", "/facilitySearch?facility_id=" + facility_id, true);
    xhttp.send();
}

function initMap() {

    var melbourne = new google.maps.LatLng(-37.809954, 144.962886);

    var infowindow = new google.maps.InfoWindow({});

    var map = new google.maps.Map(document.getElementById('map'), {
        center: melbourne,
        zoom: 15,
        mapTypeId: 'satellite'
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });

}

function MapSearch(mySuburb) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var data = JSON.parse(this.responseText);

            var data_filter = data.filter(element => element.suburb.toLowerCase() == mySuburb.toLowerCase())

            var newLocation = new google.maps.LatLng(data_filter[0].latitude, data_filter[0].longitude);
            var mapOptions = {
                zoom: 14,
                center: newLocation,
                mapTypeId: 'satellite'
            }
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);



            document.getElementById("company_name").innerHTML = data_filter[0].suburb;

            for (var p = 0; p < data_filter.length; p++) {

                addResult(data_filter[p], p);

                var contents = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h5 id="firstHeading" class="firstHeading" style="color:black;">' + '<b>Company Name:</b> ' + data_filter[p].facility_name + '</h5>' +
                    '<div id="bodyContent">' +
                    '</div>' +
                    '</div>';

                marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(data_filter[p].latitude, data_filter[p].longitude),
                    info: contents
                });

                var infowindow3 = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'mouseover', function () {
                    infowindow3.setContent(this.info);
                    infowindow3.open(map, this);
                });

                google.maps.event.addListener(marker, 'mouseout', function () {
                    infowindow3.close();
                });
            }
            marker.setMap(map);

        }

    }
    xhttp.open("GET", "/MapSearch?Suburb=" + mySuburb, true);
    xhttp.send();
}

var currentLocation = window.location;

var url = new URL(currentLocation);
var mySuburb = url.searchParams.get("mySuburb");
mySuburb = mySuburb.slice(0, -5);
MapSearch(mySuburb);
var section = document.getElementById("emission_compare");
var Mapsection = document.getElementById("MapSection");

section.style.display = "none";

function addResult(result, i) {
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function () {
        google.maps.event.trigger(markers[i], 'click');
    };

    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    nameTd.setAttribute("id", "comp-name");
    var buttonTd = document.createElement('td');
    var icon = document.createElement('img');
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Info";
    btn.id = i;
    btn.onclick = function () {
        window.location.href = "Search.html?facility_id=" + result.facility_id+"#emission_compare";
    };
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

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
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
MapSearch(mySuburb)

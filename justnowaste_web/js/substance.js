function substances(facility_id) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var JSONData = JSON.parse(this.responseText);

            console.log(JSONData);
            
            var facility_details = JSONData.facility;
            var substance_impact = JSONData.substance_impacts;
            
            
            
            var substance_name = facility_details[0].substance_name;

            var currentLocation = window.location;

            var url = new URL(currentLocation);
            var company_name = url.searchParams.get("company_name");

            document.getElementById("company_name").innerHTML = company_name;

            var current_substance_name_arr = substance_name.split(',');

            for (var i = 0; i < current_substance_name_arr.length; i++) {
                for (var j = 0; j < substance_impact.length; j++) {
                    var final_filter = substance_impact.filter(element => element.A == current_substance_name_arr[i])
                }

                if (final_filter[0] != null) {

                    var sName = final_filter[0].A;
                    var iName = final_filter[0].B;

                    var results = document.getElementById('results');
                    var tr = document.createElement('tr');

                    var subtance_name_td = document.createElement('td');
                    var impact_td = document.createElement('td');


                    var subtance_name = document.createTextNode(sName);
                    var impact_name = document.createTextNode(iName);

                    subtance_name_td.appendChild(subtance_name);
                    impact_td.appendChild(impact_name);


                    tr.appendChild(subtance_name_td);
                    tr.appendChild(impact_td);

                    results.appendChild(tr);

                }
            }
        }

    }
    xhttp.open("GET", "/facility_details?facility_id=" + facility_id, true);
    xhttp.send();
}


function viewStrategy() {

    var currentLocation = window.location;

    var url = new URL(currentLocation);
    var facility_id = url.searchParams.get("facility_id");
    var company_name = url.searchParams.get("company_name");

    window.location.href = "Strategy.html?facility_id=" + facility_id + "&company_name=" + company_name + "#StrategyInfoSection";
}


var currentLocation = window.location;

var url = new URL(currentLocation);
var facility_id = url.searchParams.get("facility_id");
var company_name = url.searchParams.get("company_name");
substances(facility_id);

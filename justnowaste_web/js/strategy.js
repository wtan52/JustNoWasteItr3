var $modal = $('.modal');

// Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function (e) {
    var paragraphs = $(e.relatedTarget).data('paragraphs');

    $(this)
        .addClass('modal-scrollfix')
        .find('.modal-body')
        .html('loading...')
        .load('https://just-no-waste.s3-ap-southeast-2.amazonaws.com/facilities_strategies.json', function (extra) {

            var currentLocation = window.location;

            var url = new URL(currentLocation);
            var company_id = url.searchParams.get("company_id");

            var data = JSON.parse(extra);

            var facilities = data.facilities;

            var facility_filter = facilities.filter(element => element.facility_id == company_id);

            console.log(facility_filter);

            var facility_name = facility_filter[0].facility_name;
            var street_address = facility_filter[0].street_address;
            var suburb = facility_filter[0].suburb;
            var facility_website = facility_filter[0].facility_website;

            $modal
                .removeClass('modal-scrollfix')
                .find('.modal-body').text("Address: " + street_address + ", " + suburb)
        });

});

function strategy(facility_id, company_name) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var JSONData = JSON.parse(this.responseText);

            var company_id = facility_id;

            var facilities = JSONData.facility;
            var strategies = JSONData.substance_impacts;

            var PACN_1 = facilities[0];

            var data_filter2 = strategies.filter(element => element.strategies_primary_anzsic_class_name == PACN_1.primary_anzsic_class_name);

            var PACN_2 = data_filter2[0].strategies_reduction_strategies;

            document.getElementById("strategy").innerHTML = data_filter2[0].strategies_primary_anzsic_class_name;
            document.getElementById("primary-anzsic").innerHTML = PACN_2;


            document.getElementById("company-name").innerHTML = PACN_1.facility_name;
            document.getElementById("address").innerHTML = PACN_1.street_address;
            document.getElementById("suburb").innerHTML = PACN_1.suburb;

            if (PACN_1.facility_website == 0) {
                
                document.getElementById("website").innerHTML = "Not Avaiable";

            } else {
                document.getElementById("website").innerHTML = PACN_1.facility_website;
            }

        }

    }
    xhttp.open("GET", "/strategy?facility_id=" + facility_id, true);
    xhttp.send();
}


var currentLocation = window.location;

var url = new URL(currentLocation);
var company_name = url.searchParams.get("company_name");
var facility_id = url.searchParams.get("facility_id");
strategy(facility_id, company_name);

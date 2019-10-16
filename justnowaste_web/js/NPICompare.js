function addResult(substance_name, category, colour, i, facility_id) {
    var results = document.getElementById('results');

    var tr = document.createElement('tr');

    var nameTd = document.createElement('td');
    var categoryTd = document.createElement('td');
    var reportTd = document.createElement('td');
    nameTd.setAttribute("id", colour);
    categoryTd.setAttribute("id", colour);
    reportTd.setAttribute("id", colour);

    var name = document.createTextNode(substance_name);
    var category = document.createTextNode(category);
    var report = document.createElement("BUTTON");

    report.innerHTML = "View";
    report.id = i;
    report.onclick = function () {
        window.location.href = "TrendGraph.html?facility_id=" + facility_id + "&substance=" + substance_name + "#emission_compare";
    };



    nameTd.appendChild(name);
    categoryTd.appendChild(category);
    reportTd.appendChild(report);


    tr.appendChild(nameTd);
    tr.appendChild(categoryTd);
    //    tr.appendChild(reportTd);

    results.appendChild(tr);
    document.getElementById("loading-section").style.display = "none";
    document.getElementById("CompanyInfoSection").style.display = "block";
}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}


function NPICompare(facility_id) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var datas = JSON.parse(this.responseText);

            var facility_Data = datas.facility;
            var NPI_Data = datas.NPI;


            var facility_filter = facility_Data.filter(element => element.facility_id == facility_id)

            document.getElementById("company_name").innerHTML = facility_filter[0].facility_name;

            var name = facility_filter[0].substance_name;
            var substance_arr = name.split(',');

            var NPI_arr = [];
            var colour;
            const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', {
                numeric: true
            })

            for (var i = 0; i < substance_arr.length; i++) {
                for (var j = 0; j < NPI_Data.length; j++) {
                    var NPI_filter = NPI_Data.filter(element => element.A == substance_arr[i])
                }
                for (var k = 0; k < NPI_filter.length; k++) {
                    NPI_arr.push(NPI_filter[k].B);
                }
                var unique = NPI_arr.filter((item, i, ar) => ar.indexOf(item) === i);

                unique = unique.sort(sortAlphaNum);

                for (var c = 0; c < unique.length; c++) {
                    if (unique[c] == "1" || unique[c] == "1a" || unique[c] == "1b") {

                        colour = "green";

                    } else if (unique[c] == "2a" || unique[c] == "2b") {
                        colour = "yellow";

                    } else if (unique[c] == "3") {
                        colour = "red";
                    } else {
                        colour = "yellow";
                    }
                }

                addResult(substance_arr[i], unique, colour, i, facility_id);
            }


        }

    }
    xhttp.open("GET", "/NPICompare?facility_id=" + facility_id, true);
    xhttp.send();
}

document.getElementById("loading-section").style.display = "block";
document.getElementById("CompanyInfoSection").style.display = "none";

var currentLocation = window.location;
var url = new URL(currentLocation);
var facility_id = url.searchParams.get("facility_id");
NPICompare(facility_id);

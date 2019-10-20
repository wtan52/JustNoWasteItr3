function classifications(target) {

    console.log(target);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var data = JSON.parse(this.responseText);

            console.log(data);

            var subString_comp = ""

            if (target == "Total_Land_Waste_Amount") {
                document.getElementById("class-name").innerHTML = "Land Waste";
                document.getElementById("class-names").innerHTML = "Land Waste";

            } else if (target == "Total_Air_Fugitive_Waste_Amount") {
                document.getElementById("class-name").innerHTML = "Air Fugitive Waste";
                document.getElementById("class-names").innerHTML = "Air Fugitive Waste";

            } else if (target == "Total_Air_Point_Waste_Amount") {

                document.getElementById("class-name").innerHTML = "Air Point Waste";
                document.getElementById("class-names").innerHTML = "Air Point Waste";

            } else if (target == "Total_Air_Waste_Amount") {

                document.getElementById("class-name").innerHTML = "Air Waste";
                document.getElementById("class-names").innerHTML = "Air Waste";

            } else if (target == "Total_Water_Waste_Amount") {

                document.getElementById("class-name").innerHTML = "Water Waste";
                document.getElementById("class-names").innerHTML = "Water Waste";

            } else {

                document.getElementById("class-name").innerHTML = "Land Waste";
                document.getElementById("class-names").innerHTML = "Land Waste";
            }


            subString_comp = data;

            for (var i = 1; i < data.length; i++) {

                var results = document.getElementById('results');
                var tr = document.createElement('tr');

                var rank_td = document.createElement('td');
                var facility_name_td = document.createElement('td');
                var total_class_amount_td = document.createElement('td');
                var btn_td = document.createElement('BUTTON');

                var subString = data[i].substance_name;
                //subString_comp = subString
                btn_td.id = i;
                btn_td.onclick = function (event) {
                    //console.log(data)
                    console.log(event)
                    console.log(event.path[0].id)
                    var path_id = event.path[0].id;
                    console.log(parseInt(path_id))
                    console.log(subString_comp[parseInt(path_id)])
                    window.location.href = "substance.html?facility_id=" + subString_comp[parseInt(path_id)].facility_id + "&company_name=" + subString_comp[parseInt(path_id)].facility_name + "#CompanyInfoSection";
                };

                var rank_name = document.createTextNode(i);
                var facility_names = document.createTextNode(data[i].facility_name);

                var total_class_amount = document.createTextNode(formatNumber(data[i].waste_amount));


                var action_button = document.createTextNode("Impacts");


                rank_td.appendChild(rank_name);
                facility_name_td.appendChild(facility_names);
                total_class_amount_td.appendChild(total_class_amount);
                btn_td.appendChild(action_button);

                tr.appendChild(rank_td);
                tr.appendChild(facility_name_td);
                tr.appendChild(total_class_amount_td);
                tr.appendChild(btn_td);

                results.appendChild(tr);
            }

        }

    }
    xhttp.open("GET", "/classification?Type=" + target, true);
    xhttp.send();
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


var currentLocation = window.location;
var url = new URL(currentLocation);
var target = url.searchParams.get("target");

classifications(target);

function getJsonFromUrl(url) {
    if (!url) url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}

const http = require('http');
const fs = require('fs');
const con = require("./DBConnection");
const url = require('url');

const port = process.env.PORT || '3011';

const server = http.createServer((req, res) => {

    const method = req.method;
    const current_url = url.parse(req.url);
    const pathname = current_url.pathname;
    const href = current_url.href;

        console.log(method);
        console.log(current_url);
        console.log(pathname);
        console.log(href);


    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/open-iconic-bootstrap.min.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/open-iconic-bootstrap.min.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/main.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/main.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/scrollax.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/scrollax.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.timepicker.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.timepicker.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/bootstrap-datepicker.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/bootstrap-datepicker.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.animateNumber.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.animateNumber.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/aos.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/aos.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.magnific-popup.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.magnific-popup.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/owl.carousel.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/owl.carousel.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/style.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/style.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/autocomplete.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/autocomplete.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/icomoon.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/icomoon.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/flaticon.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/flaticon.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/jquery.timepicker.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/jquery.timepicker.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/bootstrap-datepicker.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/bootstrap-datepicker.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/ionicons.min.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/ionicons.min.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/animate.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/animate.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/owl.carousel.min.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/owl.carousel.min.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/owl.theme.default.min.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/owl.theme.default.min.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/magnific-popup.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/magnific-popup.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/aos.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/aos.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/popper.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/popper.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/bootstrap.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/bootstrap.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.easing.1.3.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.easing.1.3.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.waypoints.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.waypoints.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery.stellar.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery.stellar.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/fonts/ionicons/fonts/ionicons.woff2?v=4.0.0-19') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/font-woff2');
        fs.createReadStream('./fonts/ionicons/fonts/ionicons.woff').pipe(res);
    } else if (req.method == 'GET' && req.url == '/fonts/ionicons/fonts/ionicons.woff?v=4.0.0-19') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/font-woff');
        fs.createReadStream('./fonts/ionicons/fonts/ionicons.woff').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/find-place1.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/find-place1.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/dashboard.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/dashboard.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/wind-mill.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/wind-mill.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/airwaste.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/airwaste.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/airpoint.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/airpoint.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/find-place4.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/find-place4.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/find-place2.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/find-place2.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/slider.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/slider.jpg').pipe(res);
    }



    //statistic
    else if (req.method == 'GET' && req.url == '/Statistics.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./Statistics.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/search.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/search.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/assets/css/style.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./assets/css/style.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/jquery-migrate-3.0.1.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/jquery-migrate-3.0.1.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/industry-street-unsplash.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/industry-street-unsplash.jpg').pipe(res);
    }



    //test_visual
    else if (req.method == 'GET' && req.url == '/test_visual.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./test_visual.html').pipe(res);
    }
    //    }else if (req.method == 'GET' && req.url == '/style.css') {
    //        res.statusCode = 200;
    //        res.setHeader('Content-Type', 'text/css');
    //        fs.createReadStream('./style.css').pipe(res);
    //    }


    //f1.html visualization
    else if (req.method == 'GET' && req.url == '/f1.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./f1.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/echarts.min.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/echarts.min.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/chartf1.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/chartf1.js').pipe(res);
    }


    //classification.html?target=Total_Land_Waste_Amount
    else if (req.method == 'GET' && req.url == '/classification.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/assets/css/classification.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./assets/css/classification.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/classification.html?target=Total_Land_Waste_Amount') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/classification.html?target=Total_Air_Fugitive_Waste_Amount') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/classification.html?target=Total_Air_Point_Waste_Amount') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/classification.html?target=Total_Air_Waste_Amount') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/classification.html?target=Total_Water_Waste_Amount') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./classification.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/classification.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/classification.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/assets/fonts/ionicons/fonts/ionicons.ttf?v=2.0.0') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/x-font-ttf');
        fs.createReadStream('./assets/fonts/ionicons/fonts/ionicons.ttf').pipe(res);
    } else if (req.method == 'GET' && req.url == '/fonts/open-iconic/open-iconic.woff') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/font-woff2');
        fs.createReadStream('./fonts/open-iconic/open-iconic.woff').pipe(res);
    }


    //comingsoon.html
    else if (req.method == 'GET' && req.url == '/comingSoon.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./comingSoon.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/pilled-unsplash.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/pilled-unsplash.jpg').pipe(res);
    }


    //mapsearch.html
    else if (req.method == 'GET' && req.url == '/css/mapSearch.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/mapSearch.css').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/mapSearch.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/mapSearch.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/world.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/world.jpg').pipe(res);
    } else if (req.method == 'GET' && pathname == '/MapSearch' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var Suburbs = queries.Suburb;

        var conn = con.getConnection();
        var suburb_data;

        conn.query('SELECT * FROM industriesdb.facility_NPI where suburb=?', [Suburbs], function (error, results, fields) {
            if (error) throw error;
            console.log("Inside MapSearch");
            suburb_data = JSON.stringify(results);

            res.write(suburb_data);
            res.end();

        });

        conn.end();

    } else if (req.method == 'GET' && pathname == '/MapSearch.html') {
        console.log("Inside MapSearch.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./MapSearch.html').pipe(res);
    }

    //Search.js
    else if (req.method == 'GET' && pathname == '/js/search.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/search.js').pipe(res);
    } else if (req.method == 'GET' && pathname == '/facilitySearch' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var facility_ids = queries.facility_id;

        var conn = con.getConnection();
        console.log("Inside facilitySearch1");

        conn.query('SELECT * FROM industriesdb.facility_NPI where facility_id=?', [facility_ids], function (error, results, fields) {
            if (error) throw error;
            console.log("Inside facilitySearch2");
            var facility_data = JSON.stringify(results);

            res.write(facility_data);
            res.end();

        });

        conn.end();

    } else if (req.method == 'GET' && pathname == '/Search.html') {
        console.log("Inside Search.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./Search.html').pipe(res);
    }

    //contact.html
    else if (req.method == 'GET' && req.url == '/contact.html') {
        console.log("Inside contact.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./contact.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/bg_1.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        fs.createReadStream('./images/bg_1.jpg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/fonts/icomoon/icomoon.ttf?6tt51o') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/x-font-ttf');
        fs.createReadStream('./fonts/icomoon/icomoon.ttf').pipe(res);
    }

    //NPICompare.html NPICompare.html /js/NPICompare.js  NPICompare?facility_id=
    else if (req.method == 'GET' && pathname == '/NPICompare.html') {
        console.log("Inside NPICompare.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./NPICompare.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/NPICompare.js') {
        console.log("Inside /js/NPICompare.js");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        fs.createReadStream('./js/NPICompare.js').pipe(res);
    } else if (req.method == 'GET' && pathname == '/NPICompare' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var facility_ids = queries.facility_id;
        var conn = con.getConnection();

        var facility_details;
        var NPI_data;


        conn.query('SELECT * FROM industriesdb.Facilities_details', function (error, results, fields) {
            if (error) throw error;

            facility_details = JSON.stringify(results);

        });

        conn.query('SELECT * FROM industriesdb.facility_NPI', function (error, results, fields) {
            if (error) throw error;

            NPI_data = JSON.stringify(results);

            res.write("{\"facility\":" + facility_details + "," + "\"NPI\":" + NPI_data + "}");
            res.end();

        });

        conn.end();

    }



    //main.js
    else if (req.method == 'GET' && current_url.pathname == '/classification' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var type = queries.Type;

        var conn = con.getConnection();

        conn.query('SELECT * FROM industriesdb.Classification  where class = ?', [type], function (error, results, fields) {
            if (error) throw error;

            var class_data = JSON.stringify(results);

            res.write(class_data);
            res.end();

        });

        conn.end();

    }

    //substance.html facility_details?facility_id   facility_details?facility_id=
    else if (req.method == 'GET' && pathname == '/substance.html') {
        console.log("Inside substance.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./substance.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/substance.js') {
        console.log("Inside /js/substance.js");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        fs.createReadStream('./js/substance.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/substance.css') {
        console.log("Inside /css/substance.css");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/substance.css').pipe(res);
    } else if (req.method == 'GET' && pathname == '/facility_details' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var facility_ids = queries.facility_id;
        var conn = con.getConnection();

        var facility_details;
        var substance_impacts;


        conn.query('SELECT * FROM industriesdb.Facilities_details where facility_id = ?', [facility_ids], function (error, results, fields) {
            if (error) throw error;

            facility_details = JSON.stringify(results);

        });

        conn.query('SELECT * FROM industriesdb.substance_impacts', function (error, results, fields) {
            if (error) throw error;

            substance_impacts = JSON.stringify(results);

            res.write("{\"facility\":" + facility_details + "," + "\"substance_impacts\":" + substance_impacts + "}");
            res.end();

        });

        conn.end();

    }

    //strategy.html   Strategy.html  SELECT * FROM industriesdb.facilities_strategies
    else if (req.method == 'GET' && pathname == '/Strategy.html') {
        console.log("Inside Strategy.html");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./Strategy.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/strategy.js') {
        console.log("Inside /js/strategy.js");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        fs.createReadStream('./js/strategy.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/css/strategy.css') {
        console.log("Inside /css/strategy.css");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./css/strategy.css').pipe(res);
    } else if (req.method == 'GET' && pathname == '/strategy' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var facility_ids = queries.facility_id;
        var conn = con.getConnection();

        var facility_details;
        var substance_impacts;


        conn.query('SELECT * FROM industriesdb.facilities_strategies where facility_id = ?', [facility_ids], function (error, results, fields) {
            if (error) throw error;

            facility_details = JSON.stringify(results);

        });

        conn.query('SELECT * FROM industriesdb.reduction_strategies', function (error, results, fields) {
            if (error) throw error;

            substance_impacts = JSON.stringify(results);

            res.write("{\"facility\":" + facility_details + "," + "\"substance_impacts\":" + substance_impacts + "}");
            res.end();

        });

        conn.end();

    } else if (req.method == 'GET' && req.url == '/images/company-sub.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/company-sub.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/factory.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/factory.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/manufacture.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/manufacture.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/manufacture.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/manufacture.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/puzzle.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/puzzle.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/identity.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/identity.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/process.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/process.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/company.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/company.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/visitor.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/visitor.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/rounded-red-square-shape.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/rounded-red-square-shape.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/rounded-green-square-shape.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/rounded-green-square-shape.svg').pipe(res);
    } else if (req.method == 'GET' && req.url == '/images/rounded-yellow-square-shape.svg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream('./images/rounded-yellow-square-shape.svg').pipe(res);
    }

    //Quiz
    else if (req.method == 'GET' && req.url == '/test_yourself.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./test_yourself.html').pipe(res);
    }

    //Trend graph   TrendGraph TrendGraph  TrendGraph
    else if (req.method == 'GET' && req.url == '/TrendGraph.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./TrendGraph.html').pipe(res);
    } else if (req.method == 'GET' && pathname == '/TrendGraph.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./TrendGraph.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/TrendGraph.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/TrendGraph.js').pipe(res);
    } else if (req.method == 'GET' && pathname == '/TrendGraph' && current_url.query != null) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        var queries = getJsonFromUrl(current_url.search);
        var facility_ids = queries.facility_id;
        var conn = con.getConnection();

        var TrendGraph;
        var reduction_techniques;
        var max_values;

        conn.query('SELECT * FROM industriesdb.emissions Where facility_id = ? group by report_year', [facility_ids], function (error, results, fields) {
            if (error) throw error;

            TrendGraph = JSON.stringify(results);

        });

        conn.query("SELECT MAX(substance_name) as Substance, MAX(air_total_emission_kg) as Air, MAX(water_emission_kg) as Water, MAX(land_emission_kg) as Land FROM industriesdb.emissions Where facility_id = ?", [facility_ids], function (error, results, fields) {
            if (error) throw error;

            max_values = JSON.stringify(results);

        });

        conn.query('SELECT * FROM industriesdb.emission_reduction_techniques where facility_id= ?', [facility_ids], function (error, results, fields) {
            if (error) throw error;

            reduction_techniques = JSON.stringify(results);

            res.write("{\"emissions\":" + TrendGraph + "," + "\"reduction_techniques\":" + reduction_techniques + "," + "\"max_values\":" + max_values + "}");
            res.end();

        });

        conn.end();

    }

    //Reading
    else if (req.method == 'GET' && req.url == '/Reading.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./Reading.html').pipe(res);
    } else if (req.method == 'GET' && pathname == '/Reading.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./Reading.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/js/Reading.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/Reading.js').pipe(res);
    } else if (req.method == 'GET' && req.url == '/quiz_reading.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./quiz_reading.html').pipe(res);
    } else if (req.method == 'GET' && pathname == '/quiz_reading.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./quiz_reading.html').pipe(res);
    }else if(req.method == 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./error.html').pipe(res);        
    }


});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});

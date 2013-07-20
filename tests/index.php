<!DOCTYPE html>
<html>
<head>
    <title>OSM Buildings</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <style type="text/css">
    html, body {
        border: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #map {
        height: 100%;
    }
    </style>
    <link rel="stylesheet" href="leaflet-0.5.1/leaflet.css">
    <script src="leaflet-0.5.1/leaflet-src.js"></script>
	<script src="scripts.js.php?engine=Leaflet"></script>
</head>

<body>
    <div id="map"></div>

    <style>
    .datetime {
        position: relative;
        bottom: 140px;
        width: 300px;
        margin: auto;
        background-color: rgba(255,255,255,0.4);
        font-size: 10pt;
        font-family: Helvetica, Arial, sans-serif;
        padding: 10px;
    }
    .datetime label {
        display: block;
        width: 100%;
        height: 20px;
    }
    .datetime input {
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        background-color: transparent;
    }
    </style>

    <div class="datetime">
        <label for="time">Time: </label>
        <input id="time" type="range" min="0" max="95">

        <label for="date">Date: </label>
        <input id="date" type="range" min="0" max="23">
    </div>

    <script>
    var map = new L.Map('map').setView([52.52179, 13.39503], 18); // Berlin Bodemuseum
//  var map = new L.Map('map').setView([52.50557, 13.33451], 17); // Berlin Ku'Damm
//  var map = new L.Map('map').setView([52.52079, 13.40882], 16); // Berlin Fernsehturm
//  var map = new L.Map('map').setView([37.78923, -122.40597], 16); // SF

    new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxZoom: 18 }).addTo(map);
//  new L.TileLayer('http://{s}.tiles.mapbox.com/v3/osmbuildings.map-c8zdox7m/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

    var osmb = new OSMBuildings(map).loadData();
//  INSERT INTO buildings (the_geom, height) SELECT the_geom, CAST(REPLACE(height, 'm', '') AS int) FROM map_polygon WHERE building IS NOT NULL;
//  var osmb = new OSMBuildings(map).loadData('http://osmbuildings.cartodb.com/api/v2/sql?q=' + ('SELECT cartodb_id AS id, height, ST_AsText(the_geom) AS the_geom FROM buildings2 WHERE the_geom %26%26 ST_SetSRID(ST_MakeBox2D(ST_Point({w},{s}), ST_Point({e},{n})), 4326)') + '&format=geojson');

    // GoJSON
//  map.setView([52.52179, 13.39503], 18); // Berlin Bodemuseum
//  var data = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":1,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.388652,52.520222],[13.388758,52.52021],[13.389204,52.520184],[13.389735,52.520162],[13.390013,52.52015],[13.390153,52.520155],[13.391974,52.520274],[13.392177,52.52029],[13.392477,52.520319],[13.392728,52.520355],[13.393062,52.520414],[13.393416,52.520505],[13.393754,52.520615],[13.394054,52.52073],[13.394226,52.520811],[13.394393,52.520678],[13.394217,52.520597],[13.393905,52.520471],[13.39355,52.52036],[13.393176,52.520268],[13.392811,52.520205],[13.392527,52.520169],[13.392209,52.52014],[13.392006,52.520122],[13.39025,52.520002],[13.390123,52.519993],[13.389317,52.519947],[13.38872,52.5199],[13.388693,52.520002],[13.388652,52.520222]]]]}},{"type":"Feature","properties":{"id":2,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.392946,52.521681],[13.393053,52.521847],[13.393228,52.52174],[13.393363,52.521645],[13.393499,52.521549],[13.393439,52.521523],[13.394023,52.521095],[13.39398,52.521074],[13.394229,52.520907],[13.394066,52.520818],[13.3938,52.521001],[13.393842,52.521027],[13.393242,52.521434],[13.393285,52.52146],[13.392946,52.521681]]]]}},{"type":"Feature","properties":{"id":3,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393432,52.521863],[13.39371,52.522017],[13.393874,52.521918],[13.393605,52.521756],[13.393432,52.521863]]]]}},{"type":"Feature","properties":{"id":4,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394871,52.520148],[13.395216,52.52032],[13.395544,52.520072],[13.395374,52.519995],[13.395111,52.519962],[13.394871,52.520148]],[[13.395008,52.520144],[13.395124,52.520049],[13.395292,52.520078],[13.395128,52.520203],[13.395008,52.520144]]]]}},{"type":"Feature","properties":{"id":5,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393699,52.5202],[13.393927,52.520312],[13.394052,52.520218],[13.393866,52.520126],[13.393746,52.520074],[13.393699,52.5202]]]]}},{"type":"Feature","properties":{"id":6,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393746,52.520074],[13.393866,52.520126],[13.393871,52.520081],[13.393889,52.520073],[13.393872,52.520056],[13.393903,52.519975],[13.393926,52.519965],[13.394501,52.52004],[13.394479,52.520103],[13.394162,52.520083],[13.394151,52.520148],[13.394319,52.520157],[13.394526,52.520168],[13.394555,52.520146],[13.394623,52.520095],[13.394679,52.520052],[13.394803,52.519958],[13.393834,52.519838],[13.39382,52.519876],[13.393795,52.519942],[13.393746,52.520074]]]]}},{"type":"Feature","properties":{"id":7,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393867,52.522186],[13.394056,52.522516],[13.394296,52.522483],[13.394093,52.522153],[13.393867,52.522186]]]]}},{"type":"Feature","properties":{"id":9,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393927,52.520312],[13.394078,52.520388],[13.394206,52.520294],[13.394157,52.52027],[13.394052,52.520218],[13.393927,52.520312]]]]}},{"type":"Feature","properties":{"id":10,"height":15},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.393996,52.521925],[13.394018,52.521993],[13.394044,52.522027],[13.394071,52.522054],[13.394154,52.522098],[13.394256,52.522118],[13.394314,52.522121],[13.394502,52.5221],[13.395601,52.52198],[13.395597,52.521963],[13.396059,52.521915],[13.396104,52.521876],[13.396091,52.521831],[13.396035,52.521803],[13.396074,52.521771],[13.394912,52.5212],[13.394077,52.521797],[13.394017,52.521856],[13.393996,52.521925]],[[13.394702,52.521541],[13.394743,52.521509],[13.394794,52.521506],[13.394905,52.521429],[13.394904,52.521409],[13.394881,52.521396],[13.39493,52.521361],[13.395228,52.52151],[13.394873,52.521627],[13.394702,52.521541]],[[13.395524,52.521723],[13.395602,52.521715],[13.395599,52.521701],[13.395618,52.521686],[13.395741,52.521749],[13.395765,52.521837],[13.395565,52.521854],[13.395524,52.521723]],[[13.395005,52.521779],[13.395327,52.521666],[13.395382,52.521847],[13.39504,52.521885],[13.395005,52.521779]],[[13.394604,52.521879],[13.394829,52.5218],[13.394869,52.521931],[13.394676,52.521955],[13.394604,52.521879]],[[13.394447,52.521727],[13.394577,52.521638],[13.394742,52.521724],[13.394526,52.521798],[13.394447,52.521727]]]]}},{"type":"Feature","properties":{"id":11,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394078,52.520388],[13.394369,52.520531],[13.394497,52.520438],[13.394299,52.52034],[13.394206,52.520294],[13.394078,52.520388]]]]}},{"type":"Feature","properties":{"id":12,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394157,52.52027],[13.394206,52.520294],[13.394299,52.52034],[13.39443,52.52024],[13.394515,52.520176],[13.394526,52.520168],[13.394319,52.520157],[13.394157,52.52027]]]]}},{"type":"Feature","properties":{"id":13,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394226,52.520811],[13.394532,52.520957],[13.394655,52.521015],[13.394965,52.521163],[13.395059,52.521209],[13.395088,52.521188],[13.395121,52.521163],[13.395168,52.521128],[13.395212,52.521095],[13.395247,52.52107],[13.395151,52.521027],[13.394841,52.520884],[13.394711,52.520824],[13.394393,52.520678],[13.394226,52.520811]]]]}},{"type":"Feature","properties":{"id":14,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394369,52.520531],[13.394712,52.5207],[13.39488,52.520574],[13.394708,52.520488],[13.394665,52.520521],[13.394497,52.520438],[13.394369,52.520531]]]]}},{"type":"Feature","properties":{"id":16,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.39443,52.52024],[13.394793,52.520423],[13.394708,52.520488],[13.39488,52.520574],[13.395053,52.520443],[13.394515,52.520176],[13.39443,52.52024]]]]}},{"type":"Feature","properties":{"id":17,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394515,52.520176],[13.395053,52.520443],[13.395216,52.52032],[13.394871,52.520148],[13.394803,52.520114],[13.394735,52.52008],[13.394679,52.520052],[13.394623,52.520095],[13.395003,52.520284],[13.39495,52.520323],[13.39476,52.520228],[13.394744,52.52024],[13.394555,52.520146],[13.394526,52.520168],[13.394515,52.520176]]]]}},{"type":"Feature","properties":{"id":19,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394585,52.521048],[13.394595,52.521053],[13.394614,52.52104],[13.394604,52.521034],[13.394585,52.521048]]]]}},{"type":"Feature","properties":{"id":20,"height":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[13.394679,52.520052],[13.394735,52.52008],[13.394811,52.520019],[13.394902,52.520034],[13.394803,52.520114],[13.394871,52.520148],[13.395111,52.519962],[13.394842,52.519929],[13.394803,52.519958],[13.394679,52.520052]]]]}}]};
//  var osmb = new OSMBuildings(map).setData(data);

    // static URL
//  map.setView([52.52179, 13.39503], 18); // Berlin Bodemuseum
//  var osmb = new OSMBuildings(map).loadData('http://osmbuildings.cartodb.com/api/v2/sql?q=SELECT%20cartodb_id%20AS%20id,%20height,%20ST_AsText(the_geom)%20AS%20the_geom%20FROM%20buildings2%20WHERE%20the_geom%20%26%26%20ST_SetSRID(ST_MakeBox2D(ST_Point(13.395,52.515),%20ST_Point(13.41,52.5225)),%204326)&format=geojson');

    L.control.layers({}, { Buildings: osmb }).addTo(map);
    </script>

    <script>
    var timeRange = document.querySelector('#time');
    var timeRangeLabel = document.querySelector('*[for=time]');

    var dateRange = document.querySelector('#date');
    var dateRangeLabel = document.querySelector('*[for=date]');

    // var date = new Date();
    var date = new Date(2013, 4, 15, 11, 0);

    var timeScale = 4,
		dateScale = 2,
		Y = date.getFullYear(),
        M = date.getMonth(),
        D = date.getDate() < 15 ? 1 : 15,
        h = date.getHours(),
        m = date.getMinutes() % 4 * 15;

	timeRange.value = h * timeScale;
    dateRange.value = M * dateScale;
    changeDate();

    function pad(v) {
        return (v < 10 ? '0' : '') + v;
    }

    function changeDate() {
        timeRangeLabel.innerText = 'Time: ' + pad(h) + ':' + pad(m);
        dateRangeLabel.innerText = 'Date: ' + Y + '-' + pad(M+1) + '-' + pad(D);
        osmb && osmb.setDate(new Date(Y, M, D, h, m));
    }

    timeRange.addEventListener('change', function () {
        h = this.value / timeScale <<0;
        m = this.value % timeScale * 15;
        changeDate();
    }, false);

    dateRange.addEventListener('change', function () {
        M = this.value / dateScale <<0;
        D = this.value % dateScale ? 15 : 1;
        changeDate();
    }, false);
    </script>
</body>
</html>
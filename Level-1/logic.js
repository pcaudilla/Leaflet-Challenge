// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

// I am going to paste the Json file here and declare a variable for it because when I just have the URL to read, it is popping up an error

var url = {
  "type": "FeatureCollection",
  "metadata": {
    "generated": 1579465106000,
    "url": "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337",
    "title": "USGS Earthquakes",
    "status": 200,
    "api": "1.8.1",
    "count": 213
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "mag": 1.29,
        "place": "10km SSW of Idyllwild, CA",
        "time": 1388620296020,
        "updated": 1457728844428,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408890",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408890&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 26,
        "net": "ci",
        "code": "11408890",
        "ids": ",ci11408890,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 39,
        "dmin": 0.067290000000000003,
        "rms": 0.089999999999999997,
        "gap": 51,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.3 - 10km SSW of Idyllwild, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7776667,
          33.663333299999998,
          11.007999999999999
        ]
      },
      "id": "ci11408890"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.53000000000000003,
        "place": "4km NW of The Geysers, California",
        "time": 1388619644020,
        "updated": 1486063047447,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134466",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134466&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134466",
        "ids": ",nc72134466,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.0072069999999999999,
        "rms": 0.029999999999999999,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 4km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.78399659999999,
          38.807167100000001,
          0.012999999999999999
        ]
      },
      "id": "nc72134466"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.69999999999999996,
        "place": "6km E of Mammoth Lakes, California",
        "time": 1388619483870,
        "updated": 1486063041500,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134461",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134461&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "nc",
        "code": "72134461",
        "ids": ",nc72134461,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 16,
        "dmin": 0.001802,
        "rms": 0.080000000000000002,
        "gap": 133,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 6km E of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.8948333,
          37.643333300000002,
          -0.44600000000000001
        ]
      },
      "id": "nc72134461"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.46999999999999997,
        "place": "11km ESE of Anza, CA",
        "time": 1388619402290,
        "updated": 1457688589278,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408882",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408882&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "ci",
        "code": "11408882",
        "ids": ",ci11408882,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.04045,
        "rms": 0.089999999999999997,
        "gap": 92,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 11km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.562,
          33.517499999999998,
          8.1479999999999997
        ]
      },
      "id": "ci11408882"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.59999999999999998,
        "place": "Nevada",
        "time": 1388619146923,
        "updated": 1530313185339,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557597",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557597&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 6,
        "net": "nn",
        "code": "00557597",
        "ids": ",nn00557597,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 5,
        "dmin": 0.074999999999999997,
        "rms": 0.1066,
        "gap": 155.68000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.6 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4646,
          38.567799999999998,
          8.6999999999999993
        ]
      },
      "id": "nn00557597"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.64000000000000001,
        "place": "12km E of Victoria, Canada",
        "time": 1388618284550,
        "updated": 1469215317300,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664506",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664506&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 6,
        "net": "uw",
        "code": "60664506",
        "ids": ",uw60664506,",
        "sources": ",uw,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 10,
        "dmin": 0.085569999999999993,
        "rms": 0.089999999999999997,
        "gap": 115,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 12km E of Victoria, Canada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.1971667,
          48.425666700000001,
          11.92
        ]
      },
      "id": "uw60664506"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.29999999999999999,
        "place": "Nevada",
        "time": 1388618225608,
        "updated": 1530313185251,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557596",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557596&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nn",
        "code": "00557596",
        "ids": ",nn00557596,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 4,
        "dmin": 0.068000000000000005,
        "rms": 0.11509999999999999,
        "gap": 193.46000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.3 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4594,
          38.581899999999997,
          10.699999999999999
        ]
      },
      "id": "nn00557596"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.29999999999999999,
        "place": "10km SW of Niland, CA",
        "time": 1388617699360,
        "updated": 1457682058070,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408874",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408874&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "ci",
        "code": "11408874",
        "ids": ",ci11408874,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 10,
        "dmin": 0.01072,
        "rms": 0.059999999999999998,
        "gap": 97,
        "magType": "mh",
        "type": "earthquake",
        "title": "M 0.3 - 10km SW of Niland, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.6021667,
          33.182333300000003,
          0.38300000000000001
        ]
      },
      "id": "ci11408874"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.29999999999999999,
        "place": "53km NNW of Pahrump, Nevada",
        "time": 1388617471115,
        "updated": 1530313183570,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432852",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432852&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nn",
        "code": "00432852",
        "ids": ",nn00432852,",
        "sources": ",nn,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 7,
        "dmin": 0.021000000000000001,
        "rms": 0.088499999999999995,
        "gap": 148.56,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.3 - 53km NNW of Pahrump, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.1108,
          36.677100000000003,
          0
        ]
      },
      "id": "nn00432852"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.34999999999999998,
        "place": "12km SE of Mammoth Lakes, California",
        "time": 1388617009820,
        "updated": 1486063035481,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134456",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134456&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "72134456",
        "ids": ",nc72134456,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 19,
        "dmin": 0.029729999999999999,
        "rms": 0.050000000000000003,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 12km SE of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.86016669999999,
          37.573833299999997,
          5.3390000000000004
        ]
      },
      "id": "nc72134456"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.8799999999999999,
        "place": "13km W of Alberto Oviedo Mota, B.C., MX",
        "time": 1388616646650,
        "updated": 1457662449118,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408866",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408866&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 54,
        "net": "ci",
        "code": "11408866",
        "ids": ",ci11408866,",
        "sources": ",ci,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 11,
        "dmin": 0.19320000000000001,
        "rms": 0.14000000000000001,
        "gap": 273,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.9 - 13km W of Alberto Oviedo Mota, B.C., MX"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.31216670000001,
          32.225833299999998,
          8.0269999999999992
        ]
      },
      "id": "ci11408866"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.24,
        "place": "1km ESE of The Geysers, CA",
        "time": 1388616254500,
        "updated": 1559857147970,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134451",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134451&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 24,
        "net": "nc",
        "code": "72134451",
        "ids": ",nc72134451,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 35,
        "dmin": 0.01102,
        "rms": 0.059999999999999998,
        "gap": 68,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.2 - 1km ESE of The Geysers, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7453333,
          38.774500000000003,
          -0.44
        ]
      },
      "id": "nc72134451"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.68000000000000005,
        "place": "2km ESE of Bishop, California",
        "time": 1388616011920,
        "updated": 1530313184605,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134446",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134446&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72134446",
        "ids": ",nn00432850,nc72134446,",
        "sources": ",nn,nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 5,
        "dmin": 0.075679999999999997,
        "rms": 0.050000000000000003,
        "gap": 152,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 2km ESE of Bishop, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.3738333,
          37.357666700000003,
          5.7460000000000004
        ]
      },
      "id": "nc72134446"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.52000000000000002,
        "place": "Northern California",
        "time": 1388615750350,
        "updated": 1486063013394,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134441",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134441&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134441",
        "ids": ",nc72134441,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.016219999999999998,
        "rms": 0.02,
        "gap": 111,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.77166750000001,
          38.803333299999998,
          1.1200000000000001
        ]
      },
      "id": "nc72134441"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.05,
        "place": "6km NW of The Geysers, California",
        "time": 1388615736120,
        "updated": 1486063005672,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134436",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134436&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 17,
        "net": "nc",
        "code": "72134436",
        "ids": ",nc72134436,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 42,
        "dmin": 0.01171,
        "rms": 0.040000000000000001,
        "gap": 44,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8146667,
          38.809666700000001,
          2.25
        ]
      },
      "id": "nc72134436"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.80000000000000004,
        "place": "Nevada",
        "time": 1388615608908,
        "updated": 1530313185162,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557595",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557595&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 10,
        "net": "nn",
        "code": "00557595",
        "ids": ",nn00557595,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 4,
        "dmin": 0.087999999999999995,
        "rms": 0.033599999999999998,
        "gap": 173.49000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.8 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4346,
          38.572899999999997,
          5.5
        ]
      },
      "id": "nn00557595"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.33000000000000002,
        "place": "27km NNW of Packwood, Washington",
        "time": 1388615267370,
        "updated": 1469215317030,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664496",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664496&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "uw",
        "code": "60664496",
        "ids": ",uw60664496,",
        "sources": ",uw,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.018939999999999999,
        "rms": 0.080000000000000002,
        "gap": 71,
        "magType": "md",
        "type": "earthquake",
        "title": "M -0.3 - 27km NNW of Packwood, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.7506667,
          46.850166700000003,
          1.4359999999999999
        ]
      },
      "id": "uw60664496"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.53000000000000003,
        "place": "5km SW of Idyllwild, CA",
        "time": 1388615009140,
        "updated": 1457735530566,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408858",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408858&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "ci",
        "code": "11408858",
        "ids": ",ci11408858,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.02963,
        "rms": 0.040000000000000001,
        "gap": 165,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 5km SW of Idyllwild, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7493333,
          33.7068333,
          17.148
        ]
      },
      "id": "ci11408858"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.5099999999999998,
        "place": "24km N of Dixon Lane-Meadow Creek, California",
        "time": 1388614835770,
        "updated": 1530313182678,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134431",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134431&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 97,
        "net": "nc",
        "code": "72134431",
        "ids": ",nc72134431,nn00432849,ci11408850,",
        "sources": ",nc,nn,ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 42,
        "dmin": 0.056759999999999998,
        "rms": 0.059999999999999998,
        "gap": 73,
        "magType": "md",
        "type": "earthquake",
        "title": "M 2.5 - 24km N of Dixon Lane-Meadow Creek, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.42883329999999,
          37.603666699999998,
          7.766
        ]
      },
      "id": "nc72134431"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.54000000000000004,
        "place": "4km NW of The Geysers, California",
        "time": 1388614645310,
        "updated": 1486062985856,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134426",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134426&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134426",
        "ids": ",nc72134426,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.001802,
        "rms": 0.01,
        "gap": 105,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 4km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7926636,
          38.808166499999999,
          2.48
        ]
      },
      "id": "nc72134426"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.40000000000000002,
        "place": "Nevada",
        "time": 1388614630842,
        "updated": 1530313185077,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557594",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557594&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nn",
        "code": "00557594",
        "ids": ",nn00557594,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 4,
        "dmin": 0.081000000000000003,
        "rms": 0.018100000000000002,
        "gap": 198.40000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.44370000000001,
          38.575400000000002,
          8
        ]
      },
      "id": "nn00557594"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.4199999999999999,
        "place": "5km WNW of The Geysers, California",
        "time": 1388614523980,
        "updated": 1486062977620,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134421",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134421&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 31,
        "net": "nc",
        "code": "72134421",
        "ids": ",nc72134421,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 50,
        "dmin": 0.014409999999999999,
        "rms": 0.040000000000000001,
        "gap": 47,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.4 - 5km WNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.813,
          38.801333300000003,
          2.8700000000000001
        ]
      },
      "id": "nc72134421"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.45000000000000001,
        "place": "20km ESE of Anza, CA",
        "time": 1388614491890,
        "updated": 1457662447873,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408842",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408842&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "ci",
        "code": "11408842",
        "ids": ",ci11408842,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 13,
        "dmin": 0.043159999999999997,
        "rms": 0.080000000000000002,
        "gap": 137,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 20km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.4721667,
          33.5045,
          9.6180000000000003
        ]
      },
      "id": "ci11408842"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.67000000000000004,
        "place": "6km E of Mammoth Lakes, California",
        "time": 1388614225770,
        "updated": 1486062966218,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134411",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134411&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72134411",
        "ids": ",nc72134411,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 18,
        "dmin": 0.0027030000000000001,
        "rms": 0.10000000000000001,
        "gap": 112,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 6km E of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.89449999999999,
          37.642666699999999,
          -0.92800000000000005
        ]
      },
      "id": "nc72134411"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.34000000000000002,
        "place": "6km E of Mammoth Lakes, California",
        "time": 1388614199290,
        "updated": 1486062959980,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134416",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134416&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "72134416",
        "ids": ",nc72134416,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 11,
        "dmin": 0.001802,
        "rms": 0.10000000000000001,
        "gap": 111,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.3 - 6km E of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.89633329999999,
          37.642833299999999,
          -0.67600000000000005
        ]
      },
      "id": "nc72134416"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.13,
        "place": "7km ESE of Mammoth Lakes, California",
        "time": 1388614036060,
        "updated": 1486062954640,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134406",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134406&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134406",
        "ids": ",nc72134406,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.01261,
        "rms": 0.02,
        "gap": 108,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.1 - 7km ESE of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.8876667,
          37.630833299999999,
          3.3279999999999998
        ]
      },
      "id": "nc72134406"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.59999999999999998,
        "place": "6km E of Mammoth Lakes, California",
        "time": 1388613846190,
        "updated": 1486062948917,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134401",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134401&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 6,
        "net": "nc",
        "code": "72134401",
        "ids": ",nc72134401,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 11,
        "dmin": 0.00090090000000000005,
        "rms": 0.089999999999999997,
        "gap": 135,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 6km E of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.8953333,
          37.644500000000001,
          -0.59599999999999997
        ]
      },
      "id": "nc72134401"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56999999999999995,
        "place": "Northern California",
        "time": 1388613493430,
        "updated": 1486062943461,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134396",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134396&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134396",
        "ids": ",nc72134396,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 5,
        "dmin": 0.01261,
        "rms": 0.029999999999999999,
        "gap": 204,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.82099909999999,
          38.8436661,
          4.1360000000000001
        ]
      },
      "id": "nc72134396"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.46000000000000002,
        "place": "7km NW of The Geysers, California",
        "time": 1388613272880,
        "updated": 1486062938175,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134391",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134391&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72134391",
        "ids": ",nc72134391,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.0072069999999999999,
        "rms": 0.01,
        "gap": 166,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 7km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.81883240000001,
          38.820331600000003,
          2.347
        ]
      },
      "id": "nc72134391"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3,
        "place": "7km NW of The Geysers, California",
        "time": 1388612358450,
        "updated": 1486062931100,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134386",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134386&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 26,
        "net": "nc",
        "code": "72134386",
        "ids": ",nc72134386,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 50,
        "dmin": 0.0090089999999999996,
        "rms": 0.040000000000000001,
        "gap": 35,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 7km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.82416670000001,
          38.817333300000001,
          2.6099999999999999
        ]
      },
      "id": "nc72134386"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0,
        "place": "Nevada",
        "time": 1388612314180,
        "updated": 1530313184062,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432847",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432847&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432847",
        "ids": ",nn00432847,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 9,
        "dmin": 0.021999999999999999,
        "rms": 0.15429999999999999,
        "gap": 151.24000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.0 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.1058,
          36.6753,
          0
        ]
      },
      "id": "nn00432847"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.58999999999999997,
        "place": "6km NW of The Geysers, California",
        "time": 1388611837690,
        "updated": 1486062922036,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134381",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134381&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134381",
        "ids": ",nc72134381,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 13,
        "dmin": 0.00090090000000000005,
        "rms": 0.01,
        "gap": 58,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8105011,
          38.8221664,
          3.0990000000000002
        ]
      },
      "id": "nc72134381"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1,
        "place": "10km NE of Indio, CA",
        "time": 1388611612150,
        "updated": 1457668977434,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408834",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408834&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 15,
        "net": "ci",
        "code": "11408834",
        "ids": ",ci11408834,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.084949999999999998,
        "rms": 0.11,
        "gap": 112,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 10km NE of Indio, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.124,
          33.771833299999997,
          5.3010000000000002
        ]
      },
      "id": "ci11408834"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3999999999999999,
        "place": "11km SSE of Chester, California",
        "time": 1388610885690,
        "updated": 1486062915534,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134376",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134376&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 30,
        "net": "nc",
        "code": "72134376",
        "ids": ",nc72134376,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.16220000000000001,
        "rms": 0.059999999999999998,
        "gap": 158,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.4 - 11km SSE of Chester, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.167,
          40.212333299999997,
          11.912000000000001
        ]
      },
      "id": "nc72134376"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1,
        "place": "Nevada",
        "time": 1388610847781,
        "updated": 1530313184991,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557593",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557593&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 15,
        "net": "nn",
        "code": "00557593",
        "ids": ",nn00557593,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 5,
        "dmin": 0.071999999999999995,
        "rms": 0.024400000000000002,
        "gap": 178.18000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.5577,
          38.309699999999999,
          6.7000000000000002
        ]
      },
      "id": "nn00557593"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.98,
        "place": "11km W of Alberto Oviedo Mota, B.C., MX",
        "time": 1388610678030,
        "updated": 1457675638516,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408826",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408826&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 60,
        "net": "ci",
        "code": "11408826",
        "ids": ",ci11408826,",
        "sources": ",ci,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.20580000000000001,
        "rms": 0.12,
        "gap": 303,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 2.0 - 11km W of Alberto Oviedo Mota, B.C., MX"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.2873333,
          32.213666699999997,
          11.593999999999999
        ]
      },
      "id": "ci11408826"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.080000000000000002,
        "place": "12km ENE of Coso Junction, CA",
        "time": 1388609758050,
        "updated": 1457735529458,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408810",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408810&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408810",
        "ids": ",ci11408810,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.033050000000000003,
        "rms": 0.11,
        "gap": 114,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.1 - 12km ENE of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.8313333,
          36.0906667,
          -0.38500000000000001
        ]
      },
      "id": "ci11408810"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.6000000000000001,
        "place": "Nevada",
        "time": 1388609730387,
        "updated": 1530313184894,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557592",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557592&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 39,
        "net": "nn",
        "code": "00557592",
        "ids": ",nn00557592,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 7,
        "dmin": 0.068000000000000005,
        "rms": 0.12180000000000001,
        "gap": 176.19999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.6 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.55200000000001,
          38.3078,
          7.4000000000000004
        ]
      },
      "id": "nn00557592"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.87,
        "place": "3km W of Cobb, California",
        "time": 1388608123990,
        "updated": 1486062907626,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134371",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134371&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72134371",
        "ids": ",nc72134371,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.01081,
        "rms": 0.01,
        "gap": 101,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 3km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.76733400000001,
          38.819831800000003,
          2.008
        ]
      },
      "id": "nc72134371"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.52000000000000002,
        "place": "Northern California",
        "time": 1388608089990,
        "updated": 1486062899384,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134366",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134366&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134366",
        "ids": ",nc72134366,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 4,
        "dmin": 0.024320000000000001,
        "rms": 0.040000000000000001,
        "gap": 261,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.82333370000001,
          38.800998700000001,
          3.879
        ]
      },
      "id": "nc72134366"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.70999999999999996,
        "place": "1km WSW of Wauna, Washington",
        "time": 1388606854770,
        "updated": 1469215316800,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664436",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664436&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "uw",
        "code": "60664436",
        "ids": ",uw60664436,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.19570000000000001,
        "rms": 0.080000000000000002,
        "gap": 160,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 1km WSW of Wauna, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.65783329999999,
          47.372999999999998,
          22.971
        ]
      },
      "id": "uw60664436"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.45,
        "place": "2km WNW of Cobb, California",
        "time": 1388606750260,
        "updated": 1486062891560,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134361",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134361&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 32,
        "net": "nc",
        "code": "72134361",
        "ids": ",nc72134361,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 47,
        "dmin": 0.01081,
        "rms": 0.070000000000000007,
        "gap": 41,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.5 - 2km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7476667,
          38.8318333,
          0.40999999999999998
        ]
      },
      "id": "nc72134361"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.96999999999999997,
        "place": "10km NE of Indio, CA",
        "time": 1388606046990,
        "updated": 1457735528292,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408802",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408802&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 14,
        "net": "ci",
        "code": "11408802",
        "ids": ",ci11408802,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 21,
        "dmin": 0.086970000000000006,
        "rms": 0.12,
        "gap": 113,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 10km NE of Indio, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.121,
          33.773166699999997,
          6.5730000000000004
        ]
      },
      "id": "ci11408802"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.46999999999999997,
        "place": "Northern California",
        "time": 1388605793410,
        "updated": 1486062883380,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134356",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134356&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72134356",
        "ids": ",nc72134356,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.0099100000000000004,
        "rms": 0.01,
        "gap": 109,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.70116419999999,
          38.758667000000003,
          0.372
        ]
      },
      "id": "nc72134356"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.63,
        "place": "6km NW of The Geysers, California",
        "time": 1388605685310,
        "updated": 1486062877219,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134346",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134346&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 6,
        "net": "nc",
        "code": "72134346",
        "ids": ",nc72134346,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.01261,
        "rms": 0.02,
        "gap": 96,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8131638,
          38.810165400000002,
          1.585
        ]
      },
      "id": "nc72134346"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.6299999999999999,
        "place": "13km SW of Westwood, California",
        "time": 1388605637310,
        "updated": 1486062870679,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134351",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134351&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 41,
        "net": "nc",
        "code": "72134351",
        "ids": ",nn00432844,nc72134351,",
        "sources": ",nn,nc,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.29999999999999999,
        "rms": 0.059999999999999998,
        "gap": 115,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.6 - 13km SW of Westwood, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.1118333,
          40.213666699999997,
          6.556
        ]
      },
      "id": "nc72134351"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.02,
        "place": "4km S of Wofford Heights, CA",
        "time": 1388605470590,
        "updated": 1457735526522,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408794",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408794&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "ci",
        "code": "11408794",
        "ids": ",ci11408794,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.01558,
        "rms": 0.10000000000000001,
        "gap": 158,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 4km S of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.456,
          35.667999999999999,
          9.3780000000000001
        ]
      },
      "id": "ci11408794"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.45000000000000001,
        "place": "20km ESE of Anza, CA",
        "time": 1388605268700,
        "updated": 1457682056774,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408786",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408786&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "ci",
        "code": "11408786",
        "ids": ",ci11408786,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 23,
        "dmin": 0.072849999999999998,
        "rms": 0.080000000000000002,
        "gap": 144,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 20km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.48783330000001,
          33.472166700000002,
          11.734999999999999
        ]
      },
      "id": "ci11408786"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0,
        "place": "61km WNW of Beatty, Nevada",
        "time": 1388604613807,
        "updated": 1530313183966,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00433110",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00433110&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00433110",
        "ids": ",nn00433110,",
        "sources": ",nn,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 6,
        "dmin": 0.157,
        "rms": 0.031099999999999999,
        "gap": 281.92000000000002,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.0 - 61km WNW of Beatty, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.38209999999999,
          37.153700000000001,
          10.6
        ]
      },
      "id": "nn00433110"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.01,
        "place": "Long Valley area, California",
        "time": 1388603977650,
        "updated": 1486062863994,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134341",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134341&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134341",
        "ids": ",nc72134341,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,",
        "nst": 7,
        "dmin": 0.0027030000000000001,
        "rms": 0.070000000000000007,
        "gap": 144,
        "magType": "md",
        "type": "earthquake",
        "title": "M -0.0 - Long Valley area, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.89566670000001,
          37.646500000000003,
          -1.8859999999999999
        ]
      },
      "id": "nc72134341"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.13,
        "place": "11km ENE of Coso Junction, CA",
        "time": 1388603484570,
        "updated": 1457714676067,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408778",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408778&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408778",
        "ids": ",ci11408778,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.019970000000000002,
        "rms": 0.070000000000000007,
        "gap": 126,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.1 - 11km ENE of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.8488333,
          36.0983333,
          2.5070000000000001
        ]
      },
      "id": "ci11408778"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.28000000000000003,
        "place": "3km NNW of The Geysers, California",
        "time": 1388603336890,
        "updated": 1486062857875,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134326",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134326&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 1,
        "net": "nc",
        "code": "72134326",
        "ids": ",nc72134326,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.01171,
        "rms": 0.02,
        "gap": 105,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.3 - 3km NNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.77449799999999,
          38.8028336,
          1.2330000000000001
        ]
      },
      "id": "nc72134326"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.070000000000000007,
        "place": "Central California",
        "time": 1388603284950,
        "updated": 1486062851383,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134331",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134331&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134331",
        "ids": ",nc72134331,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.05135,
        "rms": 0.029999999999999999,
        "gap": 289,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.1 - Central California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.8728333,
          37.552,
          3.2170000000000001
        ]
      },
      "id": "nc72134331"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.66000000000000003,
        "place": "27km NE of Soledad, California",
        "time": 1388603175180,
        "updated": 1486062845164,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134321",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134321&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72134321",
        "ids": ",nc72134321,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.05586,
        "rms": 0.089999999999999997,
        "gap": 61,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 27km NE of Soledad, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.1261667,
          36.610999999999997,
          8.5459999999999994
        ]
      },
      "id": "nc72134321"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.83999999999999997,
        "place": "Northern California",
        "time": 1388602653370,
        "updated": 1486062838951,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134316",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134316&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 11,
        "net": "nc",
        "code": "72134316",
        "ids": ",nc72134316,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,",
        "nst": 7,
        "dmin": 0.0964,
        "rms": 0.46000000000000002,
        "gap": 219,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.8 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.3455,
          40.320166700000001,
          -1.9319999999999999
        ]
      },
      "id": "nc72134316"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.26,
        "place": "3km S of Wofford Heights, CA",
        "time": 1388601720050,
        "updated": 1457701275125,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408770",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408770&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 24,
        "net": "ci",
        "code": "11408770",
        "ids": ",ci11408770,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.018429999999999998,
        "rms": 0.089999999999999997,
        "gap": 92,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.3 - 3km S of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4598333,
          35.677166700000001,
          9.1880000000000006
        ]
      },
      "id": "ci11408770"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.8799999999999999,
        "place": "8km N of Rigaud, Canada",
        "time": 1388601211960,
        "updated": 1464297947460,
        "tz": -300,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ld60052526",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ld60052526&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 54,
        "net": "ld",
        "code": "60052526",
        "ids": ",ld60052526,",
        "sources": ",ld,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 16,
        "dmin": 0.43930000000000002,
        "rms": 0.29999999999999999,
        "gap": 194,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.9 - 8km N of Rigaud, Canada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.287833300000003,
          45.556333299999999,
          11.449999999999999
        ]
      },
      "id": "ld60052526"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.29999999999999999,
        "place": "Nevada",
        "time": 1388601049507,
        "updated": 1530313183481,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432945",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432945&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432945",
        "ids": ",nn00432945,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.14399999999999999,
        "rms": 0.00020000000000000001,
        "gap": 311.13,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.3 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.77070000000001,
          40.311300000000003,
          12
        ]
      },
      "id": "nn00432945"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.52000000000000002,
        "place": "5km NW of The Geysers, California",
        "time": 1388600627950,
        "updated": 1486062831768,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134311",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134311&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134311",
        "ids": ",nc72134311,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 10,
        "dmin": 0.01081,
        "rms": 0.029999999999999999,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 5km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7955017,
          38.818832399999998,
          2.657
        ]
      },
      "id": "nc72134311"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.68000000000000005,
        "place": "5km S of Wofford Heights, CA",
        "time": 1388600474310,
        "updated": 1457762410818,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408762",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408762&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "ci",
        "code": "11408762",
        "ids": ",ci11408762,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.01367,
        "rms": 0.080000000000000002,
        "gap": 160,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.7 - 5km S of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4573333,
          35.664166700000003,
          9.1980000000000004
        ]
      },
      "id": "ci11408762"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56000000000000005,
        "place": "6km WSW of Mammoth Lakes, California",
        "time": 1388599780420,
        "updated": 1486062825833,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134306",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134306&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134306",
        "ids": ",nc72134306,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.0072069999999999999,
        "rms": 0.050000000000000003,
        "gap": 80,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 6km WSW of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.0398333,
          37.633166699999997,
          -2.8839999999999999
        ]
      },
      "id": "nc72134306"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.53000000000000003,
        "place": "3km NW of The Geysers, California",
        "time": 1388599610700,
        "updated": 1486062819675,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134296",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134296&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134296",
        "ids": ",nc72134296,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.006306,
        "rms": 0.01,
        "gap": 89,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 3km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.784668,
          38.798999799999997,
          3.1739999999999999
        ]
      },
      "id": "nc72134296"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.20000000000000001,
        "place": "Nevada",
        "time": 1388599554928,
        "updated": 1530313183400,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432944",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432944&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432944",
        "ids": ",nn00432944,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.13400000000000001,
        "rms": 0.00080000000000000004,
        "gap": 309.63999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.2 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.7811,
          40.298900000000003,
          13.800000000000001
        ]
      },
      "id": "nn00432944"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.34000000000000002,
        "place": "7km WSW of Mammoth Lakes, California",
        "time": 1388599465460,
        "updated": 1486062813660,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72135686",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72135686&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "72135686",
        "ids": ",nc72135686,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 11,
        "dmin": 0.018919999999999999,
        "rms": 0.070000000000000007,
        "gap": 83,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.3 - 7km WSW of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.056,
          37.633333299999997,
          12.986000000000001
        ]
      },
      "id": "nc72135686"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.37,
        "place": "10km W of Mammoth Lakes, California",
        "time": 1388599459810,
        "updated": 1486062807226,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc71076964",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc71076964&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "71076964",
        "ids": ",nc71076964,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 10,
        "dmin": 0.0099100000000000004,
        "rms": 0.13,
        "gap": 246,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 10km W of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.09233330000001,
          37.631500000000003,
          12.393000000000001
        ]
      },
      "id": "nc71076964"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.81000000000000005,
        "place": "19km W of Mammoth Lakes, California",
        "time": 1388599446760,
        "updated": 1486062801307,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc71076969",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc71076969&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 10,
        "net": "nc",
        "code": "71076969",
        "ids": ",nc71076969,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 8,
        "dmin": 0.089190000000000005,
        "rms": 0.050000000000000003,
        "gap": 307,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.8 - 19km W of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.1896667,
          37.650500000000001,
          16.808
        ]
      },
      "id": "nc71076969"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.4399999999999999,
        "place": "9km N of Cabazon, CA",
        "time": 1388598819870,
        "updated": 1457735524656,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408754",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408754&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 32,
        "net": "ci",
        "code": "11408754",
        "ids": ",ci11408754,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 40,
        "dmin": 0.04233,
        "rms": 0.12,
        "gap": 37,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.4 - 9km N of Cabazon, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7931667,
          33.994500000000002,
          16.908000000000001
        ]
      },
      "id": "ci11408754"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.34999999999999998,
        "place": "8km NNW of Anza, CA",
        "time": 1388598592630,
        "updated": 1457662446460,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408746",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408746&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "ci",
        "code": "11408746",
        "ids": ",ci11408746,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.068260000000000001,
        "rms": 0.02,
        "gap": 104,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - 8km NNW of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.69066669999999,
          33.623833300000001,
          14.519
        ]
      },
      "id": "ci11408746"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1000000000000001,
        "place": "4km S of Wofford Heights, CA",
        "time": 1388598303490,
        "updated": 1457721523722,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408738",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408738&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 19,
        "net": "ci",
        "code": "11408738",
        "ids": ",ci11408738,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 14,
        "dmin": 0.01193,
        "rms": 0.17000000000000001,
        "gap": 70,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.1 - 4km S of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.46116670000001,
          35.668500000000002,
          7.5780000000000003
        ]
      },
      "id": "ci11408738"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.84999999999999998,
        "place": "6km W of Cobb, California",
        "time": 1388598178980,
        "updated": 1486062795564,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134291",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134291&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 11,
        "net": "nc",
        "code": "72134291",
        "ids": ",nc72134291,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.0099100000000000004,
        "rms": 0.02,
        "gap": 50,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8021698,
          38.831665000000001,
          1.6599999999999999
        ]
      },
      "id": "nc72134291"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.050000000000000003,
        "place": "10km SSW of Idyllwild, CA",
        "time": 1388597566950,
        "updated": 1457735522936,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408730",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408730&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408730",
        "ids": ",ci11408730,",
        "sources": ",ci,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.06762,
        "rms": 0.02,
        "gap": 126,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.1 - 10km SSW of Idyllwild, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7776667,
          33.664000000000001,
          11.371
        ]
      },
      "id": "ci11408730"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.4299999999999999,
        "place": "2km WSW of Wauna, Washington",
        "time": 1388597214420,
        "updated": 1469215316460,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664401",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664401&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 31,
        "net": "uw",
        "code": "60664401",
        "ids": ",uw60664401,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 18,
        "dmin": 0.18870000000000001,
        "rms": 0.11,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.4 - 2km WSW of Wauna, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.681,
          47.3735,
          23.091000000000001
        ]
      },
      "id": "uw60664401"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.98,
        "place": "9km NW of The Geysers, California",
        "time": 1388596992080,
        "updated": 1486062787610,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134286",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134286&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 60,
        "net": "nc",
        "code": "72134286",
        "ids": ",nc72134286,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 66,
        "dmin": 0.001802,
        "rms": 0.050000000000000003,
        "gap": 45,
        "magType": "md",
        "type": "earthquake",
        "title": "M 2.0 - 9km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.83799999999999,
          38.8378333,
          1.7529999999999999
        ]
      },
      "id": "nc72134286"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.93000000000000005,
        "place": "7km NNW of Cabazon, CA",
        "time": 1388596432160,
        "updated": 1457707963233,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408722",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408722&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 13,
        "net": "ci",
        "code": "11408722",
        "ids": ",ci11408722,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 21,
        "dmin": 0.066199999999999995,
        "rms": 0.070000000000000007,
        "gap": 54,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.9 - 7km NNW of Cabazon, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.82299999999999,
          33.969999999999999,
          12.404
        ]
      },
      "id": "ci11408722"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.22,
        "place": "6km WSW of Calipatria, CA",
        "time": 1388595846710,
        "updated": 1457748993024,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408714",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408714&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 23,
        "net": "ci",
        "code": "11408714",
        "ids": ",ci11408714,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.033950000000000001,
        "rms": 0.13,
        "gap": 69,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.2 - 6km WSW of Calipatria, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.574,
          33.112166700000003,
          6.3689999999999998
        ]
      },
      "id": "ci11408714"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.03,
        "place": "10km WNW of Cobb, California",
        "time": 1388595185960,
        "updated": 1486062778749,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134281",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134281&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 16,
        "net": "nc",
        "code": "72134281",
        "ids": ",nc72134281,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.0054050000000000001,
        "rms": 0.040000000000000001,
        "gap": 75,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.0 - 10km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.840332,
          38.841999100000002,
          1.363
        ]
      },
      "id": "nc72134281"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.19,
        "place": "22km S of Sequim, Washington",
        "time": 1388595112000,
        "updated": 1469215316190,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664386",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664386&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "uw",
        "code": "60664386",
        "ids": ",uw60664386,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 3,
        "dmin": 0.1492,
        "rms": 0.22,
        "gap": 306,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.2 - 22km S of Sequim, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.108,
          47.881,
          4.5720000000000001
        ]
      },
      "id": "uw60664386"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.51000000000000001,
        "place": "23km E of Shingletown, California",
        "time": 1388594098900,
        "updated": 1486062772666,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134966",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134966&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134966",
        "ids": ",nc72134966,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.02342,
        "rms": 0.17999999999999999,
        "gap": 164,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 23km E of Shingletown, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.6118333,
          40.5075,
          17.765000000000001
        ]
      },
      "id": "nc72134966"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.03,
        "place": "3km S of San Juan Bautista, California",
        "time": 1388594073040,
        "updated": 1486062765070,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134271",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134271&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "nc",
        "code": "72134271",
        "ids": ",nc72134271,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 31,
        "dmin": 0.034229999999999997,
        "rms": 0.080000000000000002,
        "gap": 35,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.0 - 3km S of San Juan Bautista, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.5431667,
          36.816499999999998,
          5.0030000000000001
        ]
      },
      "id": "nc72134271"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.53000000000000003,
        "place": "5km W of Cobb, California",
        "time": 1388593404180,
        "updated": 1486062752946,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134266",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134266&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134266",
        "ids": ",nc72134266,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.01261,
        "rms": 0.02,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 5km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.79066469999999,
          38.8235016,
          -0.14999999999999999
        ]
      },
      "id": "nc72134266"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56999999999999995,
        "place": "Northern California",
        "time": 1388593117950,
        "updated": 1486062746741,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134256",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134256&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134256",
        "ids": ",nc72134256,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 4,
        "dmin": 0.020719999999999999,
        "rms": 0.01,
        "gap": 144,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80316929999999,
          38.842166900000002,
          0.96199999999999997
        ]
      },
      "id": "nc72134256"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.03,
        "place": "1km NE of Shandon, California",
        "time": 1388592733220,
        "updated": 1486062739010,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134251",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134251&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "nc",
        "code": "72134251",
        "ids": ",nc72134251,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 29,
        "dmin": 0.039640000000000002,
        "rms": 0.040000000000000001,
        "gap": 217,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.0 - 1km NE of Shandon, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.363,
          35.662666700000003,
          10.470000000000001
        ]
      },
      "id": "nc72134251"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.95999999999999996,
        "place": "4km S of Wofford Heights, CA",
        "time": 1388591902400,
        "updated": 1457707961898,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408698",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408698&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 14,
        "net": "ci",
        "code": "11408698",
        "ids": ",ci11408698,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.01132,
        "rms": 0.089999999999999997,
        "gap": 71,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 4km S of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4608333,
          35.666333299999998,
          9.1780000000000008
        ]
      },
      "id": "ci11408698"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 3.02,
        "place": "5km SSW of Wofford Heights, CA",
        "time": 1388591236460,
        "updated": 1457707960650,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408690",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408690&format=geojson",
        "felt": 32,
        "cdi": 3.1000000000000001,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 150,
        "net": "ci",
        "code": "11408690",
        "ids": ",ci11408690,nc72134246,usc000lvaw,",
        "sources": ",ci,nc,us,",
        "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 51,
        "dmin": 0.0045079999999999999,
        "rms": 0.14000000000000001,
        "gap": 46,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 3.0 - 5km SSW of Wofford Heights, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.46899999999999,
          35.664666699999998,
          9.4380000000000006
        ]
      },
      "id": "ci11408690"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.40000000000000002,
        "place": "20km ESE of Anza, CA",
        "time": 1388591230030,
        "updated": 1457755704762,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408682",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408682&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "ci",
        "code": "11408682",
        "ids": ",ci11408682,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 16,
        "dmin": 0.043459999999999999,
        "rms": 0.12,
        "gap": 139,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - 20km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.4686667,
          33.498833300000001,
          8.7940000000000005
        ]
      },
      "id": "ci11408682"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.12,
        "place": "Long Valley area, California",
        "time": 1388590936550,
        "updated": 1486062727267,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134241",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134241&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134241",
        "ids": ",nc72134241,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,",
        "nst": 8,
        "dmin": 0.018919999999999999,
        "rms": 0.02,
        "gap": 125,
        "magType": "md",
        "type": "earthquake",
        "title": "M -0.1 - Long Valley area, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.8595,
          37.630833299999999,
          1.2549999999999999
        ]
      },
      "id": "nc72134241"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3100000000000001,
        "place": "1km NNW of The Geysers, California",
        "time": 1388589626750,
        "updated": 1486062720010,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134236",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134236&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 26,
        "net": "nc",
        "code": "72134236",
        "ids": ",nc72134236,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 45,
        "dmin": 0.01171,
        "rms": 0.040000000000000001,
        "gap": 39,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 1km NNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7631667,
          38.7888333,
          1.24
        ]
      },
      "id": "nc72134236"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.72999999999999998,
        "place": "16km WNW of West Bishop, California",
        "time": 1388588073060,
        "updated": 1530313184503,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134226",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134226&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "nc",
        "code": "72134226",
        "ids": ",nc72134226,nn00432895,",
        "sources": ",nc,nn,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 16,
        "dmin": 0.088289999999999993,
        "rms": 0.040000000000000001,
        "gap": 74,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 16km WNW of West Bishop, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.61283330000001,
          37.432333300000003,
          7.6870000000000003
        ]
      },
      "id": "nc72134226"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.59999999999999998,
        "place": "24km WSW of Smith Valley, Nevada",
        "time": 1388587551979,
        "updated": 1530313184704,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432834",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432834&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 6,
        "net": "nn",
        "code": "00432834",
        "ids": ",nn00432834,",
        "sources": ",nn,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 7,
        "dmin": 0.20999999999999999,
        "rms": 0.1232,
        "gap": 161.06999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.6 - 24km WSW of Smith Valley, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.5894,
          38.677700000000002,
          10.300000000000001
        ]
      },
      "id": "nn00432834"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.68000000000000005,
        "place": "7km WNW of Cobb, California",
        "time": 1388587513070,
        "updated": 1486062705062,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134221",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134221&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72134221",
        "ids": ",nc72134221,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.014409999999999999,
        "rms": 0.01,
        "gap": 73,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 7km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8078308,
          38.837165800000001,
          1.7010000000000001
        ]
      },
      "id": "nc72134221"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.4199999999999999,
        "place": "17km SW of Chester, California",
        "time": 1388585661880,
        "updated": 1486062699616,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134216",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134216&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 31,
        "net": "nc",
        "code": "72134216",
        "ids": ",nc72134216,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 13,
        "dmin": 0.1225,
        "rms": 0.040000000000000001,
        "gap": 110,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.4 - 17km SW of Chester, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.3796667,
          40.202666700000002,
          -2.0139999999999998
        ]
      },
      "id": "nc72134216"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.070000000000000007,
        "place": "11km NE of Coso Junction, CA",
        "time": 1388585377460,
        "updated": 1457735520659,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408674",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408674&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408674",
        "ids": ",ci11408674,",
        "sources": ",ci,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.01619,
        "rms": 0.059999999999999998,
        "gap": 154,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.1 - 11km NE of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.8521667,
          36.101666700000003,
          2.7669999999999999
        ]
      },
      "id": "ci11408674"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.52000000000000002,
        "place": "18km NW of Coso Junction, CA",
        "time": 1388584456760,
        "updated": 1457742308483,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408666",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408666&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "ci",
        "code": "11408666",
        "ids": ",ci11408666,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 4,
        "dmin": 0.2019,
        "rms": 0.059999999999999998,
        "gap": 314,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 18km NW of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.1026667,
          36.140666699999997,
          5.5199999999999996
        ]
      },
      "id": "ci11408666"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3799999999999999,
        "place": "3km W of Cobb, California",
        "time": 1388584200530,
        "updated": 1486062693471,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134211",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134211&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 29,
        "net": "nc",
        "code": "72134211",
        "ids": ",nc72134211,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 49,
        "dmin": 0.0099100000000000004,
        "rms": 0.050000000000000003,
        "gap": 49,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.4 - 3km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7661667,
          38.821166699999999,
          1.45
        ]
      },
      "id": "nc72134211"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.35999999999999999,
        "place": "2km SSE of Ladera, California",
        "time": 1388583380930,
        "updated": 1486062686541,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134206",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134206&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "72134206",
        "ids": ",nc72134206,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 7,
        "dmin": 0.01712,
        "rms": 0.02,
        "gap": 148,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 2km SSE of Ladera, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1821667,
          37.3765,
          3.7599999999999998
        ]
      },
      "id": "nc72134206"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.93000000000000005,
        "place": "16km NNE of Angwin, California",
        "time": 1388582155830,
        "updated": 1486062680286,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134201",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134201&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 13,
        "net": "nc",
        "code": "72134201",
        "ids": ",nc72134201,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.078380000000000005,
        "rms": 0.059999999999999998,
        "gap": 122,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 16km NNE of Angwin, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.37216669999999,
          38.707666699999997,
          9.9399999999999995
        ]
      },
      "id": "nc72134201"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.42999999999999999,
        "place": "6km W of Middletown, California",
        "time": 1388580024670,
        "updated": 1486062674091,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134196",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134196&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72134196",
        "ids": ",nc72134196,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.003604,
        "rms": 0.029999999999999999,
        "gap": 204,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 6km W of Middletown, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.69,
          38.749499999999998,
          0.872
        ]
      },
      "id": "nc72134196"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.38,
        "place": "8km ENE of Coso Junction, CA",
        "time": 1388578712700,
        "updated": 1457694832146,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408658",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408658&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "ci",
        "code": "11408658",
        "ids": ",ci11408658,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.035479999999999998,
        "rms": 0.080000000000000002,
        "gap": 183,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - 8km ENE of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.86799999999999,
          36.083833300000002,
          4.907
        ]
      },
      "id": "ci11408658"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.25,
        "place": "5km WNW of The Geysers, California",
        "time": 1388578351230,
        "updated": 1486062665500,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134191",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134191&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 24,
        "net": "nc",
        "code": "72134191",
        "ids": ",nc72134191,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 46,
        "dmin": 0.013509999999999999,
        "rms": 0.040000000000000001,
        "gap": 48,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 5km WNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.815,
          38.801166700000003,
          3.0299999999999998
        ]
      },
      "id": "nc72134191"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.79,
        "place": "15km SE of Fredonia, Arizona",
        "time": 1388578276740,
        "updated": 1536775967120,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050632",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050632&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 49,
        "net": "uu",
        "code": "60050632",
        "ids": ",uu60050632,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 12,
        "dmin": 0.2455,
        "rms": 0.17999999999999999,
        "gap": 139,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.8 - 15km SE of Fredonia, Arizona"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.40900000000001,
          36.838999999999999,
          18.719999999999999
        ]
      },
      "id": "uu60050632"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3999999999999999,
        "place": "29km SW of Lima, Montana",
        "time": 1388578116300,
        "updated": 1388769282272,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/mb14595454",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=mb14595454&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "AUTOMATIC",
        "tsunami": 0,
        "sig": 30,
        "net": "mb",
        "code": "14595454",
        "ids": ",mb14595454,",
        "sources": ",mb,",
        "types": ",general-link,general-link,geoserve,nearby-cities,origin,",
        "nst": 12,
        "dmin": 0.35573284999999999,
        "rms": 0.14000000000000001,
        "gap": 108,
        "magType": "Md",
        "type": "earthquake",
        "title": "M 1.4 - 29km SW of Lima, Montana"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.8475,
          44.445099999999996,
          6.9000000000000004
        ]
      },
      "id": "mb14595454"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.75,
        "place": "10km NE of Coso Junction, CA",
        "time": 1388577715730,
        "updated": 1457682055510,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408650",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408650&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 9,
        "net": "ci",
        "code": "11408650",
        "ids": ",ci11408650,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.017420000000000001,
        "rms": 0.059999999999999998,
        "gap": 196,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.8 - 10km NE of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.8653333,
          36.102499999999999,
          4.032
        ]
      },
      "id": "ci11408650"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.42999999999999999,
        "place": "19km E of Kelso, Washington",
        "time": 1388577684900,
        "updated": 1469215315950,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664346",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664346&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "uw",
        "code": "60664346",
        "ids": ",uw60664346,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 13,
        "dmin": 0.063140000000000002,
        "rms": 0.14999999999999999,
        "gap": 143,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 19km E of Kelso, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.6526667,
          46.149166700000002,
          15.17
        ]
      },
      "id": "uw60664346"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.27000000000000002,
        "place": "6km NW of The Geysers, California",
        "time": 1388577145940,
        "updated": 1486062651000,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134181",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134181&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nc",
        "code": "72134181",
        "ids": ",nc72134181,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 25,
        "dmin": 0.0045050000000000003,
        "rms": 0.059999999999999998,
        "gap": 52,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.3 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80500000000001,
          38.825499999999998,
          2.9100000000000001
        ]
      },
      "id": "nc72134181"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.16,
        "place": "15km E of Little Lake, CA",
        "time": 1388576031500,
        "updated": 1457721522509,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408642",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408642&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408642",
        "ids": ",ci11408642,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 10,
        "dmin": 0.063320000000000001,
        "rms": 0.11,
        "gap": 91,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.2 - 15km E of Little Lake, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.7401667,
          35.939500000000002,
          1.502
        ]
      },
      "id": "ci11408642"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.87,
        "place": "1km NNE of The Geysers, California",
        "time": 1388575864000,
        "updated": 1486062644886,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134176",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134176&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72134176",
        "ids": ",nc72134176,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.01261,
        "rms": 0.01,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 1km NNE of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7528305,
          38.7859993,
          -0.16500000000000001
        ]
      },
      "id": "nc72134176"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.26000000000000001,
        "place": "9km NNE of Banning, CA",
        "time": 1388575475910,
        "updated": 1457682054124,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408634",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408634&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "ci",
        "code": "11408634",
        "ids": ",ci11408634,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 12,
        "dmin": 0.040280000000000003,
        "rms": 0.050000000000000003,
        "gap": 80,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.3 - 9km NNE of Banning, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.8258333,
          33.997666700000003,
          10.294
        ]
      },
      "id": "ci11408634"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1399999999999999,
        "place": "13km SSW of Lakeport, California",
        "time": 1388573493610,
        "updated": 1486062639025,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134166",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134166&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 20,
        "net": "nc",
        "code": "72134166",
        "ids": ",nc72134166,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.081979999999999997,
        "rms": 0.029999999999999999,
        "gap": 91,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 13km SSW of Lakeport, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.99066670000001,
          38.941333299999997,
          8.202
        ]
      },
      "id": "nc72134166"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0,
        "place": "17km E of Hawthorne, Nevada",
        "time": 1388573042038,
        "updated": 1530313184800,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00435972",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00435972&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00435972",
        "ids": ",nn00435972,",
        "sources": ",nn,",
        "types": ",general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 5,
        "dmin": 0.12,
        "rms": 0.1265,
        "gap": 153.53999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.0 - 17km E of Hawthorne, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.4256,
          38.533099999999997,
          8.9000000000000004
        ]
      },
      "id": "nn00435972"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.71999999999999997,
        "place": "10km WNW of Garnet, CA",
        "time": 1388572837840,
        "updated": 1457675636031,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408626",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408626&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "ci",
        "code": "11408626",
        "ids": ",ci11408626,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 21,
        "dmin": 0.05178,
        "rms": 0.070000000000000007,
        "gap": 61,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.7 - 10km WNW of Garnet, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.64,
          33.940333299999999,
          13.345000000000001
        ]
      },
      "id": "ci11408626"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.28,
        "place": "17km NNE of Old Faithful Geyser, Wyoming",
        "time": 1388572206850,
        "updated": 1536776730080,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050627",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050627&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 25,
        "net": "uu",
        "code": "60050627",
        "ids": ",uu60050627,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 14,
        "dmin": 0.058979999999999998,
        "rms": 0.19,
        "gap": 76,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.3 - 17km NNE of Old Faithful Geyser, Wyoming"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.7243333,
          44.594499999999996,
          4.6100000000000003
        ]
      },
      "id": "uu60050627"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.10000000000000001,
        "place": "5km WSW of Mammoth Lakes, California",
        "time": 1388572171700,
        "updated": 1486062632756,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72135671",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72135671&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72135671",
        "ids": ",nc72135671,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 8,
        "dmin": 0.0072069999999999999,
        "rms": 0.10000000000000001,
        "gap": 135,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.1 - 5km WSW of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.02800000000001,
          37.6355,
          10.613
        ]
      },
      "id": "nc72135671"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.79,
        "place": "18km NNE of Old Faithful Geyser, Wyoming",
        "time": 1388572006010,
        "updated": 1536776728780,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050622",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050622&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 49,
        "net": "uu",
        "code": "60050622",
        "ids": ",uu60050622,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 11,
        "dmin": 0.051119999999999999,
        "rms": 0.20999999999999999,
        "gap": 75,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.8 - 18km NNE of Old Faithful Geyser, Wyoming"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.7146667,
          44.603166700000003,
          7.3899999999999997
        ]
      },
      "id": "uu60050622"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.29999999999999999,
        "place": "Nevada",
        "time": 1388571703897,
        "updated": 1530313183318,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432943",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432943&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432943",
        "ids": ",nn00432943,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.14799999999999999,
        "rms": 0.1216,
        "gap": 311.66000000000003,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.3 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.7513,
          40.317100000000003,
          3.6000000000000001
        ]
      },
      "id": "nn00432943"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.99,
        "place": "5km NW of The Geysers, California",
        "time": 1388570195650,
        "updated": 1486062623790,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134126",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134126&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 61,
        "net": "nc",
        "code": "72134126",
        "ids": ",nc72134126,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 63,
        "dmin": 0.001802,
        "rms": 0.040000000000000001,
        "gap": 23,
        "magType": "md",
        "type": "earthquake",
        "title": "M 2.0 - 5km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.79716670000001,
          38.809333299999999,
          3.3999999999999999
        ]
      },
      "id": "nc72134126"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.55000000000000004,
        "place": "10km WNW of Cobb, California",
        "time": 1388569991350,
        "updated": 1486062614382,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134121",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134121&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134121",
        "ids": ",nc72134121,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.0054050000000000001,
        "rms": 0.02,
        "gap": 116,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 10km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.84100340000001,
          38.841331500000003,
          2.0310000000000001
        ]
      },
      "id": "nc72134121"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3600000000000001,
        "place": "0km SSW of Orange, CA",
        "time": 1388569943910,
        "updated": 1457707958690,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408618",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408618&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 28,
        "net": "ci",
        "code": "11408618",
        "ids": ",ci11408618,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 22,
        "dmin": 0.01523,
        "rms": 0.089999999999999997,
        "gap": 114,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.4 - 0km SSW of Orange, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.8335,
          33.800666700000001,
          2.4020000000000001
        ]
      },
      "id": "ci11408618"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.72999999999999998,
        "place": "6km W of Cobb, California",
        "time": 1388569821950,
        "updated": 1486062608691,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134116",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134116&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 8,
        "net": "nc",
        "code": "72134116",
        "ids": ",nc72134116,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 11,
        "dmin": 0.0054050000000000001,
        "rms": 0.02,
        "gap": 82,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8028336,
          38.825000799999998,
          2.3740000000000001
        ]
      },
      "id": "nc72134116"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.48999999999999999,
        "place": "14km NW of Coso Junction, CA",
        "time": 1388568362680,
        "updated": 1457668975998,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408610",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408610&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "ci",
        "code": "11408610",
        "ids": ",ci11408610,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 9,
        "dmin": 0.16830000000000001,
        "rms": 0.040000000000000001,
        "gap": 255,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 14km NW of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.06216670000001,
          36.130000000000003,
          -0.65300000000000002
        ]
      },
      "id": "ci11408610"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.69999999999999996,
        "place": "Nevada",
        "time": 1388568026976,
        "updated": 1530313183241,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432942",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432942&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432942",
        "ids": ",nn00432942,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.091999999999999998,
        "rms": 0.00059999999999999995,
        "gap": 139.58000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.7 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.65779999999999,
          40.098100000000002,
          13.800000000000001
        ]
      },
      "id": "nn00432942"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.1099999999999999,
        "place": "48km WNW of Tremonton, Utah",
        "time": 1388567181460,
        "updated": 1536775965530,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050607",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050607&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 68,
        "net": "uu",
        "code": "60050607",
        "ids": ",uu60050607,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 24,
        "dmin": 0.033309999999999999,
        "rms": 0.20000000000000001,
        "gap": 146,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 2.1 - 48km WNW of Tremonton, Utah"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.7375,
          41.797666700000001,
          4.04
        ]
      },
      "id": "uu60050607"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.90000000000000002,
        "place": "7km NW of The Geysers, California",
        "time": 1388567172530,
        "updated": 1486062602917,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134111",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134111&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72134111",
        "ids": ",nc72134111,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 18,
        "dmin": 0.0081080000000000006,
        "rms": 0.029999999999999999,
        "gap": 58,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 7km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8273315,
          38.8173332,
          2.1509999999999998
        ]
      },
      "id": "nc72134111"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1000000000000001,
        "place": "Central California",
        "time": 1388566212793,
        "updated": 1530313185444,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00557599",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00557599&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 19,
        "net": "nn",
        "code": "00557599",
        "ids": ",nn00557599,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 7,
        "dmin": 0.317,
        "rms": 0.10249999999999999,
        "gap": 118.37,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.1 - Central California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.85250000000001,
          38.090600000000002,
          12.800000000000001
        ]
      },
      "id": "nn00557599"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3,
        "place": "6km W of Cobb, California",
        "time": 1388566128760,
        "updated": 1486062595810,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134106",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134106&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 26,
        "net": "nc",
        "code": "72134106",
        "ids": ",nc72134106,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 43,
        "dmin": 0.0099100000000000004,
        "rms": 0.029999999999999999,
        "gap": 33,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.79783329999999,
          38.825333299999997,
          1.6200000000000001
        ]
      },
      "id": "nc72134106"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.23000000000000001,
        "place": "Northern California",
        "time": 1388565873540,
        "updated": 1486062587822,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134101",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134101&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nc",
        "code": "72134101",
        "ids": ",nc72134101,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 5,
        "dmin": 0.006306,
        "rms": 0.01,
        "gap": 167,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.2 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80316670000001,
          38.827166699999999,
          2.0600000000000001
        ]
      },
      "id": "nc72134101"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.8500000000000001,
        "place": "11km NNE of Angwin, California",
        "time": 1388565497530,
        "updated": 1486062580920,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134096",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134096&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 53,
        "net": "nc",
        "code": "72134096",
        "ids": ",nc72134096,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 33,
        "dmin": 0.036040000000000003,
        "rms": 0.11,
        "gap": 70,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.9 - 11km NNE of Angwin, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.3998333,
          38.671333300000001,
          6.7480000000000002
        ]
      },
      "id": "nc72134096"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.5800000000000001,
        "place": "6km W of Cobb, California",
        "time": 1388565330890,
        "updated": 1486062567350,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134091",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134091&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 38,
        "net": "nc",
        "code": "72134091",
        "ids": ",nc72134091,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 52,
        "dmin": 0.0099100000000000004,
        "rms": 0.040000000000000001,
        "gap": 33,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.6 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.798,
          38.824666700000002,
          1.72
        ]
      },
      "id": "nc72134091"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1100000000000001,
        "place": "6km NNW of Cabazon, CA",
        "time": 1388565293750,
        "updated": 1457742306623,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408602",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408602&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 19,
        "net": "ci",
        "code": "11408602",
        "ids": ",ci11408602,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 38,
        "dmin": 0.064439999999999997,
        "rms": 0.10000000000000001,
        "gap": 45,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.1 - 6km NNW of Cabazon, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.8005,
          33.970833300000002,
          13.436999999999999
        ]
      },
      "id": "ci11408602"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.5,
        "place": "1km W of Lemmon Valley, Nevada",
        "time": 1388565256334,
        "updated": 1530313184406,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432831",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432831&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "nn",
        "code": "00432831",
        "ids": ",nn00432831,",
        "sources": ",nn,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 8,
        "dmin": 0.067000000000000004,
        "rms": 0.0998,
        "gap": 88.379999999999995,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 1km W of Lemmon Valley, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.8596,
          39.638800000000003,
          7.2000000000000002
        ]
      },
      "id": "nn00432831"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.48999999999999999,
        "place": "3km SSW of Idyllwild, CA",
        "time": 1388565167630,
        "updated": 1457682052780,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408594",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408594&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 4,
        "net": "ci",
        "code": "11408594",
        "ids": ",ci11408594,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 16,
        "dmin": 0.01051,
        "rms": 0.11,
        "gap": 175,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 3km SSW of Idyllwild, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7256667,
          33.715499999999999,
          19.052
        ]
      },
      "id": "ci11408594"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.12,
        "place": "5km SSW of Mammoth Lakes, California",
        "time": 1388564570340,
        "updated": 1486062558575,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134086",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134086&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134086",
        "ids": ",nc72134086,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.01171,
        "rms": 0.050000000000000003,
        "gap": 257,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.1 - 5km SSW of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.00283330000001,
          37.601666700000003,
          1.7290000000000001
        ]
      },
      "id": "nc72134086"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56000000000000005,
        "place": "Northern California",
        "time": 1388563128970,
        "updated": 1486062553147,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134081",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134081&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134081",
        "ids": ",nc72134081,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.0081080000000000006,
        "rms": 0.02,
        "gap": 285,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8168335,
          38.829498299999997,
          4.1520000000000001
        ]
      },
      "id": "nc72134081"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.69999999999999996,
        "place": "8km SSW of Dayton, Nevada",
        "time": 1388562861267,
        "updated": 1530313182519,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432828",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432828&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "nn",
        "code": "00432828",
        "ids": ",nn00432828,",
        "sources": ",nn,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 14,
        "dmin": 0.072999999999999995,
        "rms": 0.1351,
        "gap": 102.28,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.7 - 8km SSW of Dayton, Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.6272,
          39.167700000000004,
          5.7000000000000002
        ]
      },
      "id": "nn00432828"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.39000000000000001,
        "place": "8km N of Borrego Springs, CA",
        "time": 1388562738550,
        "updated": 1457762409677,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408586",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408586&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "ci",
        "code": "11408586",
        "ids": ",ci11408586,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 11,
        "dmin": 0.0082740000000000001,
        "rms": 0.050000000000000003,
        "gap": 126,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - 8km N of Borrego Springs, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.377,
          33.326166700000002,
          9.4329999999999998
        ]
      },
      "id": "ci11408586"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.070000000000000007,
        "place": "Northern California",
        "time": 1388562376480,
        "updated": 1486062547517,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134076",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134076&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134076",
        "ids": ",nc72134076,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.014409999999999999,
        "rms": 0.01,
        "gap": 111,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.1 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80982969999999,
          38.837833400000001,
          1.526
        ]
      },
      "id": "nc72134076"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.17999999999999999,
        "place": "6km NW of The Geysers, California",
        "time": 1388562256370,
        "updated": 1486062540567,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134071",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134071&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 0,
        "net": "nc",
        "code": "72134071",
        "ids": ",nc72134071,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.01171,
        "rms": 0.02,
        "gap": 141,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.2 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8201675,
          38.814334899999999,
          2.6200000000000001
        ]
      },
      "id": "nc72134071"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.46999999999999997,
        "place": "10km NNW of Anza, CA",
        "time": 1388561401920,
        "updated": 1457707956859,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408578",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408578&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "ci",
        "code": "11408578",
        "ids": ",ci11408578,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.0528,
        "rms": 0.050000000000000003,
        "gap": 87,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.5 - 10km NNW of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.71899999999999,
          33.631833299999997,
          16.672999999999998
        ]
      },
      "id": "ci11408578"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.90000000000000002,
        "place": "8km WNW of Cobb, California",
        "time": 1388561383900,
        "updated": 1486062534866,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134066",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134066&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72134066",
        "ids": ",nc72134066,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.016219999999999998,
        "rms": 0.029999999999999999,
        "gap": 70,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 8km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.81216430000001,
          38.840499899999998,
          0.58899999999999997
        ]
      },
      "id": "nc72134066"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.80000000000000004,
        "place": "Northern California",
        "time": 1388559926722,
        "updated": 1530313183162,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432940",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432940&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432940",
        "ids": ",nn00432940,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 4,
        "dmin": 0.097000000000000003,
        "rms": 0.073700000000000002,
        "gap": 113.51000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.8 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.1771,
          39.397799999999997,
          10.9
        ]
      },
      "id": "nn00432940"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.2,
        "place": "4km ENE of Laytonville, California",
        "time": 1388559865910,
        "updated": 1486062528353,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134051",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134051&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 22,
        "net": "nc",
        "code": "72134051",
        "ids": ",nc72134051,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.058560000000000001,
        "rms": 0.14000000000000001,
        "gap": 128,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.2 - 4km ENE of Laytonville, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.4368333,
          39.697000000000003,
          8.1959999999999997
        ]
      },
      "id": "nc72134051"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.76000000000000001,
        "place": "22km NNE of Soledad, California",
        "time": 1388559577970,
        "updated": 1486062522905,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134046",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134046&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 9,
        "net": "nc",
        "code": "72134046",
        "ids": ",nc72134046,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 12,
        "dmin": 0.070269999999999999,
        "rms": 0.12,
        "gap": 190,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.8 - 22km NNE of Soledad, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.2178333,
          36.603499999999997,
          1.232
        ]
      },
      "id": "nc72134046"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.31,
        "place": "5km W of Cobb, California",
        "time": 1388559559450,
        "updated": 1486062517496,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134041",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134041&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nc",
        "code": "72134041",
        "ids": ",nc72134041,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 25,
        "dmin": 0.013509999999999999,
        "rms": 0.040000000000000001,
        "gap": 52,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.3 - 5km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.79166669999999,
          38.823333300000002,
          3.0800000000000001
        ]
      },
      "id": "nc72134041"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.55000000000000004,
        "place": "6km W of Cobb, California",
        "time": 1388558892070,
        "updated": 1486062511761,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134036",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134036&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72134036",
        "ids": ",nc72134036,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.018919999999999999,
        "rms": 0.01,
        "gap": 134,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8028336,
          38.826332100000002,
          2.0249999999999999
        ]
      },
      "id": "nc72134036"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.71999999999999997,
        "place": "11km NW of Warner Springs, CA",
        "time": 1388557813580,
        "updated": 1457694830185,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408562",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408562&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "ci",
        "code": "11408562",
        "ids": ",ci11408562,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 26,
        "dmin": 0.1207,
        "rms": 0.14999999999999999,
        "gap": 57,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.7 - 11km NW of Warner Springs, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.71850000000001,
          33.356166700000003,
          15.423999999999999
        ]
      },
      "id": "ci11408562"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.72999999999999998,
        "place": "5km NW of Montalvin, California",
        "time": 1388557466830,
        "updated": 1486062506350,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134031",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134031&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "nc",
        "code": "72134031",
        "ids": ",nc72134031,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.080180000000000001,
        "rms": 0.089999999999999997,
        "gap": 82,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 5km NW of Montalvin, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.37949999999999,
          38.0311667,
          8.1940000000000008
        ]
      },
      "id": "nc72134031"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.52000000000000002,
        "place": "1km NNW of The Geysers, California",
        "time": 1388557287480,
        "updated": 1486062500106,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134026",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134026&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 4,
        "net": "nc",
        "code": "72134026",
        "ids": ",nc72134026,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.019820000000000001,
        "rms": 0.01,
        "gap": 107,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 1km NNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7624969,
          38.790164900000001,
          1.484
        ]
      },
      "id": "nc72134026"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.80000000000000004,
        "place": "Northern California",
        "time": 1388557153542,
        "updated": 1530313183078,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432939",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432939&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432939",
        "ids": ",nn00432939,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.0080000000000000002,
        "rms": 0.0229,
        "gap": 203.81999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.8 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.2914,
          39.426299999999998,
          7.4000000000000004
        ]
      },
      "id": "nn00432939"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.79000000000000004,
        "place": "10km N of Banning, CA",
        "time": 1388556488800,
        "updated": 1457694828953,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408554",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408554&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 10,
        "net": "ci",
        "code": "11408554",
        "ids": ",ci11408554,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 28,
        "dmin": 0.050930000000000003,
        "rms": 0.10000000000000001,
        "gap": 64,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.8 - 10km N of Banning, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.8913333,
          34.018333300000002,
          8.8209999999999997
        ]
      },
      "id": "ci11408554"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3600000000000001,
        "place": "15km N of Borrego Springs, CA",
        "time": 1388555952950,
        "updated": 1457728842257,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408546",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408546&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 28,
        "net": "ci",
        "code": "11408546",
        "ids": ",ci11408546,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 52,
        "dmin": 0.065740000000000007,
        "rms": 0.17999999999999999,
        "gap": 55,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.4 - 15km N of Borrego Springs, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.4015,
          33.386000000000003,
          12.587999999999999
        ]
      },
      "id": "ci11408546"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.90000000000000002,
        "place": "6km W of Cobb, California",
        "time": 1388555870070,
        "updated": 1486062494423,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134021",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134021&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72134021",
        "ids": ",nc72134021,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.006306,
        "rms": 0.029999999999999999,
        "gap": 64,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 6km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80316929999999,
          38.819332099999997,
          0.19900000000000001
        ]
      },
      "id": "nc72134021"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1200000000000001,
        "place": "7km NNE of Cloverdale, California",
        "time": 1388555753800,
        "updated": 1486062488526,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134016",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134016&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 19,
        "net": "nc",
        "code": "72134016",
        "ids": ",nc72134016,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 22,
        "dmin": 0.031530000000000002,
        "rms": 0.050000000000000003,
        "gap": 66,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 7km NNE of Cloverdale, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.97499999999999,
          38.867666700000001,
          4.5339999999999998
        ]
      },
      "id": "nc72134016"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.05,
        "place": "15km NW of Coso Junction, CA",
        "time": 1388555729320,
        "updated": 1457688586549,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408538",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408538&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 17,
        "net": "ci",
        "code": "11408538",
        "ids": ",ci11408538,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 16,
        "dmin": 0.1734,
        "rms": 0.13,
        "gap": 82,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.1 - 15km NW of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.06816670000001,
          36.133499999999998,
          -0.56299999999999994
        ]
      },
      "id": "ci11408538"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.89000000000000001,
        "place": "12km ENE of Cabazon, CA",
        "time": 1388555603870,
        "updated": 1457694827589,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408530",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408530&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 12,
        "net": "ci",
        "code": "11408530",
        "ids": ",ci11408530,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 32,
        "dmin": 0.077899999999999997,
        "rms": 0.089999999999999997,
        "gap": 64,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.9 - 12km ENE of Cabazon, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.676,
          33.963999999999999,
          18.445
        ]
      },
      "id": "ci11408530"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.90000000000000002,
        "place": "Northern California",
        "time": 1388555330207,
        "updated": 1530313182998,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432937",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432937&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432937",
        "ids": ",nn00432937,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.0089999999999999993,
        "rms": 0.0051000000000000004,
        "gap": 236.31999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.9 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.2838,
          39.427900000000001,
          7.9000000000000004
        ]
      },
      "id": "nn00432937"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.47,
        "place": "31km SSE of Manti, Utah",
        "time": 1388555243490,
        "updated": 1536775964180,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050602",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050602&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 33,
        "net": "uu",
        "code": "60050602",
        "ids": ",uu60050602,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 10,
        "dmin": 0.23300000000000001,
        "rms": 0.10000000000000001,
        "gap": 80,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.5 - 31km SSE of Manti, Utah"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.4801667,
          39.009166700000002,
          12.98
        ]
      },
      "id": "uu60050602"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.25,
        "place": "11km SE of Lucerne Valley, CA",
        "time": 1388553912520,
        "updated": 1457755703392,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408522",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408522&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 24,
        "net": "ci",
        "code": "11408522",
        "ids": ",ci11408522,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 40,
        "dmin": 0.1042,
        "rms": 0.17000000000000001,
        "gap": 118,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.3 - 11km SE of Lucerne Valley, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.9013333,
          34.365499999999997,
          2.4199999999999999
        ]
      },
      "id": "ci11408522"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.64000000000000001,
        "place": "7km SE of Valle Vista, CA",
        "time": 1388553869800,
        "updated": 1457662445281,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408514",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408514&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 6,
        "net": "ci",
        "code": "11408514",
        "ids": ",ci11408514,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 18,
        "dmin": 0.081670000000000006,
        "rms": 0.070000000000000007,
        "gap": 161,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.6 - 7km SE of Valle Vista, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.8288333,
          33.710333300000002,
          15.451000000000001
        ]
      },
      "id": "ci11408514"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.40000000000000002,
        "place": "Northern California",
        "time": 1388553834171,
        "updated": 1530313182911,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432933",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432933&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432933",
        "ids": ",nn00432933,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 6,
        "dmin": 0.0080000000000000002,
        "rms": 0.1014,
        "gap": 90.319999999999993,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.4 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.2826,
          39.434399999999997,
          6.5
        ]
      },
      "id": "nn00432933"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.37,
        "place": "26km WSW of Coalinga, California",
        "time": 1388553610990,
        "updated": 1486062482583,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc71076849",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc71076849&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "71076849",
        "ids": ",nc71076849,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 11,
        "dmin": 0.033329999999999999,
        "rms": 0.059999999999999998,
        "gap": 132,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 26km WSW of Coalinga, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.6238333,
          36.043999999999997,
          -0.73799999999999999
        ]
      },
      "id": "nc71076849"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.66000000000000003,
        "place": "28km WSW of Coalinga, California",
        "time": 1388553593660,
        "updated": 1486062476218,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134011",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134011&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72134011",
        "ids": ",nc72134011,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 18,
        "dmin": 0.05586,
        "rms": 0.11,
        "gap": 147,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 28km WSW of Coalinga, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.6651667,
          36.062666700000001,
          3.7440000000000002
        ]
      },
      "id": "nc72134011"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.10000000000000001,
        "place": "Nevada",
        "time": 1388553477800,
        "updated": 1530313183874,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00433108",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00433108&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00433108",
        "ids": ",nn00433108,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 5,
        "dmin": 0.065000000000000002,
        "rms": 0.067500000000000004,
        "gap": 261.56,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.1 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.29340000000001,
          36.7333,
          7.2999999999999998
        ]
      },
      "id": "nn00433108"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.58999999999999997,
        "place": "14km NW of Coso Junction, CA",
        "time": 1388553314040,
        "updated": 1457701273876,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408506",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408506&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "ci",
        "code": "11408506",
        "ids": ",ci11408506,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 8,
        "dmin": 0.17130000000000001,
        "rms": 0.14999999999999999,
        "gap": 160,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.6 - 14km NW of Coso Junction, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.06583329999999,
          36.130333299999997,
          4.0170000000000003
        ]
      },
      "id": "ci11408506"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.23,
        "place": "7km SE of Valle Vista, CA",
        "time": 1388553009000,
        "updated": 1457755701938,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408498",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408498&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 23,
        "net": "ci",
        "code": "11408498",
        "ids": ",ci11408498,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 41,
        "dmin": 0.075829999999999995,
        "rms": 0.14999999999999999,
        "gap": 43,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.2 - 7km SE of Valle Vista, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.8355,
          33.705333299999999,
          15.930999999999999
        ]
      },
      "id": "ci11408498"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3400000000000001,
        "place": "1km SW of Cobb, California",
        "time": 1388552834160,
        "updated": 1486062468530,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134006",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134006&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 28,
        "net": "nc",
        "code": "72134006",
        "ids": ",nc72134006,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 47,
        "dmin": 0.0099100000000000004,
        "rms": 0.059999999999999998,
        "gap": 50,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 1km SW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.73950000000001,
          38.810000000000002,
          2.2599999999999998
        ]
      },
      "id": "nc72134006"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.5,
        "place": "Nevada",
        "time": 1388552214678,
        "updated": 1530313183778,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00433106",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00433106&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00433106",
        "ids": ",nn00433106,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 8,
        "dmin": 0.085999999999999993,
        "rms": 0.15240000000000001,
        "gap": 101.59999999999999,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.5 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.7354,
          36.8932,
          0
        ]
      },
      "id": "nn00433106"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.9199999999999999,
        "place": "23km WSW of Malad City, Idaho",
        "time": 1388549996180,
        "updated": 1536775962440,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050592",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050592&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 131,
        "net": "uu",
        "code": "60050592",
        "ids": ",uu60050592,usc000lv74,",
        "sources": ",uu,us,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 31,
        "dmin": 0.01891,
        "rms": 0.14000000000000001,
        "gap": 122,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 2.9 - 23km WSW of Malad City, Idaho"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.529,
          42.130166699999997,
          6.75
        ]
      },
      "id": "uu60050592"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.1200000000000001,
        "place": "26km NE of Redway, California",
        "time": 1388549939080,
        "updated": 1486062456820,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133976",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133976&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 69,
        "net": "nc",
        "code": "72133976",
        "ids": ",nc72133976,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 30,
        "dmin": 0.1162,
        "rms": 0.089999999999999997,
        "gap": 32,
        "magType": "md",
        "type": "earthquake",
        "title": "M 2.1 - 26km NE of Redway, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.622,
          40.297666700000001,
          29.404
        ]
      },
      "id": "nc72133976"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.89000000000000001,
        "place": "6km NW of The Geysers, California",
        "time": 1388549800700,
        "updated": 1486062448314,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133971",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133971&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 12,
        "net": "nc",
        "code": "72133971",
        "ids": ",nc72133971,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.0027030000000000001,
        "rms": 0.02,
        "gap": 85,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.9 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80699920000001,
          38.824500999999998,
          2.4089999999999998
        ]
      },
      "id": "nc72133971"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.03,
        "place": "4km NNW of White Center, Washington",
        "time": 1388549563750,
        "updated": 1469215315680,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664316",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664316&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "uw",
        "code": "60664316",
        "ids": ",uw60664316,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 10,
        "dmin": 0.27889999999999998,
        "rms": 0.16,
        "gap": 111,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.0 - 4km NNW of White Center, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.376,
          47.552166700000001,
          25.838000000000001
        ]
      },
      "id": "uw60664316"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.81999999999999995,
        "place": "11km NNE of Borrego Springs, CA",
        "time": 1388549145310,
        "updated": 1457707955483,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408490",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408490&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 10,
        "net": "ci",
        "code": "11408490",
        "ids": ",ci11408490,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 27,
        "dmin": 0.02997,
        "rms": 0.17000000000000001,
        "gap": 123,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.8 - 11km NNE of Borrego Springs, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.3398333,
          33.346166699999998,
          14.343
        ]
      },
      "id": "ci11408490"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.35999999999999999,
        "place": "12km SSW of Loyola, California",
        "time": 1388548556360,
        "updated": 1486062442867,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133966",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133966&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "72133966",
        "ids": ",nc72133966,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.035139999999999998,
        "rms": 0.10000000000000001,
        "gap": 113,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 12km SSW of Loyola, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1718333,
          37.258000000000003,
          9.0180000000000007
        ]
      },
      "id": "nc72133966"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.03,
        "place": "1km W of Beaumont, CA",
        "time": 1388548285340,
        "updated": 1457707954084,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408482",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408482&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "ci",
        "code": "11408482",
        "ids": ",ci11408482,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 40,
        "dmin": 0.12640000000000001,
        "rms": 0.12,
        "gap": 51,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 1km W of Beaumont, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.9896667,
          33.929166700000003,
          14.502000000000001
        ]
      },
      "id": "ci11408482"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.90000000000000002,
        "place": "Nevada",
        "time": 1388548235677,
        "updated": 1530313183677,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00433105",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00433105&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00433105",
        "ids": ",nn00433105,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 6,
        "dmin": 0.056000000000000001,
        "rms": 0.1244,
        "gap": 116.02,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.9 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.2841,
          37.169199999999996,
          8
        ]
      },
      "id": "nn00433105"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56999999999999995,
        "place": "19km SE of Mammoth Lakes, California",
        "time": 1388547560150,
        "updated": 1486062437024,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133961",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133961&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72133961",
        "ids": ",nc72133961,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 22,
        "dmin": 0.070269999999999999,
        "rms": 0.040000000000000001,
        "gap": 149,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 19km SE of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.82483329999999,
          37.519666700000002,
          4.3019999999999996
        ]
      },
      "id": "nc72133961"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.90000000000000002,
        "place": "Nevada",
        "time": 1388547521557,
        "updated": 1530313184289,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432825",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432825&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 12,
        "net": "nn",
        "code": "00432825",
        "ids": ",nn00432825,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 10,
        "dmin": 0.36899999999999999,
        "rms": 0.1128,
        "gap": 126.36,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.9 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.9816,
          37.449599999999997,
          12.6
        ]
      },
      "id": "nn00432825"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.01,
        "place": "9km N of Rancho Cucamonga, CA",
        "time": 1388547353430,
        "updated": 1457707952674,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408474",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408474&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 16,
        "net": "ci",
        "code": "11408474",
        "ids": ",ci11408474,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 28,
        "dmin": 0.066790000000000002,
        "rms": 0.12,
        "gap": 55,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.0 - 9km N of Rancho Cucamonga, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.5881667,
          34.206166699999997,
          12.212999999999999
        ]
      },
      "id": "ci11408474"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.40000000000000002,
        "place": "19km SE of Mammoth Lakes, California",
        "time": 1388547285170,
        "updated": 1486062431601,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc71076564",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc71076564&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "nc",
        "code": "71076564",
        "ids": ",nc71076564,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 7,
        "dmin": 0.069370000000000001,
        "rms": 0.02,
        "gap": 149,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 19km SE of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.82483329999999,
          37.5208333,
          3.6890000000000001
        ]
      },
      "id": "nc71076564"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.05,
        "place": "25km NNW of Laytonville, California",
        "time": 1388547270150,
        "updated": 1486062426162,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133956",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133956&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 17,
        "net": "nc",
        "code": "72133956",
        "ids": ",nc72133956,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 6,
        "dmin": 0.018919999999999999,
        "rms": 0.01,
        "gap": 144,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 25km NNW of Laytonville, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.5745,
          39.908333300000002,
          10.353999999999999
        ]
      },
      "id": "nc72133956"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.8999999999999999,
        "place": "2km SE of Fairfield Bay, Arkansas",
        "time": 1388547180560,
        "updated": 1460050481570,
        "tz": -360,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nm610251",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nm610251&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 56,
        "net": "nm",
        "code": "610251",
        "ids": ",nm010114a,nm610251,",
        "sources": ",nm,nm,",
        "types": ",associate,cap,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 12,
        "dmin": 0.065769999999999995,
        "rms": 0.19,
        "gap": 95,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.9 - 2km SE of Fairfield Bay, Arkansas"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.260166699999999,
          35.575166699999997,
          1.6699999999999999
        ]
      },
      "id": "nm610251"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.3200000000000001,
        "place": "23km ESE of Yosemite Valley, California",
        "time": 1388547047290,
        "updated": 1486062418970,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133951",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133951&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 27,
        "net": "nc",
        "code": "72133951",
        "ids": ",nc72133951,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 31,
        "dmin": 0.2162,
        "rms": 0.059999999999999998,
        "gap": 143,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 23km ESE of Yosemite Valley, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.3518333,
          37.633666699999999,
          12.592000000000001
        ]
      },
      "id": "nc72133951"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.39000000000000001,
        "place": "18km ESE of Anza, CA",
        "time": 1388546917260,
        "updated": 1457721521297,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408466",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408466&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2,
        "net": "ci",
        "code": "11408466",
        "ids": ",ci11408466,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 20,
        "dmin": 0.068110000000000004,
        "rms": 0.13,
        "gap": 137,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.4 - 18km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.4928333,
          33.484666699999998,
          11.289999999999999
        ]
      },
      "id": "ci11408466"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.68999999999999995,
        "place": "19km SE of Mammoth Lakes, California",
        "time": 1388546906550,
        "updated": 1486062410797,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133946",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133946&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 7,
        "net": "nc",
        "code": "72133946",
        "ids": ",nc72133946,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 22,
        "dmin": 0.071169999999999997,
        "rms": 0.029999999999999999,
        "gap": 108,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 19km SE of Mammoth Lakes, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.82550000000001,
          37.518833299999997,
          3.9119999999999999
        ]
      },
      "id": "nc72133946"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.42999999999999999,
        "place": "6km NW of The Geysers, California",
        "time": 1388546291670,
        "updated": 1486062404751,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133941",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133941&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72133941",
        "ids": ",nc72133941,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.01171,
        "rms": 0.02,
        "gap": 146,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8141632,
          38.8118324,
          1.573
        ]
      },
      "id": "nc72133941"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.42999999999999999,
        "place": "7km W of Cobb, California",
        "time": 1388546175270,
        "updated": 1486062399367,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133936",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133936&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72133936",
        "ids": ",nc72133936,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.01081,
        "rms": 0.02,
        "gap": 99,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 7km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.803833,
          38.8328323,
          1.429
        ]
      },
      "id": "nc72133936"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.46,
        "place": "6km NW of The Geysers, California",
        "time": 1388546075940,
        "updated": 1486062392410,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133931",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133931&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 33,
        "net": "nc",
        "code": "72133931",
        "ids": ",nc72133931,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 48,
        "dmin": 0.0054050000000000001,
        "rms": 0.040000000000000001,
        "gap": 34,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.5 - 6km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80500000000001,
          38.827333299999999,
          1.8700000000000001
        ]
      },
      "id": "nc72133931"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.69999999999999996,
        "place": "12km NW of West Yellowstone, Montana",
        "time": 1388545895000,
        "updated": 1536776727440,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050582",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050582&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 8,
        "net": "uu",
        "code": "60050582",
        "ids": ",uu60050582,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 12,
        "dmin": 0.01273,
        "rms": 0.14999999999999999,
        "gap": 86,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.7 - 12km NW of West Yellowstone, Montana"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.2093333,
          44.742166699999999,
          11.390000000000001
        ]
      },
      "id": "uu60050582"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.4199999999999999,
        "place": "6km NNE of Chatsworth, CA",
        "time": 1388545763820,
        "updated": 1457694826136,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408458",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408458&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 31,
        "net": "ci",
        "code": "11408458",
        "ids": ",ci11408458,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 25,
        "dmin": 0.053429999999999998,
        "rms": 0.20999999999999999,
        "gap": 79,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.4 - 6km NNE of Chatsworth, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.5758333,
          34.300666700000001,
          8.2050000000000001
        ]
      },
      "id": "ci11408458"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.58999999999999997,
        "place": "2km SE of The Geysers, California",
        "time": 1388545621350,
        "updated": 1486062383801,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133921",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133921&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72133921",
        "ids": ",nc72133921,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 10,
        "dmin": 0.014409999999999999,
        "rms": 0.02,
        "gap": 81,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 2km SE of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7320023,
          38.762664800000003,
          1.6679999999999999
        ]
      },
      "id": "nc72133921"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.75,
        "place": "5km NW of The Geysers, California",
        "time": 1388545553310,
        "updated": 1486062378343,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133916",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133916&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 9,
        "net": "nc",
        "code": "72133916",
        "ids": ",nc72133916,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 13,
        "dmin": 0.0054050000000000001,
        "rms": 0.029999999999999999,
        "gap": 92,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.8 - 5km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.79582980000001,
          38.813667299999999,
          2.4809999999999999
        ]
      },
      "id": "nc72133916"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1299999999999999,
        "place": "24km SE of Yosemite Valley, California",
        "time": 1388545549070,
        "updated": 1486062372882,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133926",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133926&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 20,
        "net": "nc",
        "code": "72133926",
        "ids": ",nc72133926,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.22339999999999999,
        "rms": 0.14000000000000001,
        "gap": 137,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 24km SE of Yosemite Valley, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.3588333,
          37.608333299999998,
          7.8490000000000002
        ]
      },
      "id": "nc72133926"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.45000000000000001,
        "place": "7km W of Cobb, California",
        "time": 1388544876470,
        "updated": 1486062365760,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133911",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133911&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72133911",
        "ids": ",nc72133911,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 26,
        "dmin": 0.01081,
        "rms": 0.02,
        "gap": 53,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - 7km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80333330000001,
          38.834499999999998,
          1.7649999999999999
        ]
      },
      "id": "nc72133911"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.8999999999999999,
        "place": "41km WSW of Lakeside, Montana",
        "time": 1388544550600,
        "updated": 1388769282269,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/mb14069302",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=mb14069302&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "AUTOMATIC",
        "tsunami": 0,
        "sig": 56,
        "net": "mb",
        "code": "14069302",
        "ids": ",mb14069302,",
        "sources": ",mb,",
        "types": ",general-link,general-link,geoserve,nearby-cities,origin,",
        "nst": 18,
        "dmin": 0.047610710000000001,
        "rms": 0.23999999999999999,
        "gap": 100.8,
        "magType": "Md",
        "type": "earthquake",
        "title": "M 1.9 - 41km WSW of Lakeside, Montana"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.7478,
          47.891300000000001,
          2.8999999999999999
        ]
      },
      "id": "mb14069302"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.6000000000000001,
        "place": "48km NE of Thompson Falls, Montana",
        "time": 1388544548500,
        "updated": 1388592985177,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/mb14746480",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=mb14746480&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "AUTOMATIC",
        "tsunami": 0,
        "sig": 39,
        "net": "mb",
        "code": "14746480",
        "ids": ",mb14746480,",
        "sources": ",mb,",
        "types": ",general-link,general-link,geoserve,nearby-cities,origin,",
        "nst": 5,
        "dmin": 0.11678099,
        "rms": 0.01,
        "gap": 288,
        "magType": "Md",
        "type": "earthquake",
        "title": "M 1.6 - 48km NE of Thompson Falls, Montana"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.9191,
          47.930999999999997,
          10.699999999999999
        ]
      },
      "id": "mb14746480"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1399999999999999,
        "place": "24km SE of Yosemite Valley, California",
        "time": 1388544510990,
        "updated": 1486062354024,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133906",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133906&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 20,
        "net": "nc",
        "code": "72133906",
        "ids": ",nc72133906,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 22,
        "dmin": 0.21890000000000001,
        "rms": 0.14000000000000001,
        "gap": 137,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 24km SE of Yosemite Valley, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.35366670000001,
          37.612833299999998,
          5.649
        ]
      },
      "id": "nc72133906"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1499999999999999,
        "place": "26km SE of Yosemite Valley, California",
        "time": 1388544097350,
        "updated": 1486062347329,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133901",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133901&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 20,
        "net": "nc",
        "code": "72133901",
        "ids": ",nc72133901,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 16,
        "dmin": 0.2054,
        "rms": 0.080000000000000002,
        "gap": 183,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.2 - 26km SE of Yosemite Valley, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.3356667,
          37.600999999999999,
          6.9790000000000001
        ]
      },
      "id": "nc72133901"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56000000000000005,
        "place": "7km W of Cobb, California",
        "time": 1388543620830,
        "updated": 1486062340990,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133896",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133896&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72133896",
        "ids": ",nc72133896,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 10,
        "dmin": 0.0027030000000000001,
        "rms": 0.02,
        "gap": 94,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 7km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.8105011,
          38.825668299999997,
          2.2730000000000001
        ]
      },
      "id": "nc72133896"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": -0.59999999999999998,
        "place": "Nevada",
        "time": 1388543510107,
        "updated": 1530313182826,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432932",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432932&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "nn",
        "code": "00432932",
        "ids": ",nn00432932,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 3,
        "dmin": 0.056000000000000001,
        "rms": 0.032000000000000001,
        "gap": 175.02000000000001,
        "magType": "ml",
        "type": "earthquake",
        "title": "M -0.6 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.99120000000001,
          37.001399999999997,
          6.2999999999999998
        ]
      },
      "id": "nn00432932"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.1000000000000001,
        "place": "Nevada",
        "time": 1388543310478,
        "updated": 1530313184171,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00432821",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00432821&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 19,
        "net": "nn",
        "code": "00432821",
        "ids": ",nn00432821,",
        "sources": ",nn,",
        "types": ",origin,phase-data,",
        "nst": 5,
        "dmin": 0.39800000000000002,
        "rms": 0.089700000000000002,
        "gap": 130.87,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 1.1 - Nevada"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.0714,
          38.040500000000002,
          0
        ]
      },
      "id": "nn00432821"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.01,
        "place": "7km NW of The Geysers, California",
        "time": 1388543034150,
        "updated": 1486062334949,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133891",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133891&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 16,
        "net": "nc",
        "code": "72133891",
        "ids": ",nc72133891,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 19,
        "dmin": 0.0081080000000000006,
        "rms": 0.040000000000000001,
        "gap": 58,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.0 - 7km NW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.82483670000001,
          38.821498900000002,
          0.20100000000000001
        ]
      },
      "id": "nc72133891"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.26,
        "place": "24km WSW of Coalinga, California",
        "time": 1388542581940,
        "updated": 1486062326630,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133886",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133886&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 24,
        "net": "nc",
        "code": "72133886",
        "ids": ",nc72133886,",
        "sources": ",nc,",
        "types": ",focal-mechanism,geoserve,nearby-cities,origin,phase-data,scitech-link,tectonic-summary,",
        "nst": 39,
        "dmin": 0.025229999999999999,
        "rms": 0.089999999999999997,
        "gap": 76,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.3 - 24km WSW of Coalinga, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.6138333,
          36.048333300000003,
          2.7719999999999998
        ]
      },
      "id": "nc72133886"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.23000000000000001,
        "place": "4km WNW of Cobb, California",
        "time": 1388542369450,
        "updated": 1486062317900,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133881",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133881&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "nc",
        "code": "72133881",
        "ids": ",nc72133881,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 12,
        "dmin": 0.00090090000000000005,
        "rms": 0.029999999999999999,
        "gap": 73,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.2 - 4km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.77083330000001,
          38.831000000000003,
          1.214
        ]
      },
      "id": "nc72133881"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.3999999999999999,
        "place": "10km NNE of Ocotillo Wells, CA",
        "time": 1388541642000,
        "updated": 1457721519616,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408450",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408450&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 89,
        "net": "ci",
        "code": "11408450",
        "ids": ",ci11408450,",
        "sources": ",ci,",
        "types": ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 77,
        "dmin": 0.097059999999999994,
        "rms": 0.17999999999999999,
        "gap": 30,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 2.4 - 10km NNE of Ocotillo Wells, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.0813333,
          33.225000000000001,
          9.1319999999999997
        ]
      },
      "id": "ci11408450"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.45000000000000001,
        "place": "Northern California",
        "time": 1388541160010,
        "updated": 1486062311689,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133871",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133871&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72133871",
        "ids": ",nc72133871,",
        "sources": ",nc,",
        "types": ",nearby-cities,origin,phase-data,",
        "nst": 5,
        "dmin": 0.0081080000000000006,
        "rms": 0.01,
        "gap": 279,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.5 - Northern California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.81733699999999,
          38.828666699999999,
          4.7400000000000002
        ]
      },
      "id": "nc72133871"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.42999999999999999,
        "place": "7km WNW of Cobb, California",
        "time": 1388540766560,
        "updated": 1486062303905,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133866",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133866&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 3,
        "net": "nc",
        "code": "72133866",
        "ids": ",nc72133866,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 6,
        "dmin": 0.01532,
        "rms": 0.01,
        "gap": 127,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.4 - 7km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80166629999999,
          38.837001800000003,
          1.5169999999999999
        ]
      },
      "id": "nc72133866"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.05,
        "place": "7km W of Cobb, California",
        "time": 1388540668430,
        "updated": 1486062297884,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133861",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133861&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 17,
        "net": "nc",
        "code": "72133861",
        "ids": ",nc72133861,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 17,
        "dmin": 0.01081,
        "rms": 0.01,
        "gap": 96,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 7km W of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.80316929999999,
          38.833667800000001,
          1.5489999999999999
        ]
      },
      "id": "nc72133861"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.55000000000000004,
        "place": "27km W of Chester, California",
        "time": 1388540337550,
        "updated": 1486062291430,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133856",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133856&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72133856",
        "ids": ",nc72133856,",
        "sources": ",nc,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.14230000000000001,
        "rms": 0.080000000000000002,
        "gap": 126,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 27km W of Chester, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.55333330000001,
          40.295333300000003,
          2.1459999999999999
        ]
      },
      "id": "nc72133856"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.1899999999999999,
        "place": "23km WSW of Malad City, Idaho",
        "time": 1388539667160,
        "updated": 1536775960820,
        "tz": -420,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uu60050572",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uu60050572&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 74,
        "net": "uu",
        "code": "60050572",
        "ids": ",uu60050572,",
        "sources": ",uu,",
        "types": ",cap,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
        "nst": 25,
        "dmin": 0.022169999999999999,
        "rms": 0.20000000000000001,
        "gap": 148,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 2.2 - 23km WSW of Malad City, Idaho"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.5171667,
          42.125166700000001,
          5.2599999999999998
        ]
      },
      "id": "uu60050572"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.57999999999999996,
        "place": "15km N of Borrego Springs, CA",
        "time": 1388538268330,
        "updated": 1457682051490,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408442",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408442&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "ci",
        "code": "11408442",
        "ids": ",ci11408442,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 17,
        "dmin": 0.12130000000000001,
        "rms": 0.13,
        "gap": 155,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.6 - 15km N of Borrego Springs, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.38983330000001,
          33.387666699999997,
          11.576000000000001
        ]
      },
      "id": "ci11408442"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.10000000000000001,
        "place": "21km ESE of Anza, CA",
        "time": 1388537639130,
        "updated": 1457762408379,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408434",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408434&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 0,
        "net": "ci",
        "code": "11408434",
        "ids": ",ci11408434,",
        "sources": ",ci,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 15,
        "dmin": 0.1128,
        "rms": 0.10000000000000001,
        "gap": 153,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 0.1 - 21km ESE of Anza, CA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.4728333,
          33.462499999999999,
          12.558999999999999
        ]
      },
      "id": "ci11408434"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.22,
        "place": "21km NNW of Amboy, Washington",
        "time": 1388536764680,
        "updated": 1469215315430,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664276",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664276&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 1,
        "net": "uw",
        "code": "60664276",
        "ids": ",uw60664276,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 9,
        "dmin": 0.085650000000000004,
        "rms": 0.10000000000000001,
        "gap": 182,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.2 - 21km NNW of Amboy, Washington"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.5188333,
          46.092666700000002,
          13.970000000000001
        ]
      },
      "id": "uw60664276"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 1.0700000000000001,
        "place": "4km WNW of Cobb, California",
        "time": 1388536602470,
        "updated": 1486062284045,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133846",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133846&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "automatic",
        "tsunami": 0,
        "sig": 18,
        "net": "nc",
        "code": "72133846",
        "ids": ",nc72133846,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,",
        "nst": 14,
        "dmin": 0.006306,
        "rms": 0.050000000000000003,
        "gap": 90,
        "magType": "md",
        "type": "earthquake",
        "title": "M 1.1 - 4km WNW of Cobb, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.7776642,
          38.832000700000002,
          0.187
        ]
      },
      "id": "nc72133846"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 0.56999999999999995,
        "place": "9km WNW of The Geysers, California",
        "time": 1388535010970,
        "updated": 1486062277926,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72133841",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72133841&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 5,
        "net": "nc",
        "code": "72133841",
        "ids": ",nc72133841,",
        "sources": ",nc,",
        "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
        "nst": 30,
        "dmin": 0.0072069999999999999,
        "rms": 0.040000000000000001,
        "gap": 65,
        "magType": "md",
        "type": "earthquake",
        "title": "M 0.6 - 9km WNW of The Geysers, California"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.84350000000001,
          38.821666700000002,
          2.1400000000000001
        ]
      },
      "id": "nc72133841"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 2.2000000000000002,
        "place": "1km NW of Sweet Home, Oregon",
        "time": 1388534755060,
        "updated": 1469215315190,
        "tz": -480,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/uw60664271",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=uw60664271&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 74,
        "net": "uw",
        "code": "60664271",
        "ids": ",uw60664271,",
        "sources": ",uw,",
        "types": ",cap,general-link,geoserve,nearby-cities,origin,phase-data,",
        "nst": 4,
        "dmin": 0.1157,
        "rms": 0.070000000000000007,
        "gap": 179,
        "magType": "md",
        "type": "explosion",
        "title": "M 2.2 Explosion - 1km NW of Sweet Home, Oregon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.74983330000001,
          44.408000000000001,
          -0.34799999999999998
        ]
      },
      "id": "uw60664271"
    }
  ],
  "bbox": [
    -123.622,
    32.2136667,
    -2.884,
    -74.2878333,
    48.4256667,
    29.404
  ]
}


L.geoJson(url, {
  pointToLayer: function (feature, latlng) {
      var popupOptions = { maxWith: 200};
      var popupContent = "<h3>" + feature.properties.title +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>";

    function getOptions (properties) {
      if (properties.mag < 1) {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#a1dab4"
        };
      } else if (properties.mag <= 2) {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#ffffcc"
        };
      } else if (properties.mag <= 3) {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#febd1a"
        };
      } else if (properties.mag <= 4) {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#FD8D3C"
        };
      } else if (properties.mag <= 5) {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#FC4E2A"
        };
      } else {
        return {
          radius: properties.mag * 10,
          color: "black",
          weight: 1,
          fillOpacity: 1,
          fillColor: "#BD0026"
        };
      }
    } 
    return L.circleMarker(latlng, getOptions(feature.properties))
    .bindPopup(popupContent, popupOptions);
  }
}).addTo(myMap);

// Set up the legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");
  div.innerHTML += '<i style="background: #a1dab4"></i><span>0-1</span><br>';
  div.innerHTML += '<i style="background: #ffffcc"></i><span>1-2</span><br>';
  div.innerHTML += '<i style="background: #febd1a"></i><span>2-3</span><br>';
  div.innerHTML += '<i style="background: #FD8D3C"></i><span>3-4</span><br>';
  div.innerHTML += '<i style="background: #FC4E2A"></i><span>4-5</span><br>';
  div.innerHTML += '<i style="background: #BD0026"></i><span>5+</span><br>';

  return div;
};

// Adding legend to the map
legend.addTo(myMap);


 
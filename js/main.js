const CHART = document.getElementById("lineChart");


var geju_data = null;
var geju_json = null



function readJSON(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

var geju_json = JSON.parse(readJSON("https://graph.facebook.com/geraldojulio40/posts/?since=2016-08-15&access_token=669914756492807|LwbpppgvMTljvj-QAFn-K1-3r7E&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1471491166&oauth_nonce=U5zDJL&oauth_version=1.0&oauth_signature=yt7Iic9uyOfiXvG3mZOe8q+EH00="));
var coelho_json = JSON.parse(readJSON());
var krause_json = JSON.parse(readJSON());
var jp_json = JSON.parse(readJSON());
var ed_json = JSON.parse(readJSON());
var carlos_json = JSON.parse(readJSON());

for (var i = 0; i < geju_json.length; i++) {
  var msg_geju = geju_json.data[i].message;
}

function freqCount(jsonString) {
   var rawWords = jsonString.split(" ");
   var cleanWords = words.replace(/[{\"\':}]/g, "");
   var words = cleanWords.filter(function(w) {
      return w !== "";
   });

   var freqCounts = {};
   for(index in words) {
      if(!(words[index] in freqCounts)) {
          freqCounts[words[index]] = 0;
      } else {
          freqCounts[words[index]]++;
      }
   }

   return freqCounts;
}








let lineChart =  new Chart(CHART, {
    type: 'radar',
    data: {
    labels: ["Segurança", "Saude", "Educação", "Mobilidade", "Meio Ambiente", "Corrupção", ],
    datasets: [
        {
            label: "Geraldo Julio(PSB)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(241,194,0,0.4)",
            borderColor: "#f1c200",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(148,27,27,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(148,27,27,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "Daniel Coelho(PSDB)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(0,89,171,0.4)",
            borderColor: "#93b8da",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,89,171,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(148,27,27,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30, 50, 48, 38, 90, 68, 48],
            spanGaps: false,
        }
    ]
    }
});

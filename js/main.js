"use strict"

const CHART = document.getElementById("lineChart");

var filteredWords = [];

function readJSON(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

function freqCount(string,freqCounts) {
   var rawWords = string.split(" ");
   var words = rawWords.filter(function(w) {
       return filteredWords.indexOf(w) < 0;
   });

    for(var index in words) {
       if(!(words[index] in freqCounts)) {
           freqCounts[words[index]] = 1;
       } else {
           freqCounts[words[index]]++;
       }
    }

    console.log(freqCounts);
   return freqCounts;
}

function sortedFreqs(freqs,candidate) {
    var freqTable = freqs[candidate];

    if(freqTable == undefined) {
	return undefined;
    } else {
	var array = [];
	
	for(var w in freqTable) {
	    array.push({ "word" : w, "frequency" : freqTable[w] });
	}

	var sorted = array.sort(function(a,b) {
	    return a.frequency < b.frequency;
	});

	return sorted;
    }
}

const pages = {   "geju"   : "geraldojulio40",
		  "krause" : "priscilakrauseoficial",
		  "jp"     : "",
		  "ed"     : "EdilsonSilvaPSOL",
		  "carlos" : ""
	      };


var jsons = {};
for(i in pages) {
    if(pages[i] != "") {
	var queryStr = "https://graph.facebook.com/"+pages[i]+"/posts/?since=2016-08-15&access_token=669914756492807|LwbpppgvMTljvj-QAFn-K1-3r7E&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1471491166&oauth_nonce=U5zDJL&oauth_version=1.0&oauth_signature=yt7Iic9uyOfiXvG3mZOe8q+EH00="
	jsons[i] = JSON.parse(readJSON(queryStr));
    }
}

var counts = {};
for(var i in jsons) {
    console.log(i,":");
    var jsonData = jsons[i];
    console.log("data :",jsonData);
    var freq = {}
    for(var j = 0; j < jsonData.data.length; ++j) {
	var msg = jsonData.data[j].message;
	freq = freqCount(msg,freq);
    }

    counts[i] = freq;
}

//aqui, counts contém os objectos com as contagens de palavras para cada candidato

//para obter a contagem ordenada para cada candidato, usa-se a função sortedFreqs com o identificador daquele candidato
var sorted = sortedFreqs(counts,"geju");

//essa função retorna um array de objetos da forma { "word" : palavra, "frequency" : contagem }

/*
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
});*/

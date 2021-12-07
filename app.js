//water


// function getFirebaseDataon() {
//     firebase.database().ref('Tank_Data/1-set').once('value', function(data) { //for every object each time it is run
//         tank_level = data.val()
//         console.log(tank_level)
//     })
// }
// getFirebaseDataon()

//Kitchen
function KitchenFireButton() {
    fire = document.getElementById("fire");
    nofire = document.getElementById("nofire");
    firebutton = document.getElementById("firebutton");
    if (fire.style.display == "none") {
        document.body.style.backgroundImage = "url(fire.jpg)";
        nofire.style.display = "none";
        fire.style.display = "block";
        firebutton.innerText = "Aag bhuja do"
    } else {
        document.body.style.backgroundImage = "url(background1.jpg)";
        fire.style.display = "none";
        nofire.style.display = "block";
        firebutton.innerText = "Aag laga do"
    }
}

//Energy
var options = {
    series: [67],
    chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function(val) {
                        return val + " Watt";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Energy'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



current = document.getElementById("current").value
voltage = document.getElementById("voltage1").value
phase = document.getElementById("phase")
console.log(current)
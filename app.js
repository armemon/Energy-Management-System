//water

// function getFirebaseDataon() {
//     firebase.database().ref('Tank_Data/1-set').once('value', function(data) { //for every object each time it is run
//         tank_level = data.val()
//         console.log(tank_level)
//     })
// }
// getFirebaseDataon()
// console.log(document.getElementsByTagName("body").display)
async function getMotorDataOn() {
    firebase.database().ref('Relay').once('value', function (data) {
        RelayData = data.val()
    })
    firebase.database().ref('Relay/motor').on('value', function(data) { 
        RelayData1 = data.val()
         if (RelayData1 == "on") {
            console.log(RelayData1)
            document.getElementById("motoron").setAttribute("checked","")
        }
        if (RelayData1 == "off") {
            document.getElementById("motoroff").setAttribute("checked","")
        }
    })
}

//Temperature
function getTemperatureDataOn() {
    firebase.database().ref('DHT_Data/1-set').on('value', function (data) {
        var TempData = data.val()['Temperature']
        var HumidityData = data.val()['Humidity']
        console.log(TempData)
        console.log(HumidityData)
        document.getElementById("temperature").innerHTML = TempData;
        document.getElementById("humidity").innerHTML = HumidityData;
    })
    firebase.database().ref('Fire_Data/1-set').on('value', function (data) {
        var FireData = data.val()['Fire Reading']
        var SmokeData = data.val()['Smoke Reading']
        console.log(FireData)
        console.log(SmokeData)
        document.getElementById("fire1").innerHTML = FireData;
        document.getElementById("smoke").innerHTML = SmokeData;
    })
}
function getFaultDataOn() {
    firebase.database().ref('Fault').on('value', function (data) {
        var Health = data.val()['Health']
        var FaultType = data.val()['FaultType']
        var FaultCurve = data.val()['FaultCurve']
        var PMS = data.val()['PMS']
        var FaultCurrent = data.val()['FaultCurrent']
        var Parameters = data.val()['Parameters']
        var CurrentSetting = data.val()['CurrentSetting']
        var TMS = data.val()['TMS']
        document.getElementById("healthy").innerHTML = Health;
        document.getElementById("health1").style.backgroundColor = (Health == "Healthy" ? "#a6f1a6" : "#ff3333");
        document.getElementById("fault").innerHTML = FaultType;
        document.getElementById("fcurve").innerHTML = FaultCurve;
        document.getElementById("pms").innerHTML = PMS;
        document.getElementById("fcurrent").innerHTML = FaultCurrent;
        document.getElementById("fcurrentSetting").innerHTML = CurrentSetting;
        document.getElementById("parameters").innerHTML = Parameters;
        document.getElementById("tms").innerHTML = TMS;
    })
}
function getPowerDataOn() {
    firebase.database().ref('Power').on('value', function (data) {
        var Power = data.val()['Power']
        var Voltage = data.val()['Voltage']
        var Current = data.val()['Current']
        var Units = data.val()['Units']
        document.getElementById("power").innerHTML = Power;
        document.getElementById("voltage").innerHTML = Voltage;
        document.getElementById("current").innerHTML = Current;
        document.getElementById("units").innerHTML = Units;
    })
}

//Kitchen
    function changeBG() {
        firebase.database().ref('Fire_Data/1-set').on('value', function(data) { //for every object each time it is run
            fire_data = data.val()['Fire Reading']
            console.log(fire_data)
            var fire = document.getElementById("fire");
            var nofire = document.getElementById("nofire");
            // var firebutton = document.getElementById("firebutton");
            if (fire_data == "True") {
                document.body.style.backgroundImage = "url(fire.jpg)";
            }
            if (fire_data == "False") {
                document.body.style.backgroundImage = "url(background1.jpg)";
            }
        })
}
changeBG()
function getKitchenData() {
    firebase.database().ref('Fire_Data/1-set').on('value', function(data) { //for every object each time it is run
        fire_data = data.val()['Fire Reading']
        var fire = document.getElementById("fire");
        var nofire = document.getElementById("nofire");
        if (fire_data == "True") {
            nofire.style.display = "none";
            fire.style.display = "block";
        }
        if (fire_data == "False") {
            fire.style.display = "none";
            nofire.style.display = "block";
        }
    })
}
var RelayData
function getKitchenRelayDataOnce() {
    firebase.database().ref('Relay').once('value', function (data) {
        RelayData = data.val()
        console.log(RelayData)
        if (RelayData['bulb1'] == "on") {
            document.getElementById("bulb1on").setAttribute("checked", "checked");
        }
    })
}
function getR1RelayDataOnce() {
        firebase.database().ref('Relay').once('value', function(data) { 
            RelayData = data.val()
            console.log(RelayData)
            if (RelayData['bulb2'] == "on") {
                document.getElementById("bulb2on").setAttribute("checked", "");
            }
            if (RelayData['fan1'] == "on") {
                document.getElementById("fan1on").setAttribute("checked", "");
            }
            
        })
}
function getR2RelayDataOnce() {
    firebase.database().ref('Relay').once('value', function(data) { 
        RelayData = data.val()
        console.log(RelayData)
        if (RelayData['bulb3'] == "on") {
            document.getElementById("bulb3on").setAttribute("checked", "");
        }
    })
}

// var RelayData ={
//     bulb1: "off",
//     bulb2: "off",
//     bulb3: "off",
//     fan1: "off",
// }
function motoron() {
    RelayData['motor'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}
function motoroff() {
    RelayData['motor'] = "off"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb1on() {
    RelayData['bulb1'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb1off() {
    RelayData['bulb1'] = "off"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb2on() {
    RelayData['bulb2'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb2off() {
    RelayData['bulb2'] = "off"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb3on() {
    RelayData['bulb3'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}
function bulb3off() {
    RelayData['bulb3'] = "off"
    firebase.database().ref('Relay').set(RelayData)
}
function fan1on() {
    RelayData['fan1'] = "on"
    firebase.database().ref('Relay').set(RelayData)
}
function fan1off() {
    RelayData['fan1'] = "off"
    firebase.database().ref('Relay').set(RelayData)
    }
// function bulb1on() {
//     firebase.database().ref('Relay/bulb1').set({bulb1:"on"})
// }
// function bulb1off() {
//     firebase.database().ref('Relay/bulb1').set({bulb1:"off"})
// }
// function bulb2on() {
//     firebase.database().ref('Relay/bulb2').set({bulb2:"on"})
// }
// function bulb2off() {
//     firebase.database().ref('Relay/bulb2').set({bulb2:"off"})
// }
// function bulb3on() {
//     firebase.database().ref('Relay/bulb3').set({bulb3:"on"})
// }
// function bulb3off() {
//     firebase.database().ref('Relay/bulb3').set({bulb3:"off"})
//     }

//Energy
function energyChart(){
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
}



// current = document.getElementById("current").value
// voltage = document.getElementById("voltage").value
// phase = document.getElementById("phase")
// console.log(current)